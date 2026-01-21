import { createModal } from './modal'

export function createWaitlistForm(containerId, options = {}) {
  const {
    buttonText = 'Join Waitlist',
    placeholder = 'Enter your email',
    onSuccess = null,
    onError = null,
    referralSource = 'website'
  } = options

  const modal = createModal()

  const container = document.getElementById(containerId)
  if (!container) return

  const formHtml = `
    <form id="waitlist-form-${containerId}" class="waitlist-form-container" novalidate>
      <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div class="flex-1 relative">
          <input
            type="email"
            id="waitlist-email-${containerId}"
            name="email"
            placeholder="${placeholder}"
            required
            class="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
            aria-label="Email address"
            aria-describedby="email-error-${containerId}"
          />
          <div id="email-error-${containerId}" class="absolute text-xs text-red-600 dark:text-red-400 mt-1 hidden" role="alert"></div>
        </div>
        <button
          type="submit"
          class="group relative px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 rounded-lg font-semibold text-sm dark:hover:bg-blue-50 transition-all flex items-center justify-center gap-2 overflow-hidden shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Submit email to join waitlist"
        >
          <span class="button-text relative z-10">${buttonText}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
      <div id="waitlist-message-${containerId}" class="mt-4 text-center text-sm hidden" role="status" aria-live="polite"></div>
    </form>
  `

  container.innerHTML = formHtml

  const form = document.getElementById(`waitlist-form-${containerId}`)
  const emailInput = document.getElementById(`waitlist-email-${containerId}`)
  const errorDiv = document.getElementById(`email-error-${containerId}`)
  const messageDiv = document.getElementById(`waitlist-message-${containerId}`)
  const submitButton = form.querySelector('button[type="submit"]')
  const buttonTextElement = submitButton.querySelector('.button-text')

  function showError(message) {
    errorDiv.textContent = message
    errorDiv.classList.remove('hidden')
    emailInput.classList.add('border-red-500', 'dark:border-red-400')
    emailInput.setAttribute('aria-invalid', 'true')
  }

  function hideError() {
    errorDiv.textContent = ''
    errorDiv.classList.add('hidden')
    emailInput.classList.remove('border-red-500', 'dark:border-red-400')
    emailInput.setAttribute('aria-invalid', 'false')
  }

  function showMessage(message, type = 'success') {
    messageDiv.textContent = message
    messageDiv.classList.remove('hidden', 'text-red-600', 'text-green-600', 'text-blue-600')

    if (type === 'success') {
      messageDiv.classList.add('text-green-600', 'dark:text-green-400')
    } else if (type === 'error') {
      messageDiv.classList.add('text-red-600', 'dark:text-red-400')
    } else {
      messageDiv.classList.add('text-blue-600', 'dark:text-blue-400')
    }
  }

  function hideMessage() {
    messageDiv.classList.add('hidden')
  }

  function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    return emailRegex.test(email)
  }

  function setLoading(isLoading) {
    submitButton.disabled = isLoading
    emailInput.disabled = isLoading

    if (isLoading) {
      buttonTextElement.textContent = 'Joining...'
    } else {
      buttonTextElement.textContent = buttonTextElement.dataset.originalText || buttonTextElement.textContent
    }
  }

  buttonTextElement.dataset.originalText = buttonTextElement.textContent

  emailInput.addEventListener('input', () => {
    hideError()
    hideMessage()
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    hideError()
    hideMessage()

    const email = emailInput.value.trim()

    if (!email) {
      showError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      showError('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration missing')
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/waitlist-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          email,
          referralSource
        })
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409 && data.alreadySubscribed) {
          modal.open('You\'re already on the waitlist! We\'ll notify you when we launch.')
          emailInput.value = ''
          if (onSuccess) onSuccess(data)
        } else {
          throw new Error(data.error || 'Failed to join waitlist')
        }
      } else {
        modal.open('Thank you for joining the AI Agent Pals waitlist. We\'ll notify you when we launch!')
        emailInput.value = ''
        if (onSuccess) onSuccess(data)
      }
    } catch (error) {
      console.error('Waitlist signup error:', error)
      const errorMessage = error.message || 'Something went wrong. Please try again.'
      showMessage(errorMessage, 'error')
      if (onError) onError(error)
    } finally {
      setLoading(false)
    }
  })
}

export function renderWaitlistFormHTML(options = {}) {
  const {
    buttonText = 'Join Waitlist',
    placeholder = 'Enter your email',
    id = 'waitlist-form-default'
  } = options

  return `
    <div id="${id}" class="waitlist-form-wrapper"></div>
  `
}

export function createModal() {
  const modalHtml = `
    <div id="success-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all scale-95 opacity-0" id="modal-content">
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
            <i data-lucide="check-circle-2" class="w-8 h-8 text-green-600 dark:text-green-400"></i>
          </div>
          <h3 id="modal-title" class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            You're on the list!
          </h3>
          <p class="text-slate-600 dark:text-slate-400 mb-6" id="modal-message">
            Thank you for joining the AI Agent Pals waitlist. We'll notify you when we launch!
          </p>
          <button
            id="modal-close-btn"
            class="w-full px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-50 rounded-lg font-semibold transition-all shadow-lg"
            aria-label="Close modal"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  `

  const existingModal = document.getElementById('success-modal')
  if (existingModal) {
    existingModal.remove()
  }

  document.body.insertAdjacentHTML('beforeend', modalHtml)

  const modal = document.getElementById('success-modal')
  const modalContent = document.getElementById('modal-content')
  const closeBtn = document.getElementById('modal-close-btn')

  function openModal(message = null) {
    if (message) {
      document.getElementById('modal-message').textContent = message
    }

    modal.classList.remove('hidden')
    modal.classList.add('flex')

    setTimeout(() => {
      modalContent.classList.remove('scale-95', 'opacity-0')
      modalContent.classList.add('scale-100', 'opacity-100')
    }, 10)

    document.body.style.overflow = 'hidden'

    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons()
    }
  }

  function closeModal() {
    modalContent.classList.remove('scale-100', 'opacity-100')
    modalContent.classList.add('scale-95', 'opacity-0')

    setTimeout(() => {
      modal.classList.remove('flex')
      modal.classList.add('hidden')
      document.body.style.overflow = ''
    }, 200)
  }

  closeBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal()
    }
  })

  return {
    open: openModal,
    close: closeModal
  }
}

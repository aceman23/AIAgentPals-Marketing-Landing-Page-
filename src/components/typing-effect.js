export function initTypingEffect() {
  const textEl = document.getElementById('typing-text')
  if (!textEl) return

  const phrases = [
    "Always On-Device.",
    "Custom Pals",
    "Agentic Workflows",
    "True Privacy",
    "Massive Models Locally",
    "Offline Forever"
  ]

  let phraseIndex = 0
  let charIndex = phrases[0].length
  let isDeleting = false

  function loop() {
    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      charIndex--
    } else {
      charIndex++
    }

    if (charIndex === 0) {
      textEl.innerHTML = "&nbsp;"
    } else {
      textEl.textContent = currentPhrase.substring(0, charIndex)
    }

    let delta = isDeleting ? 40 : 80

    if (!isDeleting && charIndex === currentPhrase.length) {
      delta = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
      delta = 500
    }

    setTimeout(loop, delta)
  }

  setTimeout(loop, 2500)
}

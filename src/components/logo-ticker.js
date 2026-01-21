export function createLogoTicker() {
  const logos = [
    { name: 'OpenAI', image: '/openai-color.png' },
    { name: 'Claude', image: '/claude-color.png' },
    { name: 'Grok', image: '/grok-color.png' },
    { name: 'Qwen', image: '/qwen-color.png' },
    { name: 'Ollama', image: '/ollama-color.png' }
  ]

  const tickerContainer = document.getElementById('logo-ticker')
  if (!tickerContainer) return

  const tickerHTML = `
    <div class="relative overflow-hidden w-full">
      <div class="flex animate-scroll">
        ${logos.map(logo => `
          <div class="flex items-center gap-3 px-8 flex-shrink-0">
            <img
              src="${logo.image}"
              alt="${logo.name}"
              class="w-8 h-8 object-contain"
              loading="lazy"
            />
            <span class="text-xl font-bold tracking-tight text-slate-800 dark:text-white whitespace-nowrap">${logo.name}</span>
          </div>
        `).join('')}
        ${logos.map(logo => `
          <div class="flex items-center gap-3 px-8 flex-shrink-0">
            <img
              src="${logo.image}"
              alt="${logo.name}"
              class="w-8 h-8 object-contain"
              loading="lazy"
            />
            <span class="text-xl font-bold tracking-tight text-slate-800 dark:text-white whitespace-nowrap">${logo.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `

  tickerContainer.innerHTML = tickerHTML
}

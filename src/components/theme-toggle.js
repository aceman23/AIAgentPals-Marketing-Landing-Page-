export function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle')
  const html = document.documentElement

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }

  themeToggleBtn.addEventListener('click', () => {
    html.classList.toggle('dark')
    if (html.classList.contains('dark')) {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
  })
}

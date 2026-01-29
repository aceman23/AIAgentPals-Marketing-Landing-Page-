import './style.css'
import { createIcons, Bot, Menu, Sun, Moon, ShieldCheck, Zap, Infinity, MoreHorizontal, ArrowUp, Cpu, HardDrive } from 'lucide'
import { initTypingEffect } from './components/typing-effect'
import { initThemeToggle } from './components/theme-toggle'
import { createWaitlistForm } from './components/waitlist-form'
import { createLogoTicker } from './components/logo-ticker'

createIcons({
  icons: {
    Bot, Menu, Sun, Moon, ShieldCheck, Zap, Infinity, MoreHorizontal, ArrowUp, Cpu, HardDrive
  },
  attrs: {
    strokeWidth: 1.5
  }
})

initTypingEffect()
initThemeToggle()
createLogoTicker()

createWaitlistForm('hero-waitlist-form', {
  buttonText: 'Join Waitlist',
  placeholder: 'Enter your email for early access',
  referralSource: 'hero'
})

function loadBelowFold() {
  Promise.all([
    import('./components/scroll-animations'),
    import('./components/features'),
    import('./components/pricing'),
    import('./components/resources'),
    import('./components/cta'),
    import('./components/footer'),
    import('lucide')
  ]).then(([
    { initScrollAnimations },
    { renderFeatures },
    { renderPricing },
    { renderResources },
    { renderCTA },
    { renderFooter },
    lucide
  ]) => {
    const contentContainer = document.getElementById('content')

    contentContainer.innerHTML = `
      ${renderFeatures()}
      ${renderPricing()}
      ${renderResources()}
      ${renderCTA()}
      ${renderFooter()}
    `

    initScrollAnimations()

    createWaitlistForm('cta-waitlist-form', {
      buttonText: 'Get Early Access',
      placeholder: 'Your email address',
      referralSource: 'cta'
    })

    lucide.createIcons({
      attrs: {
        strokeWidth: 1.5
      }
    })
  })
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(loadBelowFold, { timeout: 2000 })
} else {
  setTimeout(loadBelowFold, 1)
}

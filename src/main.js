import './style.css'
import { createIcons, Bot, Apple, Smartphone, Menu, Sun, Moon, ShieldCheck, Zap, Infinity, MoreHorizontal, ArrowUp, Cpu, HardDrive, Lock, Users, Code2, ChefHat, Scale, PenTool, Terminal, BrainCircuit, Shield, Twitter, Github, Linkedin, Check, CheckCircle2 } from 'lucide'
import { initTypingEffect } from './components/typing-effect'
import { initThemeToggle } from './components/theme-toggle'
import { initScrollAnimations } from './components/scroll-animations'
import { renderFeatures } from './components/features'
import { renderPricing } from './components/pricing'
import { renderResources } from './components/resources'
import { renderCTA } from './components/cta'
import { renderFooter } from './components/footer'

createIcons({
  icons: {
    Bot, Apple, Smartphone, Menu, Sun, Moon, ShieldCheck, Zap, Infinity, MoreHorizontal, ArrowUp, Cpu, HardDrive, Lock, Users, Code2, ChefHat, Scale, PenTool, Terminal, BrainCircuit, Shield, Twitter, Github, Linkedin, Check, CheckCircle2
  },
  attrs: {
    strokeWidth: 1.5
  }
})

const contentContainer = document.getElementById('content')

contentContainer.innerHTML = `
  ${renderFeatures()}
  ${renderPricing()}
  ${renderResources()}
  ${renderCTA()}
  ${renderFooter()}
`

initTypingEffect()
initThemeToggle()
initScrollAnimations()

setTimeout(() => {
  createIcons({
    attrs: {
      strokeWidth: 1.5
    }
  })
}, 100)

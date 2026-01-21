export function renderFooter() {
  return `
    <footer class="bg-slate-50/[0.15] dark:bg-slate-950/[0.15] border-slate-200 dark:border-white/5 backdrop-blur-md border-t pt-16 pb-8 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div class="col-span-2 md:col-span-1">
            <div class="mb-4">
              <img src="/logov2.png" alt="AIAgentPals Logo" class="h-8">
            </div>
            <p class="text-xs text-slate-500 leading-relaxed">
              Empowering private, powerful AI for everyone. No cloud, no tracking, just pure intelligence.
            </p>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
            <ul class="space-y-2 text-xs text-slate-500">
              <li><a href="#" class="hover:text-blue-600 dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-blue-600 dark:hover:text-white transition-colors">Models</a></li>
              <li><a href="#" class="hover:text-blue-600 dark:hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">Resources</h4>
            <ul class="space-y-2 text-xs text-slate-500">
              <li><a href="/contact.html" class="hover:text-blue-600 dark:hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" class="hover:text-blue-600 dark:hover:text-white transition-colors">Community</a></li>
              <li><a href="#" class="hover:text-blue-600 dark:hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
            <ul class="space-y-2 text-xs text-slate-500">
              <li><a href="/privacy.html" class="hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms.html" class="hover:text-blue-600 dark:hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span class="text-xs text-slate-600">© 2026 Delivery Apps Now Inc. All rights reserved.</span>
          <div class="flex items-center gap-4">
            <a href="#" class="text-slate-500 hover:text-blue-600 dark:hover:text-white transition-colors">
              <i data-lucide="twitter" class="w-4 h-4"></i>
            </a>
            <a href="#" class="text-slate-500 hover:text-blue-600 dark:hover:text-white transition-colors">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
            <a href="#" class="text-slate-500 hover:text-blue-600 dark:hover:text-white transition-colors">
              <i data-lucide="linkedin" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
}

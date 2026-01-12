export function renderPricing() {
  return `
    <section class="bg-slate-100/80 dark:bg-slate-950/80 border-slate-200 dark:border-none border-t backdrop-blur-md py-12 relative" id="pricing">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12 reveal">
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">Own Your AI Forever</h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg">No monthly subscriptions. Pay once, use forever.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Free Tier -->
          <div class="glass bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col hover:border-slate-300 dark:hover:border-white/10 transition-colors reveal delay-100">
            <h3 class="text-lg font-medium text-slate-900 dark:text-white mb-2">Starter</h3>
            <div class="text-3xl font-bold text-slate-900 dark:text-white mb-6">Free</div>
            <ul class="space-y-4 mb-8 flex-1">
              <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <i data-lucide="check" class="w-4 h-4 text-blue-500 dark:text-white"></i> Up to 7B parameter models
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <i data-lucide="check" class="w-4 h-4 text-blue-500 dark:text-white"></i> 3 Custom Pals
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <i data-lucide="check" class="w-4 h-4 text-blue-500 dark:text-white"></i> Basic Quantization
              </li>
            </ul>
            <a href="#" class="w-full py-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white text-sm font-semibold border border-slate-200 dark:border-white/10 text-center transition-all">Download</a>
          </div>

          <!-- Pro Tier -->
          <div class="relative p-8 rounded-2xl border border-blue-500/50 flex flex-col shadow-2xl shadow-blue-500/10 scale-105 z-10 reveal bg-slate-900">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg text-white">Most Popular</div>
            <h3 class="text-lg font-medium mb-2 text-blue-300">Pro</h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-3xl font-bold text-white">$19.99</span>
              <span class="text-sm text-slate-500">/ lifetime</span>
            </div>
            <ul class="space-y-4 mb-8 flex-1">
              <li class="flex items-center gap-3 text-sm text-slate-300">
                <i data-lucide="check" class="w-4 h-4 text-blue-400"></i> Unlimited Model Size
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-300">
                <i data-lucide="check" class="w-4 h-4 text-blue-400"></i> Unlimited Pals
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-300">
                <i data-lucide="check" class="w-4 h-4 text-blue-400"></i> Image Analysis (Vision)
              </li>
            </ul>
            <a href="#" class="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-center transition-all shadow-lg shadow-blue-500/25 text-white">Get Pro</a>
          </div>

          <!-- Premium Tier -->
          <div class="glass bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col hover:border-slate-300 dark:hover:border-white/10 transition-colors reveal delay-100">
            <h3 class="text-lg font-medium text-slate-900 dark:text-white mb-2">Power User</h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-3xl font-bold text-slate-900 dark:text-white">$49.99</span>
              <span class="text-sm text-slate-500">/ lifetime</span>
            </div>
            <ul class="space-y-4 mb-8 flex-1">
              <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <i data-lucide="check" class="w-4 h-4 text-blue-500 dark:text-white"></i> Everything in Pro
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <i data-lucide="check" class="w-4 h-4 text-blue-500 dark:text-white"></i> Early Access to Features
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <i data-lucide="check" class="w-4 h-4 text-blue-500 dark:text-white"></i> Priority Support
              </li>
            </ul>
            <a href="#" class="w-full py-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white text-sm font-semibold border border-slate-200 dark:border-white/10 text-center transition-all">Go Premium</a>
          </div>
        </div>
      </div>
    </section>
  `
}

export function renderCTA() {
  return `
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-blue-50/50 dark:from-slate-950/50 dark:to-blue-950/20 backdrop-blur-sm"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
          <i data-lucide="bell" class="w-4 h-4"></i>
          <span>Coming Soon to iOS & Android</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">Ready to unplug?</h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join the waitlist and be the first to know when AIAgentPals launches. Get early access to the world's most private AI assistant.</p>

        <div class="flex flex-col sm:flex-row justify-center gap-8 mb-12">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white font-bold text-lg">1</div>
            <span class="text-sm text-slate-500 dark:text-slate-400">Join Waitlist</span>
          </div>
          <div class="hidden sm:block w-16 h-[1px] bg-slate-300 dark:bg-white/10 mt-6"></div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white font-bold text-lg">2</div>
            <span class="text-sm text-slate-500 dark:text-slate-400">Get Launch Alert</span>
          </div>
          <div class="hidden sm:block w-16 h-[1px] bg-slate-300 dark:bg-white/10 mt-6"></div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-500/50 flex items-center justify-center font-bold text-lg text-white">3</div>
            <span class="text-sm text-slate-900 dark:text-white font-medium">Early Access</span>
          </div>
        </div>

        <div id="cta-waitlist-form" class="mb-8"></div>

        <p class="text-xs text-slate-500 dark:text-slate-600 max-w-md mx-auto">
          By joining, you'll receive exclusive updates and early access when we launch. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  `
}

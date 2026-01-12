export function renderCTA() {
  return `
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-blue-50/50 dark:from-slate-950/50 dark:to-blue-950/20 backdrop-blur-sm"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 class="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">Ready to unplug?</h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join thousands of users reclaiming their data and running the world's smartest AI models right from their pocket.</p>

        <div class="flex flex-col sm:flex-row justify-center gap-8 mb-16">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white font-bold text-lg">1</div>
            <span class="text-sm text-slate-500 dark:text-slate-400">Download App</span>
          </div>
          <div class="hidden sm:block w-16 h-[1px] bg-slate-300 dark:bg-white/10 mt-6"></div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white font-bold text-lg">2</div>
            <span class="text-sm text-slate-500 dark:text-slate-400">Select Model</span>
          </div>
          <div class="hidden sm:block w-16 h-[1px] bg-slate-300 dark:bg-white/10 mt-6"></div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-500/50 flex items-center justify-center font-bold text-lg text-white">3</div>
            <span class="text-sm text-slate-900 dark:text-white font-medium">Chat Securely</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 rounded-xl font-bold dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg dark:shadow-none">
            <i data-lucide="apple" class="w-5 h-5"></i> Download for iOS
          </button>
          <button class="w-full sm:w-auto px-8 py-4 bg-white border-slate-300 text-slate-900 hover:bg-slate-50 dark:bg-transparent dark:border-white/20 dark:text-white border rounded-xl font-bold dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            <i data-lucide="smartphone" class="w-5 h-5"></i> Download for Android
          </button>
        </div>
      </div>
    </section>
  `
}

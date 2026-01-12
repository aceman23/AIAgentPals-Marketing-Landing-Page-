export function renderResources() {
  return `
    <section id="blog" class="py-24 border-t border-slate-200 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-semibold text-slate-900 dark:text-white mb-12 tracking-tight">Learn Local AI</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <a href="#" class="group block glass bg-white dark:bg-white/5 border border-slate-200 dark:border-none rounded-xl overflow-hidden hover:shadow-lg dark:hover:bg-white/5 transition-all">
            <div class="h-40 bg-slate-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <i data-lucide="terminal" class="w-12 h-12 text-slate-400 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"></i>
            </div>
            <div class="p-6">
              <div class="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">Guide</div>
              <h3 class="text-lg font-medium text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">How to create a Python Coding Pal</h3>
              <p class="text-sm text-slate-600 dark:text-slate-500">A step-by-step system prompt guide for maximum code accuracy.</p>
            </div>
          </a>

          <!-- Card 2 -->
          <a href="#" class="group block glass bg-white dark:bg-white/5 border border-slate-200 dark:border-none rounded-xl overflow-hidden hover:shadow-lg dark:hover:bg-white/5 transition-all">
            <div class="h-40 bg-slate-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <i data-lucide="brain-circuit" class="w-12 h-12 text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors"></i>
            </div>
            <div class="p-6">
              <div class="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2 uppercase tracking-wide">Update</div>
              <h3 class="text-lg font-medium text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">DeepSeek V3 Benchmarks</h3>
              <p class="text-sm text-slate-600 dark:text-slate-500">Comparing the latest 67B model performance on iPhone 16 Pro.</p>
            </div>
          </a>

          <!-- Card 3 -->
          <a href="#" class="group block glass bg-white dark:bg-white/5 border border-slate-200 dark:border-none rounded-xl overflow-hidden hover:shadow-lg dark:hover:bg-white/5 transition-all">
            <div class="h-40 bg-slate-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <i data-lucide="shield" class="w-12 h-12 text-slate-400 dark:text-slate-600 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"></i>
            </div>
            <div class="p-6">
              <div class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide">Privacy</div>
              <h3 class="text-lg font-medium text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">Why Local AI is the Future</h3>
              <p class="text-sm text-slate-600 dark:text-slate-500">Understanding the risks of cloud LLMs and data harvesting.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  `
}

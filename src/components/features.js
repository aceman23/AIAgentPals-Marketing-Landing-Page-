export function renderFeatures() {
  return `
    <section id="features" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-32">

        <!-- Feature 1: Privacy -->
        <div class="grid md:grid-cols-2 gap-16 items-center reveal">
          <div class="order-2 md:order-1 relative">
            <div class="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full"></div>
            <div class="glass bg-white/60 dark:bg-white/5 rounded-2xl p-6 relative border border-emerald-500/20 shadow-xl shadow-emerald-500/5 dark:shadow-none">
              <div class="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-white/5 pb-4">
                <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400">PRIVACY_CHECK</span>
                <span class="text-xs text-slate-500">System Status: Secure</span>
              </div>
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i> Local Inference Engine Active
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i> Cloud Sync Disabled
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i> No Telemetry Data Sent
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i> End-to-End Encrypted Storage
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 border border-emerald-500/20">
              <i data-lucide="lock" class="w-6 h-6"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">True Privacy by Design</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Your chats never leave your device. We use Apple's MLX and Android's NNAPI to run models locally. No servers, no subscriptions, no prying eyes.
            </p>
          </div>
        </div>

        <!-- Feature 2: Custom Pals -->
        <div class="grid md:grid-cols-2 gap-16 items-center reveal">
          <div>
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 border border-blue-500/20">
              <i data-lucide="users" class="w-6 h-6"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">Build Your Dream Team</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Create specialized agents called "Pals". Define their system prompt, personality, and knowledge base. From a sarcastic Python debugger to an empathetic creative writing coach.
            </p>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full"></div>
            <div class="grid grid-cols-2 gap-4 relative">
              <div class="glass bg-white/60 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300">
                <div class="w-10 h-10 rounded-full bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-3">
                  <i data-lucide="pen-tool" class="w-5 h-5"></i>
                </div>
                <h3 class="font-medium text-slate-900 dark:text-white">Poet Pal</h3>
                <p class="text-xs text-slate-500 mt-1">Specializes in haikus and sonnets.</p>
              </div>
              <div class="glass bg-white/60 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300 mt-8">
                <div class="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                  <i data-lucide="code-2" class="w-5 h-5"></i>
                </div>
                <h3 class="font-medium text-slate-900 dark:text-white">Dev Pal</h3>
                <p class="text-xs text-slate-500 mt-1">Python & Rust expert.</p>
              </div>
              <div class="glass bg-white/60 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300">
                <div class="w-10 h-10 rounded-full bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-3">
                  <i data-lucide="chef-hat" class="w-5 h-5"></i>
                </div>
                <h3 class="font-medium text-slate-900 dark:text-white">Sous Chef</h3>
                <p class="text-xs text-slate-500 mt-1">Recipe generator & timer.</p>
              </div>
              <div class="glass bg-white/60 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300 mt-8">
                <div class="w-10 h-10 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-3">
                  <i data-lucide="scale" class="w-5 h-5"></i>
                </div>
                <h3 class="font-medium text-slate-900 dark:text-white">Legal Aid</h3>
                <p class="text-xs text-slate-500 mt-1">Contract summarizer.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Performance -->
        <div class="grid md:grid-cols-2 gap-16 items-center reveal">
          <div class="order-2 md:order-1 relative">
            <div class="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full"></div>
            <div class="glass bg-white/60 dark:bg-white/5 rounded-2xl p-6 border border-cyan-500/20 shadow-xl shadow-cyan-500/5 dark:shadow-none">
              <div class="space-y-6">
                <div>
                  <div class="flex justify-between text-xs mb-2">
                    <span class="text-slate-900 dark:text-white">Llama-3-8B-Quantized</span>
                    <span class="text-cyan-600 dark:text-cyan-400">120 t/s</span>
                  </div>
                  <div class="h-2 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full w-[95%] bg-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs mb-2">
                    <span class="text-slate-900 dark:text-white">DeepSeek-Coder-33B</span>
                    <span class="text-cyan-600 dark:text-cyan-400">45 t/s</span>
                  </div>
                  <div class="h-2 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full w-[65%] bg-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs mb-2">
                    <span class="text-slate-900 dark:text-white">Qwen-110B (High RAM)</span>
                    <span class="text-cyan-600 dark:text-cyan-400">12 t/s</span>
                  </div>
                  <div class="h-2 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full w-[25%] bg-cyan-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 border border-cyan-500/20">
              <i data-lucide="zap" class="w-6 h-6"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">Blazing Fast Inference</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Optimized for mobile silicon. We utilize 4-bit and 8-bit quantization to fit massive models into your phone's RAM without sacrificing intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
}

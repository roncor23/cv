<template>
  <footer class="bg-slate-900 text-white py-12 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4 text-white">Ronan Otaza</h3>
        <div class="flex justify-center gap-4 mb-6">
          <a href="https://www.linkedin.com/in/ronan-otaza/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-11 h-11 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
          <a href="https://github.com/roncor23" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="w-11 h-11 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>
        <p class="text-gray-400 mb-2">&copy; {{ new Date().getFullYear() }} Ronan Otaza. All rights reserved.</p>
        <p class="text-gray-500 text-sm">Software Engineer & Web Developer</p>
      </div>
    </div>
  </footer>
</template>

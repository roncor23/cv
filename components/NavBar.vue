<template>
  <nav class="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-bold gradient-text">Ronan Otaza</h1>
        </div>
        <div class="hidden md:flex space-x-1">
          <a href="#about" @click="scrollToSection" class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium cursor-pointer">About</a>
          <a href="#portfolio" @click="scrollToSection" class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium cursor-pointer">Portfolio</a>
          <a href="#experience" @click="scrollToSection" class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium cursor-pointer">Experience</a>
          <a href="#education" @click="scrollToSection" class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium cursor-pointer">Education</a>
          <a href="#skills" @click="scrollToSection" class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium cursor-pointer">Skills</a>
          <a href="#contact" @click="scrollToSection" class="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium cursor-pointer">Contact</a>
        </div>
        <button @click="toggleMenu" class="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div v-if="menuOpen" class="md:hidden py-4 space-y-1 bg-gray-50 rounded-lg mt-2">
        <a href="#about" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer" @click="handleNavClick">About</a>
        <a href="#portfolio" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer" @click="handleNavClick">Portfolio</a>
        <a href="#experience" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer" @click="handleNavClick">Experience</a>
        <a href="#education" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer" @click="handleNavClick">Education</a>
        <a href="#skills" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer" @click="handleNavClick">Skills</a>
        <a href="#contact" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer" @click="handleNavClick">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const scrollToSection = (event) => {
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  if (href && href.startsWith('#')) {
    const id = href.substring(1)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

const handleNavClick = (event) => {
  scrollToSection(event)
  toggleMenu()
}
</script>

<template>
  <div class="card relative overflow-hidden group">
    <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
    <div class="pl-6">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{{ job.title }}</h3>
          <p class="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">{{ job.company }}</p>
        </div>
        <span class="mt-2 md:mt-0 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium border border-blue-200">
          {{ job.period }}
        </span>
      </div>
      
      <div class="mb-6">
        <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          Duties and Responsibilities:
        </h4>
        <ul class="space-y-2 text-gray-600 ml-7">
          <li v-for="(duty, index) in job.duties" :key="index" class="flex items-start gap-2">
            <span class="text-blue-600 mt-1.5">•</span>
            <span>{{ duty }}</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Tools / Software:
        </h4>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="(tool, index) in job.tools" 
            :key="index"
            class="tech-badge"
          >
            {{ tool }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true
  }
})
</script>

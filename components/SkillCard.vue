<template>
  <div class="card group">
    <div class="flex justify-between items-center mb-3">
      <span class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{{ skill.name }}</span>
      <span class="text-xs font-semibold px-2 py-1 rounded-full" :class="getLevelBadgeColor(skill.level)">
        {{ skill.level }}
      </span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
      <div 
        class="h-3 rounded-full transition-all duration-700 relative overflow-hidden"
        :class="getLevelBarColor(skill.level)"
        :style="{ width: getLevelWidth(skill.level) }"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  }
})

const getLevelBadgeColor = (level) => {
  const colors = {
    'Advanced': 'bg-green-100 text-green-700 border border-green-200',
    'Proficient': 'bg-blue-100 text-blue-700 border border-blue-200',
    'Intermediate': 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    'Basic': 'bg-gray-100 text-gray-700 border border-gray-200'
  }
  return colors[level] || 'bg-gray-100 text-gray-700 border border-gray-200'
}

const getLevelBarColor = (level) => {
  const colors = {
    'Advanced': 'bg-gradient-to-r from-green-500 to-green-600',
    'Proficient': 'bg-gradient-to-r from-blue-500 to-blue-600',
    'Intermediate': 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    'Basic': 'bg-gradient-to-r from-gray-400 to-gray-500'
  }
  return colors[level] || 'bg-gradient-to-r from-gray-400 to-gray-500'
}

const getLevelWidth = (level) => {
  const widths = {
    'Advanced': '90%',
    'Proficient': '85%',
    'Intermediate': '70%',
    'Basic': '50%'
  }
  return widths[level] || '50%'
}
</script>

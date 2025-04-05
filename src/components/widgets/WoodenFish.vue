<script setup>
import { ref } from 'vue'

const meritCount = ref(0)
const meritTexts = ref([])

const knock = (e) => {
  // 添加点击动画
  e.target.classList.add('active')
  
  // 生成功德文字
  meritTexts.value.push({
    id: Date.now(),
    x: e.offsetX - 20,
    y: e.offsetY - 40,
    opacity: 1
  })
  
  // 更新计数器
  meritCount.value++
  
  // 自动清理旧数据
  if (meritTexts.value.length > 20) {
    meritTexts.value.shift()
  }
}

// 重置按钮样式
const removeActive = (e) => {
  e.target.classList.remove('active')
}
</script>

<template>
  <div class="container">
    <!-- 木鱼 SVG -->
    <svg 
      class="wooden-fish"
      viewBox="0 0 100 100"
      @click="knock"
      @animationend="removeActive"
    >
      <!-- 木鱼主体 -->
      <path 
        d="M20 50 Q50 20 80 50 Q50 80 20 50"
        fill="#d88d57"
        stroke="#6d4c41"
        stroke-width="2"
      />
      <!-- 装饰纹路 -->
      <path 
        d="M30 45 L70 45 M40 50 L60 50 M35 55 L65 55"
        stroke="#6d4c41"
        stroke-width="1.5"
      />
    </svg>

    <!-- 功德计数器 -->
    <div class="counter">功德 +{{ meritCount }}</div>

    <!-- 浮动文字 -->
    <TransitionGroup name="merit">
      <div 
        v-for="text in meritTexts"
        :key="text.id"
        class="merit-text"
        :style="{
          left: text.x + 'px',
          top: text.y + 'px',
          opacity: text.opacity
        }"
      >
        +1
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5e6d3;
}

.wooden-fish {
  width: 200px;
  cursor: pointer;
  transition: transform 0.1s;
}

.wooden-fish:active {
  transform: scale(0.95);
}

.wooden-fish.active {
  animation: knock 0.3s ease;
}

@keyframes knock {
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.counter {
  margin-top: 20px;
  font-size: 24px;
  color: #6d4c41;
  font-family: 'Ma Shan Zheng', cursive;
}

.merit-text {
  position: absolute;
  color: #4CAF50;
  font-size: 20px;
  font-weight: bold;
  pointer-events: none;
  transition: all 1s ease-out;
}

.merit-enter-active,
.merit-leave-active {
  transition: all 1s ease;
}

.merit-enter-from {
  opacity: 0;
  transform: translateY(0);
}

.merit-enter-to {
  opacity: 1;
  transform: translateY(-50px);
}

.merit-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
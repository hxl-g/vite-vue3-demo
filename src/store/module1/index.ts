import { ref } from 'vue'
import { defineStore } from 'pinia'

// 使用setup模式定义
export const initModule1 = defineStore('module1', () => {
  const count = ref<number>(1)

  // 改值
  function increment() {
    count.value += 1
  }

  // 计算属性
  function doubleCount() {
    return count.value * 2
  }

  return { count, increment, doubleCount }
})

export default initModule1

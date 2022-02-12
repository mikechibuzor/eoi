<template>
  <header
    :class="compFixedHeader"
    class="wrapper transition-all ease-in-out duration-300 h-height10 flex items-center justify-between pl-4 pr-4 xl:pl-14 xl:pr-20 pt-2"
  >
    <the-logo></the-logo>
    <nav-bar></nav-bar>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

import TheLogo from "./logo/TheLogo.vue"
import NavBar from "./nav-bar/NavBar.vue"

const fixedHeader = ref(false)

// methods
const fixedHeaderHandler = () => {
  const docScrollTop = document.documentElement.scrollTop
  const deviceScreenCheck = window.innerWidth

  //  for desktop screens and beyond
  if (deviceScreenCheck > 768) {
    if (docScrollTop > 1200) {
      fixedHeader.value = true
    } else {
      fixedHeader.value = false
    }
  } else {
    // for mobile screens and below
    if (docScrollTop > 200) {
      fixedHeader.value = true
    } else {
      fixedHeader.value = false
    }
  }
}

// computed
const compFixedHeader = computed(() => {
  return {
    fixed: fixedHeader.value,
    "dark:bg-gray-900": fixedHeader.value,
  }
})

// lifecycle
onMounted(() => window.addEventListener("scroll", fixedHeaderHandler))
</script>

<style scoped>
header.fixed {
  z-index: 131;
  position: fixed;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  animation: fixHeader 0.3s ease;
  background: #032071;
  transition: transform;
}

@keyframes fixHeader {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

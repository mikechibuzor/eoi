<template>
  <div class="content">
    <div ref="btn" @click="toggleNav" class="btn">
      <div class="burger"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const btn = ref(null)
const show = ref(false)

// methods
const toggleNav = () => {
  btn.value.classList.toggle("open")
}
</script>

<style scoped>
.btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.burger {
  width: 75%;
  height: 0.2rem;
  background-color: white;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  box-shadow: 0 2px 5px rgba(225, 101, 47, 0.2);
}

.burger::before,
.burger::after {
  content: "";
  position: absolute;
  width: 75%;
  height: 0.2rem;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: 0 2px 5px rgba(225, 101, 47, 0.2);
  transition: all 0.2s ease-in;
}
.burger::after {
  transform: translateY(0.5rem);
}
.burger::before {
  transform: translateY(-0.5rem);
}
/* Animation */
.btn.open .burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.btn.open .burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.btn.open .burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>

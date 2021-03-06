<template>
  <div class="house w-full">
    <div
      @click="toggleNav"
      class="pl-4 toggleMenu lg:hidden w-full xl:mt-6 flex justify-end items-center"
    >
      <div class="menu-icon">
        <hamburger-button></hamburger-button>
      </div>
    </div>
    <nav ref="nav" class="w-full xl:block">
      <!-- for desktop -->
      <ul
        class="hidden w-full lg:bg-transparent static lg:flex lg:items-center lg:justify-between flex-col lg:flex-row lg:w-full justify-start"
      >
        <li class="font-medium text-white">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="font-medium text-white">
          <router-link to="/about">About</router-link>
        </li>
        <li class="font-medium text-white">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link
            class="font-medium text-white border border-white px-8 hover:bg-white hover:text-black cursor-pointer py-2"
            to="/join"
            >Join</router-link
          >
        </li>
      </ul>
      <!-- for mobile -->
      <transition name="nav-list">
        <ul
          ref="ul"
          class="absolute resp out lg:hidden resp left-0 shadow xl:shadow-none rounded xl:bg-transparent xl:static flex flex-col xl:flex-row xl:w-full justify-start"
        >
          <li class="mb-4 text-white">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="mb-4 text-white">
            <router-link to="/about">About</router-link>
          </li>
          <li class="mb-4 text-white">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="mb-4 text-white">
            <router-link to="/join">Join</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import HamburgerButton from "../hamburger-button/HamburgerButton.vue"
import { ref } from "vue"

const ul = ref(null)

// methods
const toggleNav = () => {
  ul.value.classList.toggle("in")
  ul.value.classList.toggle("out")
}
</script>

<style scoped>
nav {
  flex: 0 0 35%;
}
.house {
  flex: 0 0 33.33%;
}
a {
  position: relative;
}

a::before {
  position: absolute;
  content: "";
  height: 0.25rem;
  width: 0;
  left: 30%;
  right: 30%;
  border-radius: 50%;
  bottom: -0.3rem;
  background: #4f3893;
  transition: all 0.3s ease-in-out;
}
a:hover::before {
  left: 0;
  right: 0;
  width: 100%;
}
nav a:hover {
  color: #4f3893;
}
nav a.router-link-active::before {
  width: 10%;
  left: 40%;
  right: 40%;
  background: #000;
}

nav a.router-link-active {
  color: white;
  font-weight: bold;
}

nav a::before {
  background: #4f3893;
}
.resp {
  top: 4rem;
  padding: 2rem;
  width: 50%;
  z-index: 30;
  background-color: #191970;
}

@media screen and (max-width: 768px) {
  nav a.router-link-active {
    color: white;
  }
  a::before {
    background: white;
  }
  nav a.router-link-active::before {
    background: white;
  }
}
@media screen and (min-width: 768px) {
  .resp {
    width: 25%;
  }
}

/* Animation for menu bar */
.out {
  animation: slideOut 0.3s ease-in forwards;

  border-radius: 10% 40% 50% 50%;
}
.in {
  animation: slideIn 0.3s ease-in forwards;
}
@keyframes slideIn {
  0% {
    transform: translateY(-100%) translateX(-100%);
    opacity: 0;
  }
  70% {
    transform: translateY(10%) translateX(10%);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0%) translateX(0%);

    border-radius: 5% 50% 50% 50%;
    box-shadow: 1px 1px 1px #4f3893;
    opacity: 1;
  }
}
@keyframes slideOut {
  from {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%) translateX(-100%);
    box-shadow: 1px 1px 1px #4f3893;
    opacity: 0;
  }
}
</style>

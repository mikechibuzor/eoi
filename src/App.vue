<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="in-out">
      <keep-alive>
        <component
          class="md:px-8 xl:px-16 min-h-screen"
          :is="slotProps.Component"
        ></component>
      </keep-alive>
    </transition>
  </router-view>
  <!-- footer -->
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from "./components/header/TheHeader.vue"
import TheFooter from "./components/footer/TheFooter.vue"
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* route stylings */
.route-enter-from {
  opacity: 0;
  /* transform: translateY(-.4rem); */
}
.route-leave-to {
  opacity: 0;
  /* transform: translateY(4rem); */
}
.route-enter-active {
  transition: all 0.3s ease-in-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  /* transform: translateY(0); */
}

/* hide number input arrows */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

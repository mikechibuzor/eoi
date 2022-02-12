<template>
  <div class="px-4 lg:px-0 flex justify-center flex-col h-full w-full">
    <h1
      class="text-3xl md:text-6xl mt-4 md:mt-8 text-center lg:text-left lg:text-7xl font-bold leading-tight custom-breakpoint:leading-normal designer-screen:text-[96px] text-white mb-6"
    >
      Where we build world talents
    </h1>
    <p
      class="text-secondary-text-color text-center lg:text-left text-sm md:text-2xl designer-screen:text-[35px] mb-8"
    >
      Building & shaping milions of talents, Connecting developers and companies
      to build world scalable products. Join the community
    </p>
    <!-- join button -->
    <div class="button flex lg:block items-center justify-center">
      <button
        class="text-white designer-screen:text-[35px] hover:translate-y-1 transform transition-all duration-200 bg-secondary-color text-xl md:text-2xl font-medium flex items-center justify-center px-20 py-4 rounded-md shadow-md"
        @click="$router.push('/join')"
      >
        Join
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style></style>

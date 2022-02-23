<template>
  <div class="wrapper h-screen w-screen">
    <section class="first-half py-7 px-16">
      <div class="text-logo mt-8 h-full w-full flex">
        <h1 class="text-5xl font-gilroy-bold text-white">
          Segsalerty<br />
          Resources<br />
        </h1>
      </div>
    </section>
    <section class="second-half flex flex-col justify-center">
      <form @submit.prevent="login" class="w-4/5">
        <h3 class="font-gilroy-bold text-white text-3xl">Login</h3>
        <div class="form-element mb-12 flex itemx-center flex-col mt-6">
          <label
            for="email"
            class="mb-2 tracking-wider text-white text-primary-blue font-gilroy-bold"
            >Email</label
          >
          <input
            type="email"
            name="email"
            class="w-full px-6 py-3.5 bg-white rounded outline-none border-[#0F4A7B] border"
          />
        </div>
        <div class="form-element mb-12 flex itemx-center flex-col mt-6">
          <label
            for="password"
            class="mb-2 text-white tracking-wider text-primary-blue font-gilroy-bold"
            >Password</label
          >
          <input
            type="password"
            name="password"
            class="w-full px-6 py-3.5 bg-white rounded outline-none border-[#0F4A7B] border"
          />
        </div>
        <div class="form-element">
          <button
            type="submit"
            class="px-12 shadow-sm py-3.5 rounded-lg bg-[#4F3893] text-gray-100 bg-primary-blue font-gilroy-bold"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

// router
const router = useRouter()

// methods
const login = () => {
  router.push("/admin")
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 55% 45%;
}
.first-half {
  position: relative;
  display: inline-block;
  overflow: hidden;
  z-index: 2;
  background: #032071;
}

form {
  padding-top: 8rem;
  margin-left: 2.5rem;
  width: 75%;
}

@media screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #0f4a7b22;
  }
  .first-half {
    display: none;
  }

  form {
    padding-top: 0;
  }
}
</style>

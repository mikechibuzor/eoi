<template>
  <div class="form-one">
    <div
      class="text mt-20 px-4 lg:px-20 flex flex-col items-center justify-center"
    >
      <h4 class="font-medium text-xl mb-3">Hello dear,</h4>
      <p class="text-center text-sm lg:text-lg leading-loose">
        Hello dear, Nice to meet you. If you made it up to this point, it shows
        you have an interest in founding your tech roots. Congratulations, you
        are in the right place. Welcome to Segsalerty Resources. Over the years,
        We have helped tech talents climax in their individual fields through
        proper guidance and mentorship.
      </p>
      <h4 class="font-medium text-xl mb-3 mt-14">Our Mission is to:</h4>
      <p class="text-center text-sm lg:text-lg leading-loose">
        Identify, mentor, and upskill obscure talents while aligning them with
        their skill sets and goals. To deploy and situate engineers in a
        recognized spot in the tech global ecosystem To streamline and hasten
        the recruitment process of talents. Do you want to be a member of a
        community where like minds attract and discuss? easy access to resources
        and information on available job opportunities? And most importantly
        build a lasting work relationship with professionals and experts in
        diverse tech fields? Kindly fill the form with the right information and
        a team member will reach out to you within 3days.
      </p>
    </div>
    <div class="required flex items-center justify-center my-10">
      <h2
        class="font-bold text-2xl xl:text-3xl text-center lg:text-left text-red-600"
      >
        Required*
      </h2>
    </div>
    <main class="lg:w-4/6 xl:w-3/6 mx-auto mb-20">
      <div class="form-element mb-14 px-8">
        <label for="email" class="font-bold"
          >Email<span class="text-red-700 text-2xl font-bold">*</span></label
        >
        <input
          type="email"
          v-model="email"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Enter Email"
        />
      </div>
      <div class="form-element px-8 mb-14">
        <label for="email" class="font-bold"
          >Full Name<span class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <input
          type="text"
          v-model="fullName"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Full Name"
        />
      </div>
      <div class="form-element px-8 mb-2">
        <label for="email" class="font-bold"
          >Gender<span class="text-red-700 text-2xl font-bold">*</span></label
        >
        <div class="input-group mt-6">
          <div class="input-inner flex items-center gap-2">
            <input
              type="radio"
              id="male"
              v-model="gender"
              name="gender"
              value="male"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
              placeholder="Full Name"
            />
            <label for="male" class="cursor-pointer text-sm">Male</label>
          </div>
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="female"
              v-model="gender"
              name="gender"
              value="female"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
              placeholder="Full Name"
            />
            <label for="female" class="cursor-pointer text-sm">Female</label>
          </div>
        </div>
      </div>
      <div class="form-element flex items-center gap-3 px-8 mb-14">
        <label for="email">Specify</label>
        <input
          type="text"
          name="specify"
          v-model="gender"
          id="specify"
          class="border-b w-full outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder=""
        />
      </div>
      <div class="form-element mb-6 px-8">
        <label for="email" class="font-bold"
          >Phone Number<span class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <input
          type="number"
          v-model="phoneNumber"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="08094939264"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

// access store
const store = useStore()

// computed properties
const email = computed({
  get: () => store.getters.getEmail,
  set: (val) => store.commit("setEmail", val),
})

const fullName = computed({
  get: () => store.getters.getFullName,
  set: (val) => store.commit("setFullName", val),
})

const gender = computed({
  get: () => store.getters.getGender,
  set: (val) => store.commit("setGender", val),
})

const phoneNumber = computed({
  get: () => store.getters.getPhoneNumber,
  set: (val) => store.commit("setPhoneNumber", val),
})
</script>

<style></style>

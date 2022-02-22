<template>
  <div class="form-three">
    <main class="lg:w-4/6 xl:w-3/6 mx-auto mb-20 mt-20">
      <!-- most challenging -->
      <div class="form-element px-8 mb-14">
        <label for="residence" class="font-bold"
          >What would you describe as most challenging in your selected
          field?<span class="text-red-700 text-2xl font-bold">*</span></label
        >
        <input
          type="text"
          v-model="fieldChallenge"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Your Answer"
        />
      </div>
      <!-- past project details -->
      <div class="form-element px-8 mb-14">
        <label for="residence" class="font-bold"
          >Have you worked on any project in the past? Give details of the one
          you feel most impressed about.<span
            class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <input
          type="text"
          v-model="projectDetails"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Your Answer"
        />
      </div>
      <!-- tech journey -->
      <div class="form-element px-8 mb-14">
        <label for="residence" class="font-bold"
          >Write a brief about your tech career journey, give details about your
          challenges along the way<span class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <input
          type="text"
          v-model="techJourney"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Your Answer"
        />
      </div>
      <!-- github link -->
      <div class="form-element px-8 mb-14">
        <label for="github-link" class="font-bold"
          >Do you have a Github URL? kindly drop the link<span
            class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <input
          type="text"
          v-model="githubLink"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Your Answer"
        />
      </div>
      <!-- why join networ -->
      <div class="form-element px-8 mb-14">
        <label for="github-link" class="font-bold"
          >Why do you want to join the network?<span
            class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <input
          type="text"
          v-model="joinReason"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Your Answer"
        />
      </div>
      <!-- understand that ...not a paid project -->
      <div class="form-element px-8 mb-14">
        <label class="font-bold"
          >Understand that this is not a paid job. However, there is an oppor-
          tunity to get worthy talents conpensated or referred to be part of
          paid projects to encourage and motivate from time to time.<span
            class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <div class="input-group mt-6">
          <div class="input-inner mb-4 flex items-center gap-2">
            <input
              type="radio"
              id="yes"
              v-model="notPaidJob"
              name="technical_skill"
              value="yes"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="yes" class="cursor-pointer text-sm"
              >Yes, I understand</label
            >
          </div>
          <div class="input-inner mb-4 flex items-center gap-2">
            <input
              type="radio"
              id="no"
              name="technical_skill"
              v-model="notPaidJob"
              value="no"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="no" class="cursor-pointer text-sm">No</label>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
// access store
const store = useStore()

const fieldChallenge = computed({
  get: () => store.getters.getMostChallengingInField,
  set: (val) => store.commit("setMostChallengingInFeld", val),
})
const projectDetails = computed({
  get: () => store.getters.getDetailsOnImpressedProject,
  set: (val) => store.commit("setDetailsOnImpressedProject", val),
})
const techJourney = computed({
  get: () => store.getters.getTechJourney,
  set: (val) => store.commit("setTechJourney", val),
})
const githubLink = computed({
  get: () => store.getters.getGithubUrl,
  set: (val) => store.commit("setGithubUrl", val),
})
const joinReason = computed({
  get: () => store.getters.getWhyJoinNetwork,
  set: (val) => store.commit("setWhyJoinNetwork", val),
})
const notPaidJob = computed({
  get: () => store.getters.getUnderstandNotPaidJob,
  set: (val) => store.commit("setUnderstandNotPaidJob", val),
})
</script>

<style></style>

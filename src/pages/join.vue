<template>
  <div class="bg-white py-10">
    <div class="form-wrapper py-10 rounded-sm">
      <div class="header flex flex-col justify-center">
        <h2
          class="font-bold mx-auto text-2xl xl:text-3xl text-center lg:text-left text-black"
        >
          EXPRESSION OF INTEREST
        </h2>
        <div
          class="progress-display relative px-20 mt-4 md:mt-7 lg:mt-10 flex items-center justify-between"
        >
          <div
            v-for="x in 3"
            :key="x"
            class="box z-20 flex items-center justify-center h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 bg-secondary-text-color text-black rounded-full"
            :class="{ 'progress-level': x === progressIndex }"
          >
            <h3 class="text-center md:text-lg lg:text-xl xl:text-2xl font-bold">
              {{ x }}
            </h3>
          </div>
          <hr
            class="absolute z-10 left-20 right-20 border border-gray-300 top-[50%]"
          />
        </div>
      </div>
      <main>
        <div>
          <keep-alive>
            <component :is="activeForm"></component>
          </keep-alive>
          <div
            class="buttons px-5 lg:px-20 gap-x-10 lg:gap-x-0 flex justify-between items-center"
          >
            <button
              class="bg-primary-color text-white font-medium shadow-sm rounded px-8 py-2.5 custom-breakpoint:py-3"
              :class="{ 'disable-button': progressIndex === 1 }"
              @click="previousHandler"
            >
              Previous
            </button>
            <button
              class="bg-primary-color text-white font-medium shadow-sm rounded px-8 py-2.5 custom-breakpoint:py-3"
              @click="nextHandler"
            >
              {{ toggleNextSubmitText }}
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed, inject } from "vue"
import FormOne from "../components/form-one-two-three/FormOne.vue"
import FormTwo from "../components/form-one-two-three/FormTwo.vue"
import FormThree from "../components/form-one-two-three/FormThree.vue"
import { useStore } from "vuex"
import { postForm } from "../services/form.js"

export default {
  components: {
    FormOne,
    FormTwo,
    FormThree,
  },
  setup() {
    // access store
    const store = useStore()
    // use toast
    const toast = inject("toast")
    // constant variable
    const progressIndex = ref(1)
    const activeFormValue = ref("FormOne")
    // computed properties
    const activeForm = computed(() => {
      return activeFormValue.value
    })

    const toggleNextSubmitText = computed(() => {
      if (progressIndex.value === 3) {
        return "Submit"
      } else {
        return "Next"
      }
    })

    // methods
    const changeCurrentForm = () => {
      switch (progressIndex.value) {
        case 1:
          activeFormValue.value = "FormOne"
          break
        case 2:
          activeFormValue.value = "FormTwo"
          break
        case 3:
          activeFormValue.value = "FormThree"
      }
    }

    // pick form validation from store
    const pickValidator = () => {
      if (progressIndex.value === 1) {
        return store.getters.validateFormOne
      } else if (progressIndex.value === 2) {
        return store.getters.validateFormTwo
      } else if (progressIndex.value === 3) {
        return store.getters.validateFormThree
      }
    }

    const previousHandler = () => {
      if (progressIndex.value === 1) {
        return
      } else {
        progressIndex.value--
        changeCurrentForm()
      }
    }
    const nextHandler = async () => {
      // on moving to the next form
      const validator = pickValidator()
      if (progressIndex.value < 3 && validator) {
        progressIndex.value++
        localStorage.setItem("formDetails", JSON.stringify(store.state))
        toast.success("Form saved")
        changeCurrentForm()
      } else if (!validator) {
        toast.error("Please fill all fields")
      }
      // on submitting the form
      if (progressIndex.value === 3 && validator) {
        localStorage.setItem("formDetails", JSON.stringify(store.state))
        console.log(store.state)
        const data = {
          email: store.state.email,
          full_name: store.state.fullName,
          gender: store.state.gender,
          phone_number: store.state.phoneNumber,
          education_level: store.state.educationLevel,
          technical_interest: store.state.interestedTechnicalSkill,
          greatest_challenge: store.state.mostChallengingInField,
          career_journey: store.state.techJourney,
          github_url: store.state.githubUrl,
          why_join: store.state.whyJoinNetwork,
          uderstand_project: store.state.understandNotPaidJob,
          basic_knowledge: store.state.basicKnowledgeInSkill,
        }
        try {
          const response = await postForm(data)
          toast.success(
            "Your response has been submitted successfully! \n We will reach out to you soon enough"
          )
        } catch (err) {
          toast.error("Something went wrong. Please try again")
        }
      }
    }
    return {
      previousHandler,
      nextHandler,
      activeForm,
      progressIndex,
      store,
      pickValidator,
      toggleNextSubmitText,
      toast,
    }
  },
}
</script>

<style scoped>
.form-wrapper {
  box-shadow: 0px 0px 15px #4f389322;
}
.progress-level {
  background: #032071;
  color: white;
}

.disable-button {
  cursor: not-allowed;
  background: gray;
  opacity: 0.5;
}
</style>

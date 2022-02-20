<template>
  <div class="form-two">
    <main class="lg:w-4/6 xl:w-3/6 mx-auto mb-20 mt-20">
      <div class="form-element px-8 mb-14">
        <label for="residence" class="font-bold"
          >State of Residence<span class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <input
          type="text"
          class="w-full py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
          placeholder="e.g Lagos"
        />
      </div>
      <!-- education-level -->
      <div class="form-element px-8 mb-14">
        <label for="email" class="font-bold"
          >Level of Education<span class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <div class="input-group mt-6">
          <!-- inner input -->
          <div class="input-inner flex items-center gap-2">
            <input
              type="radio"
              id="ssce"
              name="education_level"
              value="ssce"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
              placeholder="Full Name"
            />
            <label for="ssce" class="cursor-pointer text-sm">SSCE</label>
          </div>
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="ond"
              name="education_level"
              value="ond"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="ond" class="cursor-pointer text-sm">OND</label>
          </div>
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="hnd"
              name="education_level"
              value="hnd"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="hnd" class="cursor-pointer text-sm">HND</label>
          </div>
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="undergraduate"
              name="education_level"
              value="undergraduate"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="undergraduate" class="cursor-pointer text-sm"
              >UNDERGRADUATE</label
            >
          </div>
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="bsc"
              name="education_level"
              value="bsc"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="undergraduate" class="cursor-pointer text-sm"
              >BSC</label
            >
          </div>
        </div>
      </div>
      <!-- interested technical skill -->
      <div class="form-element px-8 mb-14">
        <label class="font-bold"
          >What technical skill are you most interested in?<span
            class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <div class="input-group mt-6">
          <!-- inner input ui/ux -->
          <div class="input-inner flex items-center gap-2">
            <input
              type="radio"
              id="ui/ux"
              name="technical_skill"
              value="ui/ux"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="ui/ux" class="cursor-pointer text-sm"
              >UI/UX DESIGN</label
            >
          </div>
          <!-- inner input frontend -->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="frontend"
              name="technical_skill"
              value="frontend"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="frontend" class="cursor-pointer text-sm"
              >Front-End Development</label
            >
          </div>
          <!-- inner input backend -->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="backend"
              name="technical_skill"
              value="backend"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="backend" class="cursor-pointer text-sm"
              >Back-End Development</label
            >
          </div>
          <!-- inner input QA -->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="qa"
              name="technical_skill"
              value="qa"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="qa" class="cursor-pointer text-sm">QA Testing</label>
          </div>
          <!-- inner input Data Science -->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="data_science"
              name="technical_skill"
              value="data_science"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="data_science" class="cursor-pointer text-sm"
              >Data Science</label
            >
          </div>
          <!-- inner input Dev Ops-->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="dev_ops"
              name="technical_skill"
              value="dev_ops"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="dev_ops" class="cursor-pointer text-sm">Dev Ops</label>
          </div>
          <!-- inner input Mobile App -->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="mobile_dev"
              name="technical_skill"
              value="mobile_dev"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="mobile_dev" class="cursor-pointer text-sm"
              >Mobile Application Development</label
            >
          </div>
          <!-- inner input Scrum Master -->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="scrum_master"
              name="technical_skill"
              value="scrum_master"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="scrum_master" class="cursor-pointer text-sm"
              >Technical Poduct Management - SCRUM MASTER</label
            >
          </div>
          <!-- other specify -->
          <div class="input-inner mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="other"
              name="technical_skill"
              value="other"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="other" class="cursor-pointer text-sm">other</label>
          </div>
        </div>
      </div>
      <!-- basic knowledge -->
      <div class="form-element px-8 mb-14">
        <label class="font-bold"
          >Do you have a basic knowledge of the selected skill?<span
            class="text-red-700 text-2xl font-bold"
            >*</span
          ></label
        >
        <div class="input-group mt-6">
          <!-- inner input basic knowledge -->
          <div class="input-inner mb-4 flex items-center gap-2">
            <input
              type="radio"
              id="yes"
              name="technical_skill"
              value="yes"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="yes" class="cursor-pointer text-sm">Yes</label>
          </div>
          <div class="input-inner mb-4 flex items-center gap-2">
            <input
              type="radio"
              id="no"
              name="technical_skill"
              value="no"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="no" class="cursor-pointer text-sm">No</label>
          </div>
          <div class="input-inner mb-4 flex items-center gap-2">
            <input
              type="radio"
              id="still_learning"
              name="technical_skill"
              value="still_learning"
              class="py-3 border-b outline-none border-black placeholder:text-gray-300 placeholder:text-sm"
            />
            <label for="still_learning" class="cursor-pointer text-sm"
              >Still Learning</label
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({}),
}
</script>

<style></style>

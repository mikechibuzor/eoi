<template>
  <div class="h-full w-full flex items-center justify-center">
    <div class="image relative">
      <img
        src="../../assets/globee.png"
        class="h-full w-full object-cover overflow-hidden"
        alt="globe-image"
      />
      <div
        class="r absolute left-0 right-0 top-0 bottom-0 border rotating border-dotted border-white rounded-full"
      >
        <!-- memoji boy -->
        <div
          class="memoji absolute h-14 w-14 md:h-24 flex items-center justify-center rounded-full md:w-24 top-0 right-10"
        >
          <img
            src="../../assets/memoji.png"
            class="memoji-image"
            alt="memoji"
          />
        </div>
        <!-- memoji girl -->
        <div
          class="memoji absolute h-14 w-14 md:h-24 flex items-center justify-center rounded-full md:w-24 bottom-0 left-10"
        >
          <img
            src="../../assets/memoji-girl.png"
            class="memoji-image"
            alt="memoji"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.image {
  height: 80%;
  width: 80%;
}

.memoji {
  background: #4f38939c;
}
.memoji-image {
  height: 80%;
  width: 80%;
}
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotating {
  -webkit-animation: rotating 30s linear infinite;
  -moz-animation: rotating 30s linear infinite;
  -ms-animation: rotating 30s linear infinite;
  -o-animation: rotating 30s linear infinite;
  animation: rotating 30s linear infinite;
}

@media screen and (min-width: 1440px) {
  .image {
    height: 85%;
    width: 85%;
    margin-right: -1rem;
  }
} ;
</style>

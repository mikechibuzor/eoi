<template>
  <div class="wrapper">
    <!-- first-viewport -->
    <div class="first-viewport h-height90 flex flex-col lg:flex-row md:gap-2">
      <landing-page-text></landing-page-text>
      <the-globe-image></the-globe-image>
    </div>
    <!-- second viewport join the biggest... -->
    <div class="second-viewport md:mt-72 lg:mt-0 px-4 lg:px-0">
      <div class="text flex w-full flex-col items-center justify-center mt-4">
        <h4
          class="text-sm md:text-xl lg:text-2xl font-medium custom-breakpoint:text-3xl text-white flex-col"
        >
          BUILD WITH COMMUNITY
        </h4>
        <h2
          class="text-white text-xl lg:text-4xl custom-breakpoint:text-5xl text-center font-bold designer-screen:text-[65px]"
        >
          Join the biggest community of techies
        </h2>
      </div>
      <div
        class="boxes px-16 lg:px-0 flex flex-col lg:flex-row items-center justify-center gap-y-10 mt-14"
      > 
        <div
          class="join-box xl:px-24 flex flex-col items-center justify-center"
        >
          <div class="up flex items-center justify-center flex-col">
            <div
              class="icon h-24 w-24 custom-breakpoint:h-32 custom-breakpoint:w-32 flex items-center justify-center bg-secondary-color rounded-full"
            >
              <svg
                class="h-14 w-14 custom-breakpoint:h-24 custom-breakpoint:w-24 flex items-center justify-center"
                viewBox="0 0 96 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 37.3333C9.11111 37.3333 9.88889 36.8889 10.3333 36C10.7778 35.1111 10.7778 34.2222 10.3333 33.3333C9.88889 32.4444 9.11111 32 8 32C6.88889 32 6.11111 32.4444 5.66667 33.3333C5.22222 34.2222 5.22222 35.1111 5.66667 36C6.11111 36.8889 6.88889 37.3333 8 37.3333ZM69.375 34.9167C69.0972 34.5556 68.5625 33.8611 67.7708 32.8333C66.9792 31.8056 66.4028 31.0556 66.0417 30.5833C65.6806 30.1111 65.1528 29.4306 64.4583 28.5417C63.7639 27.6528 63.1736 26.9167 62.6875 26.3333C62.2014 25.75 61.6389 25.0972 61 24.375C60.3611 23.6528 59.7361 22.9722 59.125 22.3333L53.9167 28.1667C51.6111 30.7778 48.7153 32.0556 45.2292 32C41.7431 31.9444 38.8889 30.5833 36.6667 27.9167C35.0833 26 34.2986 23.8056 34.3125 21.3333C34.3264 18.8611 35.1389 16.6806 36.75 14.7917L44.125 6.20833C43.5139 5.90278 42.8056 5.67361 42 5.52083C41.1944 5.36806 40.5347 5.28472 40.0208 5.27083C39.5069 5.25694 38.7222 5.26389 37.6667 5.29167C36.6111 5.31944 35.9306 5.33333 35.625 5.33333C33.0694 5.33333 30.875 6.25 29.0417 8.08333L22.4583 14.6667H16V37.3333C16.1389 37.3333 16.4306 37.3264 16.875 37.3125C17.3194 37.2986 17.625 37.2986 17.7917 37.3125C17.9583 37.3264 18.2292 37.3542 18.6042 37.3958C18.9792 37.4375 19.2639 37.5 19.4583 37.5833C19.6528 37.6667 19.8958 37.7847 20.1875 37.9375C20.4792 38.0903 20.7361 38.2778 20.9583 38.5L33.3333 50.6667C36.5278 53.75 39.6806 55.2917 42.7917 55.2917C44.9583 55.2917 46.6944 54.6389 48 53.3333C49.5833 53.8889 51.1458 53.7778 52.6875 53C54.2292 52.2222 55.2361 51.0417 55.7083 49.4583C57.7639 49.625 59.5278 49.0139 61 47.625C61.5556 47.125 62.0556 46.4931 62.5 45.7292C62.9444 44.9653 63.1389 44.2639 63.0833 43.625C63.3611 43.9028 63.9583 44.0417 64.875 44.0417C66.0694 44.0417 67.1389 43.75 68.0833 43.1667C69.0278 42.5833 69.7153 41.8472 70.1458 40.9583C70.5764 40.0694 70.7431 39.0764 70.6458 37.9792C70.5486 36.8819 70.125 35.8611 69.375 34.9167ZM76 37.3333H80V16H76.125L69.5833 8.5C67.75 6.38889 65.4028 5.33333 62.5417 5.33333H55.5833C53.1111 5.33333 51.0833 6.26389 49.5 8.125L40.7917 18.25C40.0139 19.1667 39.625 20.2083 39.625 21.375C39.625 22.5417 40 23.5833 40.75 24.5C41.9444 25.9167 43.4722 26.6389 45.3333 26.6667C47.1944 26.6944 48.7361 26.0139 49.9583 24.625L58 15.5417C58.6944 14.9028 59.4375 14.6042 60.2292 14.6458C61.0208 14.6875 61.6736 15.0625 62.1875 15.7708C62.7014 16.4792 62.8194 17.2639 62.5417 18.125C62.9861 18.6528 63.7639 19.5278 64.875 20.75C65.9861 21.9722 66.8194 22.9167 67.375 23.5833C68.1806 24.5833 69.3264 26.0486 70.8125 27.9792C72.2986 29.9097 73.1945 31.0833 73.5 31.5C74.9445 33.3333 75.7778 35.2778 76 37.3333ZM88 37.3333C89.1111 37.3333 89.8889 36.8889 90.3333 36C90.7778 35.1111 90.7778 34.2222 90.3333 33.3333C89.8889 32.4444 89.1111 32 88 32C86.8889 32 86.1111 32.4444 85.6667 33.3333C85.2222 34.2222 85.2222 35.1111 85.6667 36C86.1111 36.8889 86.8889 37.3333 88 37.3333ZM96 13.3333V40C96 40.7222 95.7361 41.3472 95.2083 41.875C94.6806 42.4028 94.0556 42.6667 93.3333 42.6667H75.25C74.5 44.4722 73.3611 45.9514 71.8333 47.1042C70.3056 48.2569 68.5694 48.9722 66.625 49.25C65.7083 50.5833 64.5903 51.7153 63.2708 52.6458C61.9514 53.5764 60.5278 54.2083 59 54.5417C57.8333 56.0139 56.3819 57.1458 54.6458 57.9375C52.9097 58.7292 51.125 59.0694 49.2917 58.9583C47.625 59.9028 45.875 60.4514 44.0417 60.6042C42.2083 60.7569 40.4375 60.5625 38.7292 60.0208C37.0208 59.4792 35.3958 58.7361 33.8542 57.7917C32.3125 56.8472 30.875 55.7222 29.5417 54.4167L17.5833 42.6667H2.66667C1.94444 42.6667 1.31944 42.4028 0.791667 41.875C0.263889 41.3472 0 40.7222 0 40V12C0 11.2778 0.263889 10.6528 0.791667 10.125C1.31944 9.59722 1.94444 9.33333 2.66667 9.33333H20.2083C20.5972 8.94444 21.25 8.27778 22.1667 7.33333C23.0833 6.38889 23.7431 5.72222 24.1458 5.33333C24.5486 4.94444 25.1597 4.38889 25.9792 3.66667C26.7986 2.94444 27.5 2.42361 28.0833 2.10417C28.6667 1.78472 29.375 1.43056 30.2083 1.04167C31.0417 0.652778 31.9028 0.381944 32.7917 0.229167C33.6806 0.0763889 34.625 0 35.625 0H40.5C43.25 0 45.7639 0.777778 48.0417 2.33333C50.3194 0.777778 52.8333 0 55.5833 0H62.5417C63.5139 0 64.4444 0.0833333 65.3333 0.25C66.2222 0.416667 67.0069 0.618056 67.6875 0.854167C68.3681 1.09028 69.0833 1.45833 69.8333 1.95833C70.5833 2.45833 71.2014 2.88889 71.6875 3.25C72.1736 3.61111 72.7708 4.15972 73.4792 4.89583C74.1875 5.63194 74.7292 6.21528 75.1042 6.64583C75.4792 7.07639 76.0486 7.74306 76.8125 8.64583C77.5764 9.54861 78.1528 10.2222 78.5417 10.6667H93.3333C94.0556 10.6667 94.6806 10.9306 95.2083 11.4583C95.7361 11.9861 96 12.6111 96 13.3333Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3
              class="text-lg md:text-xl xl:text-2xl text-white font-bold mt-4"
            >
              Join
            </h3>
          </div>
          <div class="down">
            <p
              class="text-secondary-text-color text-sm md:text-lg font-light text-center"
            >
              Building & shaping milions of talents, Connecting
              <br class="hidden xl:block" />
              Join the community
            </p>
          </div>
        </div>
        <div
          class="join-box xl:px-24 flex flex-col items-center justify-center"
        >
          <div class="up flex items-center justify-center flex-col">
            <div
              class="icon h-24 w-24 custom-breakpoint:h-32 custom-breakpoint:w-32 flex items-center justify-center bg-secondary-color rounded-full"
            >
              <svg
                class="h-14 w-14 custom-breakpoint:h-24 custom-breakpoint:w-24 flex items-center justify-center"
                viewBox="0 0 96 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 37.3333C9.11111 37.3333 9.88889 36.8889 10.3333 36C10.7778 35.1111 10.7778 34.2222 10.3333 33.3333C9.88889 32.4444 9.11111 32 8 32C6.88889 32 6.11111 32.4444 5.66667 33.3333C5.22222 34.2222 5.22222 35.1111 5.66667 36C6.11111 36.8889 6.88889 37.3333 8 37.3333ZM69.375 34.9167C69.0972 34.5556 68.5625 33.8611 67.7708 32.8333C66.9792 31.8056 66.4028 31.0556 66.0417 30.5833C65.6806 30.1111 65.1528 29.4306 64.4583 28.5417C63.7639 27.6528 63.1736 26.9167 62.6875 26.3333C62.2014 25.75 61.6389 25.0972 61 24.375C60.3611 23.6528 59.7361 22.9722 59.125 22.3333L53.9167 28.1667C51.6111 30.7778 48.7153 32.0556 45.2292 32C41.7431 31.9444 38.8889 30.5833 36.6667 27.9167C35.0833 26 34.2986 23.8056 34.3125 21.3333C34.3264 18.8611 35.1389 16.6806 36.75 14.7917L44.125 6.20833C43.5139 5.90278 42.8056 5.67361 42 5.52083C41.1944 5.36806 40.5347 5.28472 40.0208 5.27083C39.5069 5.25694 38.7222 5.26389 37.6667 5.29167C36.6111 5.31944 35.9306 5.33333 35.625 5.33333C33.0694 5.33333 30.875 6.25 29.0417 8.08333L22.4583 14.6667H16V37.3333C16.1389 37.3333 16.4306 37.3264 16.875 37.3125C17.3194 37.2986 17.625 37.2986 17.7917 37.3125C17.9583 37.3264 18.2292 37.3542 18.6042 37.3958C18.9792 37.4375 19.2639 37.5 19.4583 37.5833C19.6528 37.6667 19.8958 37.7847 20.1875 37.9375C20.4792 38.0903 20.7361 38.2778 20.9583 38.5L33.3333 50.6667C36.5278 53.75 39.6806 55.2917 42.7917 55.2917C44.9583 55.2917 46.6944 54.6389 48 53.3333C49.5833 53.8889 51.1458 53.7778 52.6875 53C54.2292 52.2222 55.2361 51.0417 55.7083 49.4583C57.7639 49.625 59.5278 49.0139 61 47.625C61.5556 47.125 62.0556 46.4931 62.5 45.7292C62.9444 44.9653 63.1389 44.2639 63.0833 43.625C63.3611 43.9028 63.9583 44.0417 64.875 44.0417C66.0694 44.0417 67.1389 43.75 68.0833 43.1667C69.0278 42.5833 69.7153 41.8472 70.1458 40.9583C70.5764 40.0694 70.7431 39.0764 70.6458 37.9792C70.5486 36.8819 70.125 35.8611 69.375 34.9167ZM76 37.3333H80V16H76.125L69.5833 8.5C67.75 6.38889 65.4028 5.33333 62.5417 5.33333H55.5833C53.1111 5.33333 51.0833 6.26389 49.5 8.125L40.7917 18.25C40.0139 19.1667 39.625 20.2083 39.625 21.375C39.625 22.5417 40 23.5833 40.75 24.5C41.9444 25.9167 43.4722 26.6389 45.3333 26.6667C47.1944 26.6944 48.7361 26.0139 49.9583 24.625L58 15.5417C58.6944 14.9028 59.4375 14.6042 60.2292 14.6458C61.0208 14.6875 61.6736 15.0625 62.1875 15.7708C62.7014 16.4792 62.8194 17.2639 62.5417 18.125C62.9861 18.6528 63.7639 19.5278 64.875 20.75C65.9861 21.9722 66.8194 22.9167 67.375 23.5833C68.1806 24.5833 69.3264 26.0486 70.8125 27.9792C72.2986 29.9097 73.1945 31.0833 73.5 31.5C74.9445 33.3333 75.7778 35.2778 76 37.3333ZM88 37.3333C89.1111 37.3333 89.8889 36.8889 90.3333 36C90.7778 35.1111 90.7778 34.2222 90.3333 33.3333C89.8889 32.4444 89.1111 32 88 32C86.8889 32 86.1111 32.4444 85.6667 33.3333C85.2222 34.2222 85.2222 35.1111 85.6667 36C86.1111 36.8889 86.8889 37.3333 88 37.3333ZM96 13.3333V40C96 40.7222 95.7361 41.3472 95.2083 41.875C94.6806 42.4028 94.0556 42.6667 93.3333 42.6667H75.25C74.5 44.4722 73.3611 45.9514 71.8333 47.1042C70.3056 48.2569 68.5694 48.9722 66.625 49.25C65.7083 50.5833 64.5903 51.7153 63.2708 52.6458C61.9514 53.5764 60.5278 54.2083 59 54.5417C57.8333 56.0139 56.3819 57.1458 54.6458 57.9375C52.9097 58.7292 51.125 59.0694 49.2917 58.9583C47.625 59.9028 45.875 60.4514 44.0417 60.6042C42.2083 60.7569 40.4375 60.5625 38.7292 60.0208C37.0208 59.4792 35.3958 58.7361 33.8542 57.7917C32.3125 56.8472 30.875 55.7222 29.5417 54.4167L17.5833 42.6667H2.66667C1.94444 42.6667 1.31944 42.4028 0.791667 41.875C0.263889 41.3472 0 40.7222 0 40V12C0 11.2778 0.263889 10.6528 0.791667 10.125C1.31944 9.59722 1.94444 9.33333 2.66667 9.33333H20.2083C20.5972 8.94444 21.25 8.27778 22.1667 7.33333C23.0833 6.38889 23.7431 5.72222 24.1458 5.33333C24.5486 4.94444 25.1597 4.38889 25.9792 3.66667C26.7986 2.94444 27.5 2.42361 28.0833 2.10417C28.6667 1.78472 29.375 1.43056 30.2083 1.04167C31.0417 0.652778 31.9028 0.381944 32.7917 0.229167C33.6806 0.0763889 34.625 0 35.625 0H40.5C43.25 0 45.7639 0.777778 48.0417 2.33333C50.3194 0.777778 52.8333 0 55.5833 0H62.5417C63.5139 0 64.4444 0.0833333 65.3333 0.25C66.2222 0.416667 67.0069 0.618056 67.6875 0.854167C68.3681 1.09028 69.0833 1.45833 69.8333 1.95833C70.5833 2.45833 71.2014 2.88889 71.6875 3.25C72.1736 3.61111 72.7708 4.15972 73.4792 4.89583C74.1875 5.63194 74.7292 6.21528 75.1042 6.64583C75.4792 7.07639 76.0486 7.74306 76.8125 8.64583C77.5764 9.54861 78.1528 10.2222 78.5417 10.6667H93.3333C94.0556 10.6667 94.6806 10.9306 95.2083 11.4583C95.7361 11.9861 96 12.6111 96 13.3333Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3
              class="text-lg md:text-xl xl:text-2xl text-white font-bold mt-4"
            >
              Join
            </h3>
          </div>
          <div class="down">
            <p
              class="text-secondary-text-color text-sm md:text-lg font-light text-center"
            >
              Building & shaping milions of talents, Connecting
              <br class="hidden xl:block" />
              Join the community
            </p>
          </div>
        </div>
        <div
          class="join-box xl:px-24 flex flex-col items-center justify-center"
        >
          <div class="up flex items-center justify-center flex-col">
            <div
              class="icon h-24 w-24 custom-breakpoint:h-32 custom-breakpoint:w-32 flex items-center justify-center bg-secondary-color rounded-full"
            >
            
              <svg class="h-14 w-14 custom-breakpoint:h-24 custom-breakpoint:w-24 flex items-center justify-center" viewBox="0 0 54 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 66.0624V28.2249V66.0624ZM27 45.0416C27 32.4291 27 19.8166 3.375 19.8166C3.375 32.4291 3.375 45.0416 27 45.0416ZM0 66.0624H54H0ZM47.25 66.0624L40.5 95.4915H13.5L6.75 66.0624H47.25ZM27 28.2249C27 15.6125 27 3 50.625 3C50.625 15.6125 50.625 28.2249 27 28.2249Z" stroke="white" stroke-width="5"/>
          </svg>
            </div>
            <h3
              class="text-lg md:text-xl xl:text-2xl text-white font-bold mt-4"
            >
              Grow
            </h3>
          </div>
          <div class="down">
            <p
              class="text-secondary-text-color text-sm md:text-lg font-light text-center"
            >
              Building & shaping milions of talents, Connecting
              <br class="hidden xl:block" />
              Join the community
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- third viewport growing community -->
    <div class="third-viewport mt-28 px-4 lg:px-0">
      <h2 class="font-bold text-2xl xl:text-5xl text-white">
        Growing Community
      </h2>
      <div class="slack-community my-5">
        <img
          src="../assets/seg-slack.png"
          clss="object-cover"
          alt="segsalerty-slack community"
        />
      </div>
    </div>
    <!-- fourth viewport stacks-->
    <div class="fourth-viewport px-4 lg:px-0 mt-16">
      <h2
        class="font-bold text-2xl xl:text-5xl text-center lg:text-left text-white"
      >
        Stacks
      </h2>
      <div
        class="stack-container flex flex-col lg:flex-row items-center mt-10 lg:mt-20 justify-center gap-y-4 gap-x-16"
      >
        <div class="stack-container-one grid">
          <div class="up flex items-center justify-center">
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/javascript-stack.png"
                class="object-contain z-10 relative"
                alt="javascript"
              />
            </div>
          </div>
          <div class="down flex gap-x-1 lg:gap-x-4 -mt-4">
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/React-stack.png"
                class="object-contain z-10 relative"
                alt="react"
              />
            </div>
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/vue-stack.png"
                class="object-contain z-10 relative"
                alt="vue"
              />
            </div>
          </div>
        </div>
        <div class="stack-container-two grid">
          <div class="up flex items-center justify-center">
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/js-stack.png"
                class="object-contain z-10 relative"
                alt="javascript"
              />
            </div>
          </div>
          <div class="down flex gap-x-1 lg:gap-x-4 -mt-4">
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/php-stack.png"
                class="object-contain z-10 relative"
                alt="php"
              />
            </div>
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/python-stack.png"
                class="object-contain z-10 relative"
                alt="python"
              />
            </div>
          </div>
        </div>
        <div class="stack-container-three grid">
          <div class="up flex items-center justify-center">
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/mysql-stack.png"
                class="object-contain z-10 relative"
                alt="mysql"
              />
            </div>
          </div>
          <div class="down flex gap-x-1 lg:gap-x-4 -mt-4">
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/mdb-stack.png"
                class="object-contain z-10 relative"
                alt="php"
              />
            </div>
            <div
              class="stack relative h-24 w-24 xl:h-32 xl:w-32 custom-breakpoint:h-40 custom-breakpoint:w-40 flex items-center justify-center"
            >
              <svg
                class="h-full absolute w-full"
                viewBox="0 0 200 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L199.593 57.5V172.5L100 230L0.407082 172.5V57.5L100 0Z"
                  fill="#4F3893"
                />
              </svg>

              <img
                src="../assets/laravel-stack.png"
                class="object-contain z-10 relative"
                alt="python"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="more-button flex items-center justify-center mt-10">
        <button class="flex items-center justify-center text-white gap-2">
          <span class="text-3xl block font-medium border-b">More</span>
          <span class="flex items-center justify-center">
            <svg
              class="w-6 flex items-center justify-center"
              viewBox="0 0 47 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 20.5C0 19.7234 0.30849 18.9787 0.857605 18.4296C1.40672 17.8804 2.15148 17.572 2.92804 17.572H36.8524L24.2793 5.0048C23.7295 4.45499 23.4206 3.70929 23.4206 2.93174C23.4206 2.1542 23.7295 1.4085 24.2793 0.858688C24.8291 0.30888 25.5748 0 26.3524 0C27.1299 0 27.8756 0.30888 28.4254 0.858688L45.9937 18.4269C46.2664 18.6989 46.4827 19.022 46.6303 19.3778C46.7779 19.7335 46.8539 20.1149 46.8539 20.5C46.8539 20.8851 46.7779 21.2665 46.6303 21.6222C46.4827 21.978 46.2664 22.3011 45.9937 22.5731L28.4254 40.1413C27.8756 40.6911 27.1299 41 26.3524 41C25.5748 41 24.8291 40.6911 24.2793 40.1413C23.7295 39.5915 23.4206 38.8458 23.4206 38.0683C23.4206 37.2907 23.7295 36.545 24.2793 35.9952L36.8524 23.428H2.92804C2.15148 23.428 1.40672 23.1196 0.857605 22.5704C0.30849 22.0213 0 21.2766 0 20.5Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <!-- fifth viewport why segsalerty-->
    <div class="fifth-viewport mt-20">
      <h2
        class="font-bold text-2xl xl:text-5xl text-center lg:text-left text-white"
      >
        Why Segsalerty
      </h2>
      <div class="box grid lg:pt-10 lg:grid-cols-2">
        <div class="image h-screen custom-breakpoint:h-height80">
          <img
            src="../assets/character-why.png"
            class="object-contain h-full w-full"
            alt="character-wy"
          />
        </div>
        <div class="list-of-whys flex items-center justify-center">
          <ul>
            <li
              v-for="x in 6"
              :key="x"
              class="flex gap-5 mb-6 custtom-breakpoint:mb-7"
            >
              <span class="icon">
                <svg
                  class="xl:h-10 xl:w-10 h-6 w-6 md:h-8 md:w-8"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.8162 4.13358C46.5376 2.8251 45.0104 1.78538 43.3243 1.07553C41.6381 0.365672 39.8271 0 37.9976 0C36.1682 0 34.3571 0.365672 32.671 1.07553C30.9849 1.78538 29.4576 2.8251 28.179 4.13358L25.2244 7.1642L20.9967 7.11195C19.1667 7.09029 17.3509 7.43476 15.6559 8.1251C13.961 8.81545 12.4212 9.83773 11.1271 11.1318C9.83298 12.4259 8.8107 13.9657 8.12035 15.6607C7.43001 17.3556 7.08554 19.1715 7.1072 21.0015L7.1547 25.2291L4.13358 28.1838C2.8251 29.4624 1.78538 30.9896 1.07553 32.6757C0.365672 34.3619 0 36.1729 0 38.0024C0 39.8318 0.365672 41.6429 1.07553 43.329C1.78538 45.0151 2.8251 46.5424 4.13358 47.821L7.15945 50.7756L7.1072 55.0033C7.08554 56.8333 7.43001 58.6491 8.12035 60.3441C8.8107 62.039 9.83298 63.5788 11.1271 64.8729C12.4212 66.167 13.961 67.1893 15.6559 67.8796C17.3509 68.57 19.1667 68.9145 20.9967 68.8928L25.2244 68.8453L28.179 71.8664C29.4576 73.1749 30.9849 74.2146 32.671 74.9245C34.3571 75.6343 36.1682 76 37.9976 76C39.8271 76 41.6381 75.6343 43.3243 74.9245C45.0104 74.2146 46.5376 73.1749 47.8162 71.8664L50.7709 68.8405L54.9985 68.8928C56.8285 68.9145 58.6444 68.57 60.3393 67.8796C62.0343 67.1893 63.5741 66.167 64.8682 64.8729C66.1623 63.5788 67.1845 62.039 67.8749 60.3441C68.5652 58.6491 68.9097 56.8333 68.888 55.0033L68.8405 50.7756L71.8617 47.821C73.1701 46.5424 74.2099 45.0151 74.9197 43.329C75.6296 41.6429 75.9952 39.8318 75.9952 38.0024C75.9952 36.1729 75.6296 34.3619 74.9197 32.6757C74.2099 30.9896 73.1701 29.4624 71.8617 28.1838L68.8358 25.2291L68.888 21.0015C68.9097 19.1715 68.5652 17.3556 67.8749 15.6607C67.1845 13.9657 66.1623 12.4259 64.8682 11.1318C63.5741 9.83773 62.0343 8.81545 60.3393 8.1251C58.6444 7.43476 56.8285 7.09029 54.9985 7.11195L50.7709 7.15945L47.8162 4.13834V4.13358ZM49.1795 32.5587L34.929 46.8092C34.7084 47.0304 34.4463 47.2059 34.1577 47.3256C33.8692 47.4453 33.5598 47.507 33.2474 47.507C32.935 47.507 32.6257 47.4453 32.3371 47.3256C32.0486 47.2059 31.7865 47.0304 31.5659 46.8092L24.4406 39.6839C24.2198 39.4631 24.0446 39.201 23.9251 38.9124C23.8056 38.6239 23.7441 38.3147 23.7441 38.0024C23.7441 37.6901 23.8056 37.3808 23.9251 37.0923C24.0446 36.8038 24.2198 36.5416 24.4406 36.3208C24.6614 36.1 24.9236 35.9248 25.2121 35.8053C25.5006 35.6858 25.8099 35.6243 26.1222 35.6243C26.4345 35.6243 26.7437 35.6858 27.0322 35.8053C27.3208 35.9248 27.5829 36.1 27.8037 36.3208L33.2474 41.7693L45.8164 29.1955C46.2624 28.7496 46.8673 28.499 47.498 28.499C48.1287 28.499 48.7336 28.7496 49.1795 29.1955C49.6255 29.6415 49.8761 30.2464 49.8761 30.8771C49.8761 31.5078 49.6255 32.1127 49.1795 32.5587Z"
                    fill="#4F3893"
                  />
                </svg>
              </span>
              <span
                class="text-lg md:text-2xl xl:text-3xl text-secondary-text-color"
              >
                Supercharged VPN
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- sixth viewport are you ready -->
    <div class="sixth-viewport mt-20">
      <div
        class="are-you-ready flex items-center justify-center flex-col py-8 px-8"
      >
        <h2
          class="font-bold text-2xl xl:text-5xl text-center lg:text-left text-white"
        >
          Are you ready?
        </h2>
        <p
          class="text-secondary-text-color text-center text-sm xl:text-xl mt-2"
        >
          Building & shaping milions of talents,<br class="hidden lg:block" />
          Connecting Join the community
        </p>
        <button
          class="border border-white text-secondary-text-color py-2.5 px-8 mt-10 font-bold lg:px-16"
          @click="$router.push('/join')"
        >
          Join
        </button>
      </div>
      <div
        class="boomerang flex flex-col md:flex-row gap-y-5 items-center justify-between py-5 between lg:w-3/4 mx-auto mt-10 mb-10"
      >
        <div
          v-for="x in 3"
          :key="x"
          class="one flex flex-wrap flex-col md:flex-row items-center gap-4 justify-center"
        >
          <div class="icon">
            <svg
              class="h-10 w-10"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7432 30.9367C45.3702 22.3758 63.7556 28.7165 56.0677 43.6981C48.3797 58.6707 -21.9128 30.9189 6.89486 44.7105C35.7025 58.502 46.8084 86.5913 58.5978 60.0384C70.3872 33.4854 84.5913 -23.9719 44.6423 10.9466C4.69323 45.865 14.7338 41.6111 31.7432 30.9367Z"
                fill="#999999"
              />
            </svg>
          </div>
          <p class="text-secondary-text-color text-2xl font-medium">
            Boomerang
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LandingPageText from "../components/LandingPageText/LandingPageText.vue"
import TheGlobeImage from "../components/globe/TheGlobeImage.vue"
</script>

<style scoped>
.stack img {
  height: 50%;
  width: 50%;
}

.are-you-ready {
  background: url(../assets/are-you-ready.png);
}
@media screen and (min-width: 1440px) {
  .first-viewport {
    display: grid;
    grid-template-columns: 45% 55%;
  }
}
</style>

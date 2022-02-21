import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/router.js"
import store from "./store/index.js"
import "./css/index.css"
import Toaster from "@meforma/vue-toaster"

const app = createApp(App)
app.use(router)
app.use(store)
app
  .use(Toaster, {
    position: "top-right",
  })
  .provide("toast", app.config.globalProperties.$toast)
app.mount("#app")

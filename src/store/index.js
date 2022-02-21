import { watch } from "vue"
import { createStore } from "vuex"
import state from "./state.js"
import { getters } from "./getters.js"
import { mutations } from "./mutations.js"

const STATE_NAME = "formState"

const getState = () => {
  if (localStorage.getItem(STATE_NAME)) {
    return JSON.parse(localStorage.getItem(STATE_NAME))
  }
  return state
}

watch(state, () => localStorage.setItem(STATE_NAME), JSON.stringify(state))

const store = createStore({
  state: getState(),
  getters,
  mutations,
})

export default store

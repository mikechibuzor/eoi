import axios from "axios"

const baseURL = "http://segserver.herokuapp.com"

export const postForm = async (payload) => {
  return await axios.post(`${baseURL}/form`, payload)
}

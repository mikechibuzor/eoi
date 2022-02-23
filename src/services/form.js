import axios from "axios"

const baseURL = "//segserver.herokuapp.com"

export const postForm = async (payload) => {
  return await axios.post(`${baseURL}/form`, payload)
}

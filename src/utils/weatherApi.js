import axios from "axios"

const baseUrl = 'https://api.openweathermap.org/'
const apiKey = 'b462c13bede905c706bc6aeed57648ee'

const GET_API = axios.create({
    baseURL: baseUrl,
    params:{appid: apiKey}
})

export default GET_API;
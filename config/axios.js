import axios from "axios"


const s_axios = axios.create({
    baseURL: 'http://localhost:3001/appi'
})

export default s_axios;
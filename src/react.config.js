import Axios from 'axios'

let axios = Axios.create({
    timeout: 10000,
    baseURL: "http://wthrcdn.etouch.cn",
    headers: { "Content-Type": "application/json;charset=utf-8" }
})
export default axios
import axios from 'axios'



const instance = axios.create({
    baseURL: 'https://dataservice.accuweather.com' //process.env.REACT_APP_API
})



export default instance;
import axios from 'axios'
import { getToken } from '../Helpers/session'

const api = axios.create({
});

api.interceptors.request.use(async(config) => {
    const token = getToken;
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    } 
    return config
})

export default api
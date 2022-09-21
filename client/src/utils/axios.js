<<<<<<< Updated upstream
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});
=======
import axios from 'axios';

const instance  = axios.create({
 baseURL: 'http://localhost:3002/api',   
});

instance.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;
})
>>>>>>> Stashed changes

export default instance;

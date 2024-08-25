import axios from "axios";
import nProgress from "nprogress";
import { store } from '../redux/store'
nProgress.configure(
     {
          showSpinner: false,
          trickleSpeed: 200
     }
)
const instance = axios.create({
     baseURL: 'http://localhost:8081/'
})
instance.interceptors.request.use(function (config) {
     console.log(">>>>Check tobken: ", store.getState())
     const token = store?.getState()?.user?.account?.access_token;
     //Bearer token
     config.headers['Authorization'] = `Bearer ${token}`;
     // Do something before request is sent
     nProgress.start();
     return config;
}, function (error) {
     // Do something with request error
     return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
     console.log("intercentor", response)

     nProgress.done();
     // Any status code that lie within the range of 2xx cause this function to trigger
     // Do something with response data
     return response && response.data ? response.data : response;
}, function (error) {
     // Any status codes that falls outside the range of 2xx cause this function to trigger
     // Do something with response error

     return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});
export default instance
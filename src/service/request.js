import axios from 'axios';

const request = axios.create({
     baseURL: `https://book-e-sell-node-api.vercel.app/`,
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
   });

   request.interceptors.response.use(
     function (response) {  
          return response
     }, 
     function (error) {
          return Promise.reject(error);
     }
   );

   export default request;
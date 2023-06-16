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
      // console.log(response)
        return Promise.resolve(response.data.result);
     }, 
     function (error) {
          return Promise.reject(error);
     }
   );

   export default request;
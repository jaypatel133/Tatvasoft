import axios from 'axios';
import { toast } from "react-toastify";

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
          let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }else
          {
               toast.error("Somthing went wrong. Please try again!");
          }
          return Promise.reject(error);
     }
   );

   export default request;
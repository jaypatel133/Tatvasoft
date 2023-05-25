import request from "./request";
import { toast } from "react-toastify";

const base= '/api/user'


export function getUserRole(){
    return request.get(base+'/roles');
}


export function addUser(data){
    return request.post(base, JSON.stringify(data)).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}

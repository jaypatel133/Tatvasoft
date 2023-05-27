import request from "./request";

import { toast } from "react-toastify";

const userURL= '/api/user';

export function LoginUser(data){
    return request.post(userURL+'/login', JSON.stringify(data)).catch(err=>{
        if(err?.response?.data?.code === 401)
        {
            toast.error("Enter correct Email and Password");
        }
        else{
            console.log(err);
        }
    });
}
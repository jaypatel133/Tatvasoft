import request from "./request";

import { toast } from "react-toastify";

const base= '/api/user';

export function LoginUser(data){
    return request.post(base+'/login', JSON.stringify(data)).catch(err=>{
        if(err?.response?.data?.code === 401)
        {
            toast.error("Enter correct Email and Password");
        }
        else{
            console.log(err);
        }
    });
}
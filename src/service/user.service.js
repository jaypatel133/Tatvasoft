import request from "./request";
import { toast } from "react-toastify";

const UserURL= '/api/user'


export function getUserRole(){
    return request.get(UserURL+'/roles');
}


export function addUser(data){
    return request.post(UserURL, JSON.stringify(data)).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}

export function getUserById(data){
    return request.get(UserURL+'/byId?id='+data).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}

export function updateUser(data){
    return request.put(UserURL,data).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}

export function GetPaginatedListUser(data){
    return request.get(UserURL+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}

export function DeleteUser(data){
    return request.delete(UserURL+'?id='+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}
import request from "./request";
import { toast } from "react-toastify";

const categoryURL= '/api/category';

export function getCategoryById(data){
    return request.get(categoryURL+'/byId?id='+ Number(data)).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }
        console.log(err)   
    });
}

export function getAllCategories(data){
    return request.get(categoryURL+'/all').catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }
        console.log(err)   
    });
}

export function GetPaginatedCategory(data){
    return request.get(categoryURL+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}

export function DeleteCategory(data){
    return request.delete(categoryURL+'?id='+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}

export function updateCategory(data){
    return request.put(categoryURL,data).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}

export function addCategory(data){
    return request.post(categoryURL,data).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}
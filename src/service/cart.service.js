import request from "./request";
import { toast } from "react-toastify";


const cartURL= '/api/cart';



export function getAllCartItem(data){
    return request.get(cartURL+'?userId='+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }
        console.log(err)   
    });
}

export function addCartItem(data){
    return request.post(cartURL,data).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}

export function updateCartItem(data){
    return request.put(cartURL,data).catch((error)=>{
        let res = error.response;
          if(res?.data?.code === 409)
          {
              toast.error("already exist");
          }
    });
}

export function DeleteCategory(data){
    return request.delete(cartURL+'?id='+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}

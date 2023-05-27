import request from "./request";
import { toast } from "react-toastify";

const bookURL= '/api/book';

export function searchBook(data){
    return request.get(bookURL+'/search?keyword='+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}

export function getAllBook(){
    return request.get(bookURL+'/all').catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}
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
export function GetPaginatedListBook(data){
    return request.get(bookURL+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }   
    });
}

export function getBookById(data){
    return request.get(bookURL+'/byId?id='+ Number(data)).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }
        console.log(err)   
    });
}

export function updateBook(data){
    return request.put(bookURL,data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }
        console.log(err)   
    });
}

export function addBook(data){
    console.log(data)
    return request.post(bookURL,data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }
        console.log(err)   
    });
}

export function deleteBook(data){
    console.log(data)
    return request.delete(bookURL+'?id='+data).catch(err=>{
        if(err?.response?.data?.code !== 200)
        {
            toast.error("Somthing went Wrong");
        }
        console.log(err)   
    });
}
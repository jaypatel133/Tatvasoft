import request from "./request";
const base= '/api/user'


export function getUserRole(){
    return request.get(base+'/roles');
}


export function addUser(data){
    return request.post(base, JSON.stringify(data));
}

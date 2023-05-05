import { requestOfPost,requestOfGet } from './common.js';


export function postRequest(url,data){
    return new Promise((resolve,reject) => {
        requestOfPost(url,data).then(res => resolve(res))
        .catch(error => reject(error))
    })
}


export function getRequest(url){
    return new Promise((resolve,reject) => {
        requestOfGet(url).then(res => resolve(res))
        .catch(error => reject(error))
    })
}
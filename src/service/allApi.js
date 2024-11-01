import { commonApi } from "./commonApi"
import {base_URL} from "./baseUrl"


//request to new user add
export const newUserApi =  async(reqBody)=>{
    return await commonApi('POST',`${base_URL}/register`,reqBody,"")
} 

//login user
export const loginUserApi = async(reqBody)=>{
    return await commonApi('POST',`${base_URL}/login`,reqBody,"")
}
//contact user
export const contactApi = async(reqBody,reqHeader)=>{
    return await commonApi('POSt',`${base_URL}/contact`,reqBody,reqHeader)
}
////request get all user details
export const getAllDetailsApi = async(reqHeader)=>{
    return await commonApi('GET',`${base_URL}/admin`,"",reqHeader)
}
//contact details delete
export const deleteDetailsApi = async(id,reqHeader)=>{
    return await commonApi('DELETE',`${base_URL}/delete-details/${id}`,{},reqHeader)
}
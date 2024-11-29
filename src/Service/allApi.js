import commonApi from "./commonApi";
import SERVER_URL from "./serverUrl";

// registerApi 
export const registerApi = async(reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/register`, reqBody)
}

// loginApi
export const loginApi = async(reqBody)=>{
    return await commonApi("POST", `${SERVER_URL}/login`, reqBody)
}

export const forgotApi = async(reqBody)=>{
    
    return await commonApi("POST", `${SERVER_URL}/forgot-password`, reqBody)
}

export const resetApi = async(id, token, reqBody)=>{
    console.log(id,token);
    
    return await commonApi("PUT", `${SERVER_URL}/reset_password/${id}/${token}`, reqBody)
}


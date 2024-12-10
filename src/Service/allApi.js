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

export const courseAddApi = async(reqBody, reqHeader)=>{
    console.log(reqBody, reqHeader);
    return await commonApi("POST", `${SERVER_URL}/add-course`, reqBody, reqHeader)
}

export const userCourseViewApi = async(categoryId,reqHeader)=>{
    return await commonApi("GET", `${SERVER_URL}/view-user-course/${categoryId}`, {}, reqHeader)
}

export const courseCategoryAddApi = async(reqBody, reqHeader)=>{
    console.log(reqBody, reqHeader);
    return await commonApi("POST", `${SERVER_URL}/add-category`, reqBody, reqHeader)
}

export const courseCategoryViewApi = async(reqHeader)=>{
    return await commonApi("GET", `${SERVER_URL}/view-category`,{}, reqHeader)
}

export const userDeleteCourseApi = async(id, reqHeader)=>{
    return await commonApi("DELETE", `${SERVER_URL}/user-course-delete/${id}`,{}, reqHeader)
}

export const courseVideoAddApi = async(id, reqBody, reqHeader)=>{
    console.log(reqBody, reqHeader);
    return await commonApi("POST", `${SERVER_URL}/add-course-video/${id}`, reqBody, reqHeader)
}


export const userCourseVideoClassViewApi = async(id, reqHeader)=>{
    return await commonApi("GET", `${SERVER_URL}/view-course-video/${id}`, {}, reqHeader)
}



export const userDeleteClassApi = async(id, reqHeader)=>{
    return await commonApi("DELETE", `${SERVER_URL}/user-class-delete/${id}`,{}, reqHeader)
}


export const homeCourseViewApi = async(reqHeader)=>{
    return await commonApi("GET", `${SERVER_URL}/view-home-course`, {}, reqHeader)
    
}

export const orderPaymentApi = async(reqBody, reqHeader)=>{
    console.log(reqBody);
    
    return await commonApi("POST", `${SERVER_URL}/order`, reqBody, reqHeader)
}

export const orderPaymentIsValidApi = async(reqBody)=>{
    console.log(reqBody);
    
    return await commonApi("POST", `${SERVER_URL}/order/validate`, reqBody)
}

export const getStudentAllCourseApi = async(id, reqHeader)=>{
    return await commonApi("GET", `${SERVER_URL}/student-courses/${id}`, {}, reqHeader)
}

export const sCourseVideoClassViewApi = async(courseId, reqHeader)=>{
    return await commonApi("GET", `${SERVER_URL}/student-video/${courseId}`,{}, reqHeader)
}

export const getAllStudentApi = async(reqHeader)=>{
    return await commonApi("GET", `${SERVER_URL}/get-all-students`,{},reqHeader)
}
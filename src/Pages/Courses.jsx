import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import CourseImg from '../assets/course.png'
import { homeCourseViewApi, orderPaymentApi, orderPaymentIsValidApi } from '../Service/allApi'
import SERVER_URL from '../Service/serverUrl';
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Courses = () => {

    const navigate = useNavigate()
    const [userCourse, setUserCourse] = useState([])

    useEffect(()=>{
        getUserAllCourse()
    },[])
    const getUserAllCourse = async() =>{
        const token = sessionStorage.getItem("token")
        
        if(token){
          const reqHeader = {
             "Authorization": `Bearer ${token}`
          }
          try {
            const result = await homeCourseViewApi(reqHeader)
            if(result.status==200){
              setUserCourse(result.data)
            }
          } catch (error) {
            console.log(error);
          }
        }
      }


      const handlePyament = async(e,course)=>{
        const token = sessionStorage.getItem("token")
        const user = sessionStorage.getItem("user")
        const receipt = generateReceiptId()
        const amount = course?.price
        const currency = 'INR'
        const orderDetails = {
            "amount": amount,           
            "currency": currency,         
            "receipt": receipt,  
            "payment_capture": 1      
          }
          
        
        if(token){
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await orderPaymentApi(orderDetails, reqHeader)
                if(result.status == 200){
                    console.log(result.data);
                    const orderDetails = result.data
                    var options = {
                        "key": "rzp_test_4fOFU5kAwYm1Kz", 
                        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        "currency": "INR",
                        "name": "CodeWhiz", //your business name
                        "description": "Test Transaction",
                        "image": {Logo},
                        "order_id": result.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        "handler": async function (response){
                            const user=JSON.parse(sessionStorage.getItem("user"))
                            const body ={...response,orderDetails, course, user}
                            const validateRespone = await orderPaymentIsValidApi(body)
                            if(validateRespone.status == 200){
                                console.log(validateRespone.data);
                                alert("Payment Successfull")
                                navigate('/dashboard')
                            }
                        },
                        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                            "name": user.username, //your customer's name
                            "email": user.email, 
                            "contact": "900000090000"  //Provide the customer's phone number for better conversion rates 
                        },
                        "notes": {
                            "address": "Razorpay Corporate Office"
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };
                    var rzp1 = new Razorpay(options);
                    rzp1.on('payment.failed', function (response){
                            alert(response.error.code);
                            alert(response.error.description);
                            alert(response.error.source);
                            alert(response.error.step);
                            alert(response.error.reason);
                            alert(response.error.metadata.order_id);
                            alert(response.error.metadata.payment_id);
                    });
                    rzp1.open();
                    e.preventDefault();
                    
                    
                    alert("order Created")
                }else{
                    console.log(50);
                    alert(result.response)
                    
                }
            } catch (error) {
                console.log(error);
                
            }
        }else{
            alert("Pleas login to the website")
        }
      } 


    function generateReceiptId() {
        const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase(); // Random alphanumeric
        return `REC-${randomPart}`;
    }
    

    return (
        <>
            <Header />
            <div className='w-full flex flex-col items-center pt-28'>
                <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
                    <h1 className='text-5xl font-bold text-[#A138BE]'>Courses</h1>
                    <img width={"250px"} src={CourseImg} alt="" />
                </div>
                <div className='grid w-4/5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-10'>
                    {
                        userCourse?.length>0?
                        userCourse.map(course=>(
                            <div key={course?._id} className='w-96 flex items-start flex-col rounded mt-2 shadow '>
                                <div><img width={"200px"} className='rounded' src={`${SERVER_URL}/uploads/images/${course?.courseImg}`} alt="" /></div>
                                <div className='w-full p-2'>
                                    <h1 className='text-2xl font-bold py-2 px-5'>{course?.courseName}</h1>
                                    <p className='text-xl font-semibold text-gray-600 py-2 px-5'>{course?.description}</p>
                                    <div className='w-full flex justify-between items-center py-2 px-5'>
                                        <p className='text-xl font-bold'>{course?.price}</p> 
                                        <button onClick={(e)=>handlePyament(e,course)} className='px-3 py-2 bg-[#A138BE] text-white font-bold rounded-md'>Enroll Now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <div className='flex justify-center items-center' style={{height:"50vh", width:"70vw"}}>
                            <p className='text-red-600 font-bold text-2xl'>*No Courses Available</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Courses
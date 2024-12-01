import { Flag } from '@mui/icons-material';
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { courseCategoryAddApi } from '../../Service/allApi';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };
  

const TAddCateogry = () => {
    const [category, setCategory] = useState({
      categoryName:""
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setCategory({categoryName:""})
    }

    const handleAddCategory = async() => {
        console.log("Inside handle add category");
        const {categoryName} = category
        if(categoryName){
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Authorization":`Bearer ${token}`
                }
                try {
                    const result = await courseCategoryAddApi(category, reqHeader)
                    if(result.status==200){
                        alert("Category Added")
                        handleClose()
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }else{
            alert("Please fill the form")
        }
        
    }
    // console.log(categoryName);
    
  return (
    <div>
        <button onClick={handleOpen}  className='header-bg text-[#A138EB] text-xl px-4 py-2 rounded shadow font-bold'>Add Category <i className="fa-solid fa-plus"></i></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='text-2xl font-bold py-4'>Add Course</h1>
          <input value={category.categoryName} onChange={e=>setCategory({...category, categoryName: e.target.value})}  className='rounded-md border border-zinc-700 p-2 mb-2' type="text" placeholder='Course Category' />
          <div className='pt-5'>
            <button onClick={handleClose} className='text-md px-3 py-1 rounded m-2 bg-red-700 text-white font-bold'>Cancel</button>
            <button onClick={handleAddCategory} className='text-md px-3 py-1 rounded m-2 bg-green-800 text-white font-bold'>Submit</button>
          </div>

        </Box>
      </Modal>
    </div>
  )
}

export default TAddCateogry
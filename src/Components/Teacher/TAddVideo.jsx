import { Box, Modal } from '@mui/material';
import React, { useState } from 'react'
import { courseVideoAddApi } from '../../Service/allApi';


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
  

const TAddVideo = ({courseId}) => {
    const [isInvalidLink, setIsInvalidLink] = useState(false)
    const [videoDetails, setVideoDetails] = useState({
        classTitle: "", thumbnailUrl: "", videoLink: ""
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setVideoDetails({
            classTitle: "", thumbnailUrl: "", videoLink: ""
        })
    }

    const getEmbedLink = (YouTubeLink) => {
        if (YouTubeLink.includes("v=")) {
            const videoId = YouTubeLink.split("v=")[1].slice(0, 11)
            setVideoDetails({ ...videoDetails, videoLink: `https://www.youtube.com/embed/${videoId}` })
            setIsInvalidLink(false)
        } else {
            setIsInvalidLink(true)
            console.log("Invalid URL");
            setVideoDetails({ ...videoDetails, videoLink: "" })
        }
    }

    const handleSubmitVideo = async(e)=> {
        e.preventDefault()
        const id = courseId
        console.log("Inside handle submit video");
        
        const {classTitle, thumbnailUrl, videoLink} = videoDetails
        // console.log(classTitle, thumbnailUrl, videoLink);
        if(classTitle && thumbnailUrl && videoLink){
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Authorization":`Bearer ${token}`
                }
                try {
                    const result = await courseVideoAddApi(id, videoDetails, reqHeader)
                    if(result.status==200){
                        alert("Video Class Added")
                        handleClose()
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }else{
            alert("Please fill the form")
        }

        handleClose()
        
    }
    
    
    
  return (
    <div>
        <button onClick={handleOpen}  className='header-bg text-[#A138EB] text-xl px-4 py-2 rounded shadow font-bold'>Add Video Class <i className="fa-solid fa-plus"></i></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1 className="text-2xl font-bold py-4">Add Video Class</h1>
          <form encType="multipart/form-data">
            <input
              className="rounded-md border border-zinc-700 p-2 mb-2 w-full"
              type="text"
              placeholder="Video Class Name"
              value={videoDetails.classTitle}
              onChange={(e) => setVideoDetails({...videoDetails, classTitle:e.target.value})}
            />
             <input
              className="rounded-md border border-zinc-700 p-2 mb-2 w-full"
              type="text"
              placeholder="Video Thumbnail URL"
              value={videoDetails.thumbnailUrl}
              onChange={(e) => setVideoDetails({...videoDetails, thumbnailUrl:e.target.value})}
            />
             <input
              className="rounded-md border border-zinc-700 p-2 mb-2 w-full"
              type="text"
              placeholder="Video Class Link"
              value={videoDetails.videoLink}
              onChange={(e) => getEmbedLink(e.target.value)}
            />
           

            <div className="pt-5">
              <button
                type="button"
                onClick={handleClose}
                className="text-md px-3 py-1 rounded m-2 bg-red-700 text-white font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitVideo}
                type="submit"
                className="text-md px-3 py-1 rounded m-2 bg-green-800 text-white font-bold"
              >
                Submit
              </button>
            </div>
          </form>

        </Box>
      </Modal>
    </div>
  )
}

export default TAddVideo
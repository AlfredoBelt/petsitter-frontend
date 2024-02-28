import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const SliderComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
      
        className="mySwiper"
      >
        <SwiperSlide><ImagePreview><Image src={'/sliderimg_00.svg'} width={600} height={400} alt="slider img 1" /></ImagePreview></SwiperSlide>
        <SwiperSlide><ImagePreview><Image src={'/sliderimg_01.svg'} width={600} height={400} alt="slider img 2"/></ImagePreview></SwiperSlide>
        <SwiperSlide><ImagePreview><Image src={'/sliderimg_02.svg'} width={600} height={400} alt="slider img 3"/></ImagePreview></SwiperSlide>
      </Swiper>
    </>
  )
}

const ImagePreview = ({children:{props}}) =>{
  const [showPreview, setPreview] = useState(false)
  const [selectedImg, setSelectedImg] = useState(null)

  const openPreview = (image) =>{
    setPreview(true)
    setSelectedImg(image)
  }

  const closePreview = () =>{
    setPreview(false)
    setSelectedImg(null)
  } 

  return(
    <>
    <Image src={props.src} alt="imagen" onClick={() => openPreview(props.src)} width={600} height={400}/>
    {
      showPreview && (
        <Modal open={showPreview} keepMounted sx={{display:"flex", alignItems:"center", flexDirection:"column"}} onClose={closePreview}>
          <Box>
            <Image src={props.src} alt="preview" width={1050} height={600}/>
            <IconButton variant="contained" onClick={closePreview} sx={{position:"absolute", top:0,right:"20%"}}><CloseIcon fontSize="large" sx={{color:"white"}}/></IconButton>
          </Box>
        </Modal>
      )
    }
    </>
  )
}
import { Box } from "@mui/material";
import Image from "next/image";

export default function SliderImg(){
    return(
        <Box sx={{padding:{xs:"0",md:"3em"}}} >
        <Box sx={{display:"flex", overflow:"auto", columnGap:"16em", background:{xs:"transparent", md:"white"}, padding:"2em", borderRadius:"1em" }} >
            <Image src={"/sliderimg_00.svg"} width={500} height={300} style={{width:"100%", height:"auto"}} alt="imagen slider" />
            <Image src={"/sliderimg_01.svg"} width={500} height={300} style={{width:"100%", height:"auto"}} alt="imagen slider" />
            <Image src={"/sliderimg_02.svg"} width={500} height={300} style={{width:"100%", height:"auto"}} alt="imagen slider" />
        </Box>
        </Box>
    )
}
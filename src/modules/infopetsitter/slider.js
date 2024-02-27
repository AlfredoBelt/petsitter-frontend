import { Box } from "@mui/material";
import Image from "next/image";

export default function SliderImg(){
    return(
        <Box sx={{background:"white", padding:"3em"}}>
        <Box sx={{display:"flex", overflow:"auto", columnGap:"16em" }}>
            <Image src={"/ubicacion.svg"} width={500} height={300} style={{width:"100%", height:"auto"}} alt="imagen slider" />
            <Image src={"/ubicacion.svg"} width={500} height={300} style={{width:"100%", height:"auto"}} alt="imagen slider" />
            <Image src={"/ubicacion.svg"} width={500} height={300} style={{width:"100%", height:"auto"}} alt="imagen slider" />
          
        </Box>
        </Box>
    )
}
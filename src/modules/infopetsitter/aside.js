import { Box, Rating } from "@mui/material";
import Image from "next/image";
import { poppins } from "@/fonts/fonts";
import {ContactButton} from "@/component/infoPetsitter/index"

export default function AsideInfo(){
    return(
        <Box>
            <Box>
                <strong className={poppins.className}>Esmeralda Aguilar</strong>
                <Rating value={5} readOnly sx={{paddingLeft:"1em"}}/>
            </Box>
            <p><span><strong>Se ubica en: </strong></span>Colonia los olivos Culiacánn Sinaloa (31) años de experiencia con:</p>
            <Box>
                <Image src={"/cuida.svg"} width={400} height={200} alt="Cuidado de animales" style={{width:"60%", height:"auto"}}/>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column"}}>
                
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <strong>Hospedaje</strong>
                        <strong>$300</strong>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <p>en casa del cuidador</p>
                        <p>por noche</p>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <strong>Guardería de dia</strong>
                        <strong>$200</strong>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <p>en guarderia del cuidador</p>
                        <p>por dia</p>
                    </Box>
            </Box>
            
        </Box>
        
    )
}
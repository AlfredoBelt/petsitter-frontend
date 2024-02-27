import { Box, Rating } from "@mui/material";
import Image from "next/image";
import { poppins } from "@/fonts/fonts";
import {ContactButton, QuestionButton} from "@/component/infoPetsitter/index"

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
            <Box sx={{display:"flex", flexDirection:"column", rowGap:"1em", alignItems:"center"}}>
                <ContactButton >Contactar a Esmeralda</ContactButton>
                <QuestionButton >Hazme una pregunta</QuestionButton>
            </Box>
            <Box sx={{display:{xs:"none", md:"block"}}}>
                <Box>
                    <strong>Esmeralda Aguilar</strong>
                    <p>Me encantan los animales, los respetos, los cuido y les doy mucho amor. 
                        Cuando se quedan en casa perritos de otras personas loan trato como a si fuera 
                        un miembro de la familia. Y de igual manera cuando lo se saco a pasear. 
                        Los llevo a caminar al parque o dependiendo la instrucción que me dé su due...
                        Ver mas...</p>
                </Box>
                <Box>
                    <strong>Algunas habilidades</strong>
                    <ul>
                        <li>Administra Inyecciones</li>
                        <li>Administra Medicina</li>
                        <li>Cuidados Especiales</li>
                        <li>Formación en primeros auxilios</li>
                        <li>Experiencia con perros activos</li>
                        <li>Experiencia con mascotas de tercera edad</li>
                    </ul>
                </Box>
                <Box>
                    <strong>Ubicación</strong>
                    <Image src={"/ubicacion.png"} width={500} height={500} alt="Ubicación"/>
                </Box>
            </Box>
        </Box>
        
    )
}
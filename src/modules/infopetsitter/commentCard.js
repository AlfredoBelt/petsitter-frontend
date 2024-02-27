import { Avatar, Box } from "@mui/material";

export default function CommentCard(){
    return(
        <Box sx={{display:"flex", columnGap:"1em"}}>
            <Avatar src="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" alt="perfil" sx={{width:{xs:"2em",md:"3em"}, height:{xs:"2em",md:"3em"}}} />
            <Box sx={{fontSize:{xs:"0.7em", md:"0.8em"}}}>
                <p>Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora, puntual, 
                    amable, limpia y, lo más importante, es muy cariñosa con Olive. Culiacán Sin. 23 mar - 01 abr 2023</p>
                <p>Culiacán Sin. 23 mar - 01 abr 2023</p>
            </Box>
        </Box>
    )
}
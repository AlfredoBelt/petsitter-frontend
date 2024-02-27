import { Box, Button, TextField } from "@mui/material";
import { poppins } from "@/fonts/fonts";
import Link from "next/link";
import { routes } from "@/utils/utils";

export default function FormLogin(){
    return(
        <Box sx={{padding:{xs:"1.5em",md:"3em"}}}>
            <h2 className={poppins.className}>Iniciar sesion</h2>
            <form style={{display:"flex", flexDirection:"column", rowGap:"2em"}}>
                <TextField type="text" variant="outlined" placeholder="Correo" sx={{background:"white"}}/>
                <TextField type="text" variant="outlined" placeholder="Cotraseña" sx={{background:"white"}}/>
                <Button type="submit" variant="contained">Ingresar</Button>
                <Box sx={{display:"flex", flexDirection:"column", fontSize:"0.8em", rowGap:"1em"}}>
                    <Link href={"#"} style={{color:"blue"}}>Recuperar contraseña?</Link>
                    <Link href={routes.SIGNUP} style={{color:"blue"}}>Crear cuenta</Link>
                </Box>
            </form>
        </Box>
    )
}
import { Form, FormContainer, FormTitle, InputText, MainContent } from "@/component/signUp/signup"
import Image from "next/image"
import { poppins } from "@/fonts/fonts"
import { Button, Grid, Box, IconButton } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function SignUp(){
    return(
        <MainContent>
            <IconButton sx={{color:"white", display:{xs:"block", md:"none"}, position:"absolute", left:"4%", top:"6%"}}><ArrowBackIcon fontSize="large"/></IconButton>
            <Box sx={{display:{xs:"none", md:"block"}}}>
                <Image src={"/logo_00.svg"}  width={300} height={120} alt="Logo CuidaCan" priority/>
            </Box>
            <Box sx={{display:{xs:"block", md:"none"}}}>
                <Image src={"/logo_movil.png"} width={100} height={100} alt="Logo CuidaCan" priority/>
            </Box>
            <FormContainer sx={{display:{xs:"flex", md:"block"}, justifyContent:{xs:"center"}, alignItems:{xs:"center"}, flexDirection:{xs:"column"}}}>
            <FormTitle >Crear Cuenta</FormTitle>
                <Form className={poppins.className} >
                    <Grid container flexGrow={1} spacing={2} sx={{flexDirection:{xs:"column", md:"row"}}}>
                        <Grid item xs={4} md={6} lg={4}>
                            <InputText type="text" placeholder="Nombre (s)" required />
                        </Grid>
                        <Grid item xs={4} md={6} lg={4}>
                            <InputText type="text" placeholder="Apellido (s)" required />
                        </Grid>
                        <Grid item xs={4} md={6} lg={4}>
                            <InputText type="text" placeholder="Dirección" required/>
                        </Grid>
                        <Grid item xs={4} md={6} lg={4}>
                            <InputText type="text" placeholder="Teléfono" required/>
                        </Grid>
                        <Grid item xs={4} md={6} lg={4} >
                            <InputText type="text" placeholder="Correo" required/>
                        </Grid>
                        <Grid item xs={4} md={6} lg={4} >
                            <InputText type="text" placeholder="Contraseña" required/>
                        </Grid>
                        <Grid item xs={4} md={6} lg={4} >
                            <InputText type="text" placeholder="Repetir contraseña" required/>
                        </Grid>
                        <Grid item xs={4} sx={{display:{xs:"none", md:"block"}}}></Grid>
                        <Grid item xs={4} sx={{display:{xs:"none", md:"block"}}}></Grid>
                        <Grid item xs={4} ></Grid>
                        <Grid item xs={4} ></Grid>
                        <Grid item xs={6} md={4} lg={4} >
                            <Button type="submit" variant="contained" fullWidth sx={{background: "#EFA60B"}}>Crear cuenta</Button>
                        </Grid>

                    </Grid>
                    
                    
                    
                </Form>
            </FormContainer>
        </MainContent>
    )
}
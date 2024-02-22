import { Form, FormContainer, FormTitle, InputText, MainContent } from "@/component/signUp/signup"
import Image from "next/image"
import { poppins } from "@/fonts/fonts"
import { Button, Grid } from "@mui/material"
export default function SignUp(){
    return(
        <MainContent>
            <Image src={"/logo_00.svg"}  width={300} height={120} alt="Logo CuidaCan" priority/>
            <FormContainer>
            <FormTitle>Crear Cuenta</FormTitle>
                <Form className={poppins.className}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <InputText type="text" placeholder="Nombre (s)" required />
                        </Grid>
                        <Grid item xs={4}>
                            <InputText type="text" placeholder="Apellido (s)" required />
                        </Grid>
                        <Grid item xs={4}>
                            <InputText type="text" placeholder="Dirección" required/>
                        </Grid>
                        <Grid item xs={4}>
                            <InputText type="text" placeholder="Teléfono" required/>
                        </Grid>
                        <Grid item xs={4}>
                            <InputText type="text" placeholder="Correo" required/>
                        </Grid>
                        <Grid item xs={4}>
                            <InputText type="text" placeholder="Contraseña" required/>
                        </Grid>
                        <Grid item xs={4}>
                            <InputText type="text" placeholder="Repetir contraseña" required/>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Button type="submit" variant="contained" fullWidth sx={{background: "#EFA60B"}}>Crear cuenta</Button>
                        </Grid>

                    </Grid>
                    
                    
                    
                </Form>
            </FormContainer>
        </MainContent>
    )
}
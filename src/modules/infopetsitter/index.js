import { Grid } from "@mui/material";
import AsideInfo from "./aside";

export default function InfoPetsitter(){
    return(
        <Grid container padding={2}>
            <Grid item xs={12} md={8}  >
                <h1>Hola mundo</h1>
            </Grid>
            <Grid item xs={12} md={4} >
                <AsideInfo />
            </Grid>
            <Grid item xs={12} md={8} sx={{background:"red"}}>
                <h1>Hola mundo3</h1>
            </Grid>
        </Grid>
    )
}
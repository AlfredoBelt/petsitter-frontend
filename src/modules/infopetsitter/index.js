import { Grid } from "@mui/material";

export default function InfoPetsitter(){
    return(
        <Grid container>
            <Grid item xs={8} sx={{background:"black"}}>
                <h1>Hola mundo</h1>
            </Grid>
            <Grid item xs={4} sx={{background:"blue"}}>
                <h1>Hola mundo2</h1>
            </Grid>
            <Grid item xs={8} sx={{background:"red"}}>
                <h1>Hola mundo3</h1>
            </Grid>
        </Grid>
    )
}
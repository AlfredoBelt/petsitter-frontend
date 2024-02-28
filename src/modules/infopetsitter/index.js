import { Grid, Box } from "@mui/material";
import AsideInfo from "./aside";
import { SliderComponent } from "./slider";
import ListComments from "./listComments";

export default function InfoPetsitter(){
    return(
        <Grid container padding={2} spacing={2}>
            <Grid item xs={12} md={8}  >
                <Box sx={{background:{xs:"transparent",md:"white"}, borderRadius:"1em", padding:"1em"}}>
                    <SliderComponent />
                </Box>
                <Box sx={{display:{xs:"none", md:"block"}}}>
                    <ListComments />
                </Box>
            </Grid>
            <Grid item xs={12} md={4} >
                <AsideInfo />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display:{xs:"block", md:"none"}}}>
                <ListComments />
            </Grid>
        </Grid>
    )
}
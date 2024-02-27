import { Box, Grid } from "@mui/material";
import FormLogin from "./form";
import Image from "next/image";

export default function Login(){
    return(
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <Box sx={{ width:{xs:"90%",md:"70%"}, height:"auto"}}>
                <Grid container flexGrow={1} sx={{boxShadow:"rgba(0, 0, 0, 0.8) 0px 4px 12px"}}>
                    <Grid item xs={12} md={6} sx={{background:{xs:"#0E4B5B", md:"#FFF5E1"}}}>
                        <Box sx={{display:{xs:"flex", md:"none"}, justifyContent:"center", alignItems:"center", paddingTop:"2em"}}>
                            <Image src={"/logo_00.svg"} width={400} height={230} alt="imagen logo" style={{width:"70%", height:"auto"}}/>
                        </Box>
                        <FormLogin />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{background:"#0E4B5B", display:{xs:"none", md:"flex"}, justifyContent:"center", alignItems:"center"}}>
                        <Image src={"/logo_00.svg"} width={400} height={230} alt="imagen logo" style={{width:"100%", height:"auto"}}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
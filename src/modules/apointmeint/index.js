import { Box, Button, ButtonGroup, Grid, InputAdornment, TextField } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import { ApointButton } from "@/component/apointmeint";
import { poppins } from "@/fonts/fonts";
import Image from "next/image";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function Apointmeint(){
    return(
        <Grid container padding={2} flexGrow={1} >
            <Grid item xs={12} md={6}>
                <h1 className={poppins.className} style={{color:"#0E4B5B"}}>Reserva</h1>
                <Box sx={{display:{xs:"block", md:"none"}}}>
                    <Image src={"/animals_movil.svg"} width={400} height={340} alt="aniimales" style={{width:"90%", height:"auto"}}/>
                </Box>
                <ButtonGroup sx={{width:{xs:"100%",md:"62%"}}}>
                    <ApointButton variant="text" fullWidth startIcon={<WorkIcon />}>Hospedaje</ApointButton>
                    <ApointButton variant="text" fullWidth startIcon={<WorkIcon />}>Guarderia</ApointButton>
                </ButtonGroup>
                    <p>Colonia las coloradas</p>
                <ButtonGroup sx={{width:{xs:"100%",md:"62%"}}}>
                    <ApointButton variant="text" fullWidth>Entrada</ApointButton>
                    <ApointButton variant="text" fullWidth>Salida</ApointButton>
                </ButtonGroup>

            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{display:{xs:"none", md:"block"}}}>
                    <Image src={"/animals.svg"} width={400} height={340} alt="aniimales" style={{width:"70%", height:"auto"}}/>
                </Box>
                <Box sx={{display:"flex", columnGap:"2em"}}>
                    <Box>
                        <p>Hora de salida:</p>
                        <TextField type="text" placeholder="Salida" variant="outlined" sx={{background:"white", width:"100%"}} InputProps={{
                            startAdornment:<InputAdornment position="start" sx={{display:{xs:"flex", md:"none"}}}><AccessAlarmIcon /></InputAdornment>
                        }}/>
                    </Box>
                    <Box>
                        <p>Hora de entrada:</p>
                        <TextField type="text" placeholder="Entrada" variant="outlined" sx={{background:"white"}} InputProps={{
                            startAdornment:<InputAdornment position="start" sx={{display:{xs:"flex", md:"none"}}}><AccessAlarmIcon /></InputAdornment>
                        }}/>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={0} md={6}>
            </Grid>
            <Grid item xs={12} md={6}>
                
            </Grid>
        </Grid>
    )
}
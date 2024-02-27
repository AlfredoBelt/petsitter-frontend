import { Box, Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import styled from "styled-components"
import { poppins } from "@/fonts/fonts"
export default function Home(){
    return(
        
        <Grid container flexGrow={1} sx={{flexDirection:{xs:"column-reverse", md:"row"}}}>
            <Grid item  xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box sx={{position:{md:"relative"}, bottom:{md:"15%"}, padding:{xs:"2em", md:"0"}}}>
                    {/* <h1 className={poppins.className} style={{color: "#0E4B5B", fontSize: "3em"}}>Tus mascotas en<br/> las mejores manos.</h1>
                    <p style={{fontSize: "1.3em"}}>Somos una empresa con mas 2,000 personas en <br/>el cuidado de tus mascotas.</p> */}
                    <Typography level="h1"sx={{fontSize:{xs:"1.8em", md:"3em"}}} className={poppins.className} >Tus mascotas en<br/> las mejores manos.</Typography>
                    <Typography level="p"sx={{fontSize:{xs:"0.8em", md:"1.3em"}}} className={poppins.className}>Somos una empresa con mas 2,000 personas en <br/>el cuidado de tus mascotas.</Typography>
                </Box>
                
            </Grid>
            <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"flex-end"}}>
                <Image src={"/main.png"} width={400} height={400} alt="imagen principal" priority  style={{width:"91%", height:"auto"}}/>
                
            </Grid>
        </Grid>
     
    )
}


 const MainContent = styled.main`
    display: flex;
    height: 100%;`

const DescriptionContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const BoxContent = styled(Box)`
    position: relative;
    left: 10%;
    bottom: 15%;`
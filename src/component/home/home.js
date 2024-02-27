import { Box, Button, Grid } from "@mui/material"
import Image from "next/image"
import styled from "styled-components"
import { poppins } from "@/fonts/fonts"
export default function Home(){
    return(
        
        <Grid container flexGrow={1} >
            <Grid item  xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box sx={{position:{md:"relative"}, bottom:{md:"15%"}}}>
                    <h1 className={poppins.className} style={{color: "#0E4B5B", fontSize: "3em"}}>Tus mascotas en<br/> las mejores manos.</h1>
                    <p style={{fontSize: "1.3em"}}>Somos una empresa con mas 2,000 personas en <br/>el cuidado de tus mascotas.</p>
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
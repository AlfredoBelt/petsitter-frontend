import { Box } from "@mui/material"
import Image from "next/image"
import styled from "styled-components"
import { poppins } from "@/fonts/fonts"
export default function Home(){
    return(
        <MainContent>
            <DescriptionContainer>
                <BoxContent>
                    <h1 className={poppins.className} style={{color: "#0E4B5B", fontSize: "3em"}}>Tus mascotas en<br/> las mejores manos.</h1>
                    <p style={{fontSize: "1.3em"}}>Somos una empresa con mas 2,000 personas en <br/>el cuidado de tus mascotas.</p>

                </BoxContent>
            </DescriptionContainer>
            <Image src={"/main_img.svg"} width={800} height={800} alt="imagen principal" priority style={{position: "fixed", right: "0", zIndex: "-1"}} />
        </MainContent>
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
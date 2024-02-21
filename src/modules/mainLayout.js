import { Header, HeaderContainer, MenuContainer } from "@/component/header";
import { Box, Button, Container, IconButton, SwipeableDrawer, Toolbar, createSvgIcon } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Menu from "@mui/icons-material/Menu"
import { useState } from "react"
import SideBar from "./sidebar/sidebar";

export default function MainLayout({children}){
    const [openNabar, setOpenNavbar] = useState(false)
    

    const toggleDrawer = (open) => (event) =>{
        if(event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")){
        return
        }
        setOpenNavbar(open)
    }
    
    return(
        <>
        <Header>
            <Container maxWidth="xl">
                <Toolbar sx={{display:"flex", justifyContent: "space-between", padding: "0px"}}>
                    <MenuContainer>
                    <IconButton onClick={ toggleDrawer(true)}><Menu sx={{color: "white"}}/></IconButton>
                    <SideBar toggleDrawer={toggleDrawer} state={openNabar} />
                    <Link href={"/"}>
                        <Image src={"/logo_00.svg"} width={163} height={37} alt="logo CuidaCan"/>
                    </Link>
                    </MenuContainer>
                    <HeaderContainer >
                        <Button variant="" sx={{borderRight: "2px solid white", borderRadius: "0px"}} >Iniciar Sesion</Button>
                        <Button variant="" sx={{borderRadius: "0px"}}>Regístrate</Button>
                    </HeaderContainer>
                </Toolbar>
            </Container>
        </Header>
        { children }
        </>
    )
}
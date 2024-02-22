import SideBar from "./sidebar/sidebar";
import Image from "next/image";
import Link from "next/link";
import Menu from "@mui/icons-material/Menu"
import { Header, HeaderContainer, MenuContainer } from "@/component/header";
import { Button, Container, IconButton, Toolbar } from "@mui/material";
import { routes } from "@/utils/utils";

export default function HeaderNavbar({toggleDrawer, openNabar}){
    return(
        <Header>
        <Container maxWidth="xl">
            <Toolbar sx={{display:"flex", justifyContent: "space-between", padding: "0px"}}>
                <MenuContainer>
                <IconButton onClick={ toggleDrawer(true)}><Menu sx={{color: "white"}}/></IconButton>
                <SideBar toggleDrawer={toggleDrawer} state={openNabar} />
                <Link href={routes.HOME}>
                    <Image src={"/logo_00.svg"} width={163} height={37} alt="logo CuidaCan"/>
                </Link>
                </MenuContainer>
                <HeaderContainer >
                    <Link href={routes.LOGIN} style={{width: "auto", height: "auto"}}>
                        <Button variant="" sx={{borderRight: "2px solid white", borderRadius: "0px"}} >Iniciar Sesion</Button>
                    </Link>
                    <Link href={routes.SIGNUP} style={{width: "auto", height: "auto"}}>
                        <Button variant="" sx={{borderRadius: "0px"}}>Regístrate</Button>
                    </Link>
                </HeaderContainer>
            </Toolbar>
        </Container>
    </Header>
    )
}
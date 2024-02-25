import SideBar from "./sidebar/sidebar";
import Image from "next/image";
import Link from "next/link";
import Menu from "@mui/icons-material/Menu"
import { Header, HeaderContainer, MenuContainer } from "@/component/header";
import { AppBar, Button, Container, IconButton, Toolbar, Box, Grid } from "@mui/material";
import { routes } from "@/utils/utils";

export default function HeaderNavbar({toggleDrawer, openNabar}){
    return(
    //     <Header>
    //     <Container maxWidth="xl">
    //         <Toolbar sx={{display:"flex", justifyContent: "space-between", padding: "0px"}}>
    //             <MenuContainer>
    //             <IconButton onClick={ toggleDrawer(true)}><Menu sx={{color: "white"}}/></IconButton>
    //             <SideBar toggleDrawer={toggleDrawer} state={openNabar} />
    //             <Link href={routes.HOME}>
    //                 <Image src={"/logo_00.svg"} width={163} height={37} alt="logo CuidaCan"/>
    //             </Link>
    //             </MenuContainer>
    //             <HeaderContainer >
    //                 <Link href={routes.LOGIN} style={{width: "auto", height: "auto"}}>
    //                     <Button variant="" sx={{borderRight: "2px solid white", borderRadius: "0px"}} >Iniciar Sesion</Button>
    //                 </Link>
    //                 <Link href={routes.SIGNUP} style={{width: "auto", height: "auto"}}>
    //                     <Button variant="" sx={{borderRadius: "0px"}}>Regístrate</Button>
    //                 </Link>
    //             </HeaderContainer>
    //         </Toolbar>
    //     </Container>
    // </Header>
    <AppBar>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Grid container>
                <Grid item xs={4} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Container sx={{display:"flex", alignItems:"center"}}>
                 <IconButton onClick={ toggleDrawer(true)}><Menu fontSize="large" sx={{color: "white"}}/></IconButton>
                 <SideBar toggleDrawer={toggleDrawer} state={openNabar} />
                 <Box sx={{display:{xs:"none", md:"flex"}}}>
                    <Link href={routes.HOME} style={{width:"auto"}}>
                        <Image src={"/logo_00.svg"} width={163} height={37} alt="logo CuidaCan"/>
                    </Link>
                 </Box>
                 
                 </Container>
                </Grid>
                <Grid item xs={4} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box sx={{display:{xs:"flex", md:"none"}}}>
                 <Link href={routes.HOME}>
                     <Image src={"/logo_00.svg"} width={163} height={37} alt="logo CuidaCan"/>
                 </Link>
                 </Box>
                </Grid>
                <Grid item xs={4} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Box sx={{display:{xs:"none", md:"flex"}}}>
                     <Link href={routes.LOGIN} style={{width: "fit-content", height: "auto"}}>
                         <Button variant="" sx={{borderRight: "2px solid white", borderRadius: "0px"}} >Iniciar Sesion</Button>
                     </Link>
                     <Link href={routes.SIGNUP} style={{width: "auto", height: "auto"}}>
                         <Button variant="" sx={{borderRadius: "0px"}}>Regístrate</Button>
                     </Link>
                 </Box>
                </Grid>
            </Grid>
            
                
                 
            </Toolbar>
        </Container>
    </AppBar>
    )
}
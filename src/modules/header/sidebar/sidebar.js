import { Drawer, List, ListItem, Box, Divider, Button } from "@mui/material"

import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Navbutton from "./navButton";
import LogoutIcon from '@mui/icons-material/Logout';
import UserCard from "../../user/userCard";
import { LogoutButton, NavBar, UserContainer } from "@/component/sidebar";
import { routes } from "@/utils/utils";


export default function SideBar({toggleDrawer, state}) {

    const navList = ["Mensajes", "Cuidadores", "Agendados"]
    const navIcons = [<EmailIcon/>, <GroupsIcon/>, <CalendarMonthIcon/>]
    const navpaths = ["#", routes.LIST_PETSITTER, routes.CREATE_APOINTMENT]
    
    const list = () =>(
        <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        sx={{display: "flex", flexDirection: "column"}}
        >
            <UserContainer>
                <UserCard photoUrl="https://mui.com/static/images/avatar/3.jpg" name="Joselyn Contreras" email="Joselyn@gmail.com"/>
            </UserContainer>
            <NavBar>
                {
                    navList.map((text, index) =>(
                        <ListItem key={index} disablePadding>
                            <Navbutton text={text} path={navpaths[index]} icon={navIcons[index]}/>
                        </ListItem>
                    ))
                }
            </NavBar>
            <Divider sx={{marginTop: "15em"}} />
            <LogoutButton startIcon={<LogoutIcon />}>Cerrar Sesion</LogoutButton>
        </Box>
    )
    
    return(
        <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}>
            {list()}
        </Drawer>
    )
}
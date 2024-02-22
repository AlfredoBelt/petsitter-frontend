import { NavButtonList } from "@/component/sidebar"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Link from "next/link"
export default function Navbutton({text, icon, path}){
    return(
        <Link href={path}>
            <NavButtonList>
                <ListItemIcon>
                    { icon }
                </ListItemIcon>
                <ListItemText primary={ text } sx={{fontSize: "1.5rem"}}/>
            </NavButtonList>
        </Link>
    )
}
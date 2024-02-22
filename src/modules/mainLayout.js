import { useState } from "react"
import HeaderNavbar from "./header/header";
import { usePathname } from "next/navigation"
import { routes } from "@/utils/utils";


export default function MainLayout({children}){
    const [openNabar, setOpenNavbar] = useState(false)
    const pathname = usePathname()



    const toggleDrawer = (open) => (event) =>{
        if(event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")){
        return
        }
        setOpenNavbar(open)
        
    }
    
    return(
        <>
        {
            pathname === routes.SIGNUP
            ? null
            : <HeaderNavbar toggleDrawer={toggleDrawer} openNabar={openNabar} />

        }
        { children }
        </>
    )
}
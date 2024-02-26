import { RankedCardContainer, RankedCardProfile, RankedCardText } from "@/component/petsitter-list";
import { Avatar, Box, Rating } from "@mui/material";


export default function RankedCard({photoUrl, name, age, text, rank}){
    return(
        <Box sx={{background:"#0E4B5B", borderRadius:"1em", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"1em", width:{xs:"90%", md:"90%"}, height:{md:"55%"} }}>
            <RankedCardProfile>
                <Avatar src={photoUrl} alt="foto del cuidador" sx={{width:{xs:"4em", sm:"4em"}, height: {xs:"4em",sm:"4em"}}} />
                <Box sx={{width: "90%", height: "90%"}}>
                    <p style={{color: "white"}}>{ name } ({ age }) años</p>
                    <Rating value={4} readOnly/>
                </Box>
            </RankedCardProfile>
            <RankedCardText>
                    { text }
            </RankedCardText>
        </Box>
    )
}
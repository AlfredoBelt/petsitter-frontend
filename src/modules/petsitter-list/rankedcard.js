import { RankedCardContainer, RankedCardProfile, RankedCardText } from "@/component/petsitter-list";
import { Avatar, Box, Rating } from "@mui/material";


export default function RankedCard({photoUrl, name, age, text, rank}){
    return(
        <RankedCardContainer>
            <RankedCardProfile>
                <Avatar src={photoUrl} alt="foto del cuidador" sx={{width: "4em", height: "4em"}} />
                <Box sx={{width: "90%", height: "90%"}}>
                    <p style={{color: "white"}}>{ name } ({ age }) años</p>
                    <Rating value={4} readOnly/>
                </Box>
            </RankedCardProfile>
            <RankedCardText>
                    { text }
            </RankedCardText>
        </RankedCardContainer>
    )
}
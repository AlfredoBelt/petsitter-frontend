import { UserContainer } from "@/component/user";
import { Avatar, Box, Container } from "@mui/material";

export default function UserCard({photoUrl, name, email}){
    return(
        <UserContainer>
            <Avatar alt={ name } src={photoUrl} sx={{width: "4em", height: "4em", border: "5px solid grey"}}/>
            <Box>
                <h3>{ name }</h3>
                <p>{ email }</p>
            </Box>
        </UserContainer>
    )
}
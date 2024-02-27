import { Box, Rating } from "@mui/material";
import CommentCard from "./commentCard";

export default function ListComments(){
    return(
        <Box>
            <Rating value={5} readOnly />
            <p>117 valoraciones (<span>Comentarios mostrados</span>)</p>
            <Box sx={{display:"flex", flexDirection:"column", rowGap:"2em"}}>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            </Box>
        </Box>
    )
}
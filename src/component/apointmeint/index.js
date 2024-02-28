const { styled, Button } = require("@mui/material");


export const ApointButton = styled(Button)({
    padding:"12px 24px",
    border:"0px",
    bordeRadius:"0px",
    background:"white",
    color:"#00000080",
    boder:"1px solid #EFA60B",
    "&:focus":{
        background:"#EFA60B",
        color:"white"
    },
    "&:hover":{
        background:"#EFA60B"
    }
})



export const AnimalButton = styled(Button)({
    padding:"12px 24px",
    background:"transparent",
    color:"#00000040",
    
    "&:focus":{
        color:"black",
        borderBottom:"1px solid black"
    },
    "&:hover":{
        color:"black",
        borderBottom:"1px solid black"
    }
})
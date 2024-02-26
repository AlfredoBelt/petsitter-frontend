import { StyledTableCell, StyledTableRow } from "@/component/petsitter-list";
import { Avatar, CardContent, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";

export default function TableList(){
    
    return(
        <TableContainer >
            <Table>
                <TableHead >
                    <TableRow >
                        <StyledTableCell>Cuidador</StyledTableCell>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Ubicación</StyledTableCell>
                        <StyledTableCell>Ciudad</StyledTableCell>
                        <StyledTableCell>Estado</StyledTableCell>
                        <StyledTableCell>Valoraciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    <StyledTableRow>
                        <StyledTableCell><Avatar src="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" sx={{width: "3em", height: "3em"}} /></StyledTableCell>
                        <StyledTableCell>
                            Alfredo
                            {/* <Box sx={{display:{xs:"block", md:"none"}}}>
                                Mexico
                            </Box> */}
                            </StyledTableCell>
                        <StyledTableCell >Mexico</StyledTableCell>
                        <StyledTableCell >Culiacán</StyledTableCell>
                        <StyledTableCell >Sinaloa</StyledTableCell>
                        <StyledTableCell >
                            <Rating value={5} readOnly />
                            {/* <Box sx={{display:{xs:"block", md:"none"}}}>Culiacán, Sinaloa</Box> */}
                            </StyledTableCell>
                    </StyledTableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
        // <CardContent sx={{display:"flex", justifyContent:"space-evenly", alignItems:"center", textAlign:"center", borderRadius:"1em",}}>
        //     <Avatar src={"https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg"} sx={{width: "3em", height: "3em"}} />
        //     <p style={{width:"130px"}}>{ petsitters.nombre }</p>
        //     <p style={{width:"130px"}}> { petsitters.edad }</p>
        //     <p style={{width:"130px"}}>{ petsitters.ubicacion }</p>
        //     <p style={{width:"130px"}}>{ petsitters.ciudad }</p>
        //     <p style={{width:"130px"}}>{ petsitters.estado }</p>
        //     <Rating value={ petsitters.valoraciones } readOnly />
        // </CardContent>
    )
}
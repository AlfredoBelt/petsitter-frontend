import { StyledTableCell, StyledTableRow } from "@/component/petsitter-list";
import { Avatar, CardContent, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography } from "@mui/material";

export default function TableList(){
    
    return(
        <TableContainer >
            <Table>
                <TableHead >
                    <TableRow sx={{display:{xs:"none", md:"table-row"}}}>
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
                        <StyledTableCell sx={{overflow:"auto", width:"30%"}}>
                            <Typography level="p" fontSize="1em" noWrap  >
                                Jesus
                            </Typography>
                            <Box sx={{display:{xs:"table-cell", md:"none"}}}>
                                Mexico
                            </Box>
                            </StyledTableCell>
                        <StyledTableCell sx={{display:{xs:"none", md:"table-cell"}}}>Mexico</StyledTableCell>
                        <StyledTableCell sx={{display:{xs:"none", md:"table-cell"}}}>Culiacán</StyledTableCell>
                        <StyledTableCell sx={{display:{xs:"none", md:"table-cell"}}}>Sinaloa</StyledTableCell>
                        <StyledTableCell sx={{fontSize:{xs:"0.9em", md:"1em"}}}>
                            <Rating value={5} readOnly />
                            <Box sx={{display:{xs:"table-cell", md:"none"}}}>Culiacán, Sinaloa</Box>
                            </StyledTableCell>
                    </StyledTableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
    )
}
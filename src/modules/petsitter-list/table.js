import { StyledTableCell, StyledTableRow } from "@/component/petsitter-list";
import { Avatar, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

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
                        <StyledTableCell>Alfredo</StyledTableCell>
                        <StyledTableCell>Mexico</StyledTableCell>
                        <StyledTableCell>Culiacan</StyledTableCell>
                        <StyledTableCell>Sinaloa</StyledTableCell>
                        <StyledTableCell><Rating value={5} readOnly /></StyledTableCell>
                    </StyledTableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
    )
}
import { TextField, Box, TableRow, Container, TableCell } from "@mui/material";
import styled from "styled-components";


export const MainContent = styled.main`
    height: 100%;
    display: flex;`

export const InputSearch = styled(TextField)`
    width: 16em;
    background: white;`

export const SearchListContainer = styled(Box)`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 9em;`

export const StyledTableRow = styled(TableRow)`
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.15);
    border-radius: 0.5em;
    background: white;
    `

export const StyledTableCell = styled(TableCell)`
    border: 0px`


export const MostRankedContainer = styled(Box)`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
    
export const MostRankedCardsContainer = styled(Container)`
    background: white;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.15);
    border-radius: 0.5em;
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;`


export const RankedCardContainer = styled(Box)`
    width: 90%;
    height: 35%;
    background: #0E4B5B;
    border-radius: 1em;
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;`

export const RankedCardProfile = styled(Box)`
    display: flex;
    column-gap: 1.5em;
    margin-bottom: 1em;
   `

export const RankedCardText = styled(Box)`
    width: 80%;
    height: 30%;
    background: white;
    border-raidus: 1em;
    padding: 1em;
    border-radius: 1.4em;`



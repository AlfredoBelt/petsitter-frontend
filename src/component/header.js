import { AppBar, Container } from "@mui/material";
import styled from "styled-components";

export const Header = styled(AppBar)`
    width: 100%;
    min-height: 20%;
    position: sticky;
    background: #0E4B5B;

`

export const HeaderContainer = styled(Container)`
    display: flex;
    position: relative; 
    left: 10%;
    padding: 0px;
    width: 40%;
    margin: 0px;
`

export const MenuContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 0px;
    column-gap: 2em;
`
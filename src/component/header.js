import { AppBar, Container } from "@mui/material";
import styled from "styled-components";

export const Header = styled(AppBar)`
    width: 100%;
    height: auto;
    position: sticky;
    background: #0E4B5B;

`

export const HeaderContainer = styled(Container)`
    display: flex;
    padding: 0px;
    width: 40%;
    margin: 0px 0px 0px 50%;
`

export const MenuContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 0px;
    column-gap: 2em;
`
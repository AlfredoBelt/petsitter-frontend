import { Box, Button, List, ListItemButton } from "@mui/material";
import styled from "styled-components";

export const LogoutButton = styled(Button)`
    color: #0E4B5B;
    `

export const NavBar = styled(List)`
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    width: 100%;
    `

export const NavButtonList = styled(ListItemButton)`
    min-width: 1em;
    color: #0E4B5B;`

export const UserContainer = styled(Box)`
    background: rgba(239, 166, 11, 0.07)`
import { InputSearch, MainContent, MostRankedCardsContainer, MostRankedContainer, SearchListContainer } from "@/component/petsitter-list";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import { poppins } from "@/fonts/fonts";
import TableList from "./table";
import RankedCard from "./rankedcard";

export default function Petsitters(){
    return(
        <MainContent>
            <SearchListContainer>
                <Box sx={{display: "flex", columnGap: "2em", position: "absolute", top: "7em"}}>
                    <InputSearch type="text" variant="outlined" placeholder="Buscar cuidador" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}/>
                    <InputSearch type="text" variant="outlined" placeholder="Ubicación, Ciudad, Estado" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PlaceIcon />
                            </InputAdornment>
                        )
                    }}/>
                </Box> 
                <Box sx={{width: "80%"}}>
                    <h3 className={poppins.className}>Cuidador</h3> 
                    <TableList />
                </Box>
            </SearchListContainer>
            <MostRankedContainer>
                <MostRankedCardsContainer>
                <h3>Los mejores valorados</h3>
                    <RankedCard photoUrl="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" name="Juan Alvarez" age="25" text="Juan cuido muy bien a mi mascota, lo recomiendo mucho" rank="5 Estrellas"/>
                </MostRankedCardsContainer>
            </MostRankedContainer>
        </MainContent>
    )
}
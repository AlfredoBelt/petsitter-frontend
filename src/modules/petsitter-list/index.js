import { InputSearch, MainContent, MostRankedCardsContainer, MostRankedContainer, SearchListContainer } from "@/component/petsitter-list";
import { Box, CardContent, Grid, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import { poppins } from "@/fonts/fonts";
import TableList from "./table";
import RankedCard from "./rankedcard";

export default function Petsitters(){

    const cuidadores = [
        { id: 1, nombre: 'Juan', ubicacion: 'Calle 123', ciudad: 'Ciudad de México', estado: 'CDMX', valoraciones: 4 },
        { id: 2, nombre: 'María', ubicacion: 'Avenida 456', ciudad: 'Guadalajara', estado: 'Jalisco', valoraciones: 5 },
      ];
    return(
        // <MainContent>
        //     <SearchListContainer>
        //         <Box sx={{display: "flex", columnGap: "2em", position: "absolute", top: "7em"}}>
        //             <InputSearch type="text" variant="outlined" placeholder="Buscar cuidador" InputProps={{
        //                 startAdornment: (
        //                     <InputAdornment position="start">
        //                         <SearchIcon />
        //                     </InputAdornment>
        //                 )
        //             }}/>
        //             <InputSearch type="text" variant="outlined" placeholder="Ubicación, Ciudad, Estado" InputProps={{
        //                 startAdornment: (
        //                     <InputAdornment position="start">
        //                         <PlaceIcon />
        //                     </InputAdornment>
        //                 )
        //             }}/>
        //         </Box> 
        //         <Box sx={{width: "80%"}}>
        //             <h3 className={poppins.className}>Cuidador</h3> 
        //             <TableList />
        //         </Box>
        //     </SearchListContainer>
        //     <MostRankedContainer>
        //         <MostRankedCardsContainer>
        //         <h3>Los mejores valorados</h3>
        //             <RankedCard photoUrl="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" name="Juan Alvarez" age="25" text="Juan cuido muy bien a mi mascota, lo recomiendo mucho" rank="5 Estrellas"/>
        //         </MostRankedCardsContainer>
        //     </MostRankedContainer>
        // </MainContent>
        <Grid container padding={2} spacing={2} sx={{flexDirection:{xs:"column-reverse", md:"row"}}}>
            <Grid item xs={12} md={9} >
            <Box sx={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
                <Box sx={{display: {xs:"none",md:"flex"}, columnGap: "2em", top: "7em"}}>
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
                <Box >
                    <h3 className={poppins.className}>Cuidador</h3> 
                    <TableList />
                </Box>
            </Box>
             
            </Grid>
            <Grid item xs={12} md={3} sx={{display:{xs:"flex", md:"block"}, justifyContent:"center", alignItems:"center"}}>
                
                <Box sx={{ display:"flex", alignItems:{xs:"start",md:"center"}, flexDirection:"column", background:{xs:"transparent", md:"white"}, height:"auto", width:"100%", borderRadius:"1em", boxShadow:{xs:"none",md:"0px 0px 5px 1px rgba(0,0,0,0.15)"}}}>
                    <h3>Los mejores valorados</h3>
                    <Box sx={{display:{xs:"flex"}, flexDirection:{xs:"row",md:"column"}, overflow:"auto", width:"90%", height:{xs:"auto",md:"80vh"}, alignItems:"center", rowGap:{md:"2em"}, columnGap:{xs:"2em"}}}>
                        <RankedCard photoUrl="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" name="Juan Alvarez" age="25" text="Juan cuido muy bien a mi mascota, lo recomiendo mucho" rank="5 Estrellas"/>
                        <RankedCard photoUrl="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" name="Juan Alvarez" age="25" text="Juan cuido muy bien a mi mascota, lo recomiendo mucho" rank="5 Estrellas"/>
                        <RankedCard photoUrl="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" name="Juan Alvarez" age="25" text="Juan cuido muy bien a mi mascota, lo recomiendo mucho" rank="5 Estrellas"/>
                        <RankedCard photoUrl="https://www.vivemasvidas.com/uploads/selfie-hombre-y-perro.jpg" name="Juan Alvarez" age="25" text="Juan cuido muy bien a mi mascota, lo recomiendo mucho" rank="5 Estrellas"/>
                       
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
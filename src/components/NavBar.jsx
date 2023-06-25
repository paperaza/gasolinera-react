import { Image, Box, Heading } from "@chakra-ui/react";
import { redirect, useNavigate } from "react-router-dom";
import ImageShop from"../assets/img/shop.png"

export default function NavBar() {
    const navigate = useNavigate();
    const redirect = () =>{
        navigate("/");
    }

    return(
        <Box
            display="block"
            alignItems="center"
            justifyContent="space-evenly"
            borderBottom="1px solid #ddd"
        >
            <Image 
                src = {ImageShop}
                alt = "Logotipo"
                width={75} 
                margin="0 auto"
                cursor="pointer"
                onClick={redirect}
            />

            <Heading
                as="h1"
                size="sm"
                isTruncated
                textTransform="uppercase"
                textAlign="center"
                color="#ff6b6b"
                fontWeight="900"
                paddingBottom="5"
            >
                Gasolinera  
            </Heading>
        </Box>
    );
}

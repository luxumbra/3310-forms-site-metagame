import React from "react";            
import {            
 Box,           
 SimpleGrid,           
} from "@chakra-ui/react";            
      function ContentText3() {      
       return (     
        <Box>    
        <SimpleGrid    
bg="gray.500"    
columns={{ sm: 1, md: 2, lg: 3 }}    
spacing="8"    
p="10"    
textAlign="center"    
rounded="lg"    
color="gray.400"    
>
        <Box boxShadow="xs" p="6" rounded="md" bg="white">    
MetaGameBox1   
        </Box>    
        <Box boxShadow="sm" p="6" rounded="md" bg="white">    
MetaGameBox2   
        </Box>    
        <Box boxShadow="base" p="6" rounded="md" bg="white">    
MetaGameBox3   
        </Box>    
        <Box boxShadow="md" p="6" rounded="md" bg="white">    
MetaGameBox4   
        </Box>    
        <Box boxShadow="lg" p="6" rounded="md" bg="white">    
MetaGameBox5   
        </Box>    
        <Box boxShadow="xl" p="6" rounded="md" bg="white">    
MetaGameBox6   
        </Box>    
        <Box boxShadow="2xl" p="6" rounded="md" bg="white">    
MetaGameBox7   
        </Box>    
        <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">    
MetaGameBox8   
        </Box>    
        <Box boxShadow="outline" p="6" rounded="md" bg="white">    
MetaGameBox9   
        </Box>    
        <Box boxShadow="inner" p="6" rounded="md" bg="white">    
MetaGameBox10   
        </Box>    
        </SimpleGrid>    
        </Box>    
);
}
export default ContentText3;              

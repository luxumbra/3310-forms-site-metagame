import React from "react";            
import { Container } from "@chakra-ui/react";            
import {            
 Box,           
 Text,           
 Square,           
 Flex,           
 Center,           
 Spacer,           
 HStack,           
 Tooltip,           
 Button,           
} from "@chakra-ui/react";            
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";            
      function ContentText1() {      
       return (     
        <HStack>    
        <HStack>    
<br/>               
<br/>               
<hr/>               
        <Tooltip label=" MetaGame Phone number " fontSize="md">  
        <PhoneIcon />    
        </Tooltip>    
        <Tooltip hasArrow label=" Search places " bg="gray.300" color="black">  
        <SearchIcon />    
        </Tooltip>    
        <Tooltip hasArrow label=" Search places " bg="red.600">  
        <Button    
border="2px"    
borderColor="green.500"    
backgroundColor="orange.500"    
>
Button   
        </Button>    
        </Tooltip>    
        </HStack>    
<br/>               
<br/>               
        <div>    
        <Tooltip    
label=" Click the MetaGame logo to zoom out of the donut. "  
aria-label=" MetaGame Hint and Tip "  
>
NavTip   
        </Tooltip>    
        </div>    
<br/>               
<hr/>               
<br/>               
        <Container>    
        <Flex color="white">    
        <Center w="100px" bg="green.500">    
<Text> MetaGameBox1 </Text>  
        </Center>    
        <Square bg="blue.500" size="150px">    
<Text> MetaGameBox2 </Text>  
        </Square>    
        <Box flex="6" bg="tomato">    
<Text> MetaGameBox3 </Text>  
        </Box>    
        </Flex>    
        </Container>    
        <Container>    
        <Flex>    
        <Box p="4" bg="red.400">    
MetaGameBox1   
        </Box>    
        <Spacer/>    
        <Box p="4" bg="green.400">    
MetaGameBox2   
        </Box>    
        </Flex>    
        </Container>    
        </HStack>    
);
}
export default ContentText1;              

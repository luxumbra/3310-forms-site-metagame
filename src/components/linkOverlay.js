import React from "react";            
import {            
 Box,           
 Image,           
 Link,           
  LinkBox,          
 Heading,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Text,           
} from "@chakra-ui/react";            
      function LinkOverlay() {      
       return (     
        <Box p={4} display={{ md: "flex" }}>    
        <Box flexShrink={0}>    
<Image    
borderRadius="lg"    
width={{ md: 40 }}    
src=" https:bafybeialwa63jqrxffkz2lha3bflwdumqoctqdimezknsfrm5jdgyeqjm4.ipfs.infura-ipfs.io "  
alt=" MetaGame "  
/>
        </Box>    
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>    
<Text    
fontWeight="bold"    
textTransform="uppercase"    
fontSize="sm"    
letterSpacing="wide"    
color="yellow.600"    
>
LinkOverlay Click the text to edit   
        </Text>    
        <Editable defaultValue=" Type your message here:">   
        <EditablePreview />    
        <EditableInput />    
        </Editable>    
<Link    
mt={1}    
display="block"    
fontSize="lg"    
lineHeight="normal"    
fontWeight="semibold"    
href=" # "  
>
Finding Players and Patrons for MetaGame   
        </Link>    
<br/>               
<LinkBox    
as="article"    
maxW="sm"    
p="5"    
borderWidth="1px"    
rounded="md"    
>
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">    
00 days ago   
        </Box>    
        <Heading size="md" my="2">    
<LinkOverlay href=" # ">  
MetaGame and MetaGame Services in the Metaverse   
        </LinkOverlay>    
        </Heading>    
<Text mb="3">    
MetaGame provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </Text>    
        <Box as="a" color="teal.400" href=" # " fontWeight="bold">  
MetaGame Inner Link   
        </Box>    
        </LinkBox>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are a few ways MetaGame participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default LinkOverlay;              

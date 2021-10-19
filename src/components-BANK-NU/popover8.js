import React from "react";            
import {            
 Box,           
 Image,           
 Text,           
 Link,           
 Editable,           
 EditableInput,           
 EditablePreview,           
 Popover,           
 PopoverTrigger,           
 PopoverContent,           
 PopoverArrow,           
 PopoverCloseButton,           
 Button,           
 PopoverHeader,           
 PopoverBody,           
} from "@chakra-ui/react";            
      function Popover8() {      
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
MenuLayout5 Click to edit   
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
        <Popover placement="top-start">    
        <PopoverTrigger>    
        <Button colorScheme="blue"> Click me </Button>  
        </PopoverTrigger>    
        <PopoverContent color="blue">    
        <PopoverHeader fontWeight="semibold">    
Player Note   
        </PopoverHeader>    
        <PopoverArrow />    
        <PopoverCloseButton />    
        <PopoverBody>    
MetaGame provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </PopoverBody>    
        </PopoverContent>    
        </Popover>    
<br/>               
<Text mt={2} color="gray.500">    
Getting a new game off the ground is hard work. Here are some ways MetaGame participants are found.   
        </Text>    
        </Box>    
        </Box>    
);
}
export default Popover8;              

import {            
  Flex,           
  Circle,           
  Box,           
  Image,      
  Center,   
  HStack,  
  Badge,           
  useColorModeValue,           
  Icon,           
  chakra,           
  Tooltip,           
 } from "@chakra-ui/react";            
 import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";            
 import { FiShoppingCart } from "react-icons/fi";            
     const data = {        
isNew: true,    
imageUrl:" https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",   
      name: "    MetaGame Classic ",  
      price: 1.5,       
      rating: 4,       
      numReviews: 34,       
 };
 interface RatingProps {            
      rating: number;       
      numReviews: number;       
 }
       function Rating({ rating, numReviews }: RatingProps) {      
        return (     
         <Box d="flex" alignItems="center">    
{Array(5)    
.fill("")    
.map((_, i) => {    
    const roundedRating = Math.round(rating * 2) / 2;         
if (roundedRating - i >= 1) {    
        return (     
         <BsStarFill key={i} style={{ marginLeft: "1" }} color="blue" />    
 );
 }
if (roundedRating - i === 0.5) {    
return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;    
 }
return <BsStar color="blue" key={i} style={{ marginLeft: "1" }} />;    
 })}
         <Box as="span" ml="2" color="gray.600" fontSize="sm">    
{numReviews} review{numReviews > 1 && "s"}    
         </Box>    
         </Box>    
 );
 }


       function CardService2() {      
        return (     

<Center>       
         <Flex p={50} w="full" alignItems="center" justifyContent="center">    
        <HStack mr="2" ml="2" >         
         <Box    
bg={useColorModeValue("white", "gray.800")}    
maxW="sm"    
borderWidth="1px"    
rounded="lg"    
shadow="lg"    
position="relative"    
 >
{data.isNew && (    
         <Circle    
size="10px"    
position="absolute"    
top={2}    
right={2}    
bg="red.200"    
 />
 )}
<Image    
src={data.imageURL}    
alt={` Image of ${data.name} `}  
roundedTop="lg"    
 />
         <Box p="6">    
         <Box d="flex" alignItems="baseline">    
{data.isNew && (    
         <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">    
New Look   
         </Badge>    
 )}
         </Box>    
         <Flex mt="1" justifyContent="space-between" alignContent="center">    
         <Box    
fontSize="2xl"    
fontWeight="semibold"    
color="red"    
as="h4"    
lineHeight="tight"    
isTruncated    
 >
{data.name}    
         </Box>    
         <Tooltip    
label=" Add to Cart "  
bg="white"    
placement={"top"}    
color={"gray.800"}    
fontSize={"1.2em"}    
 >
         <chakra.a href={" # "} display={"flex"}>  
<Icon    
as={FiShoppingCart}    
h={7}    
w={7}    
color="red"    
alignSelf={"center"}    
 />
         </chakra.a>    
         </Tooltip>    
         </Flex>    
         <Flex justifyContent="space-between" alignContent="center">    
         <Rating rating={data.rating} numReviews={data.numReviews} />    
         <Box 
         textTransform={"uppercase"}    
         fontSize="xl" color={useColorModeValue("gray.800", "white")}>    
         <Box as="span" color={"gray.600"} fontSize="lg" >    
         </Box>    
{data.price.toFixed(1)}    
 {' '}Matic        </Box>    
         </Flex>    
         </Box>    
         </Box>    

         <Box    
bg={useColorModeValue("white", "gray.800")}    
maxW="sm"    
borderWidth="1px"    
rounded="lg"    
shadow="lg"    
position="relative"    
 >
{data.isNew && (    
         <Circle    
size="10px"    
position="absolute"    
top={2}    
right={2}    
bg="red.200"    
 />
 )}
<Image    
src={data.imageURL}    
alt={` Image of ${data.name} `}  
roundedTop="lg"    
 />
         <Box p="6">    
         <Box d="flex" alignItems="baseline">    
{data.isNew && (    
         <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">    
New Look   
         </Badge>    
 )}
         </Box>    
         <Flex mt="1" justifyContent="space-between" alignContent="center">    
         <Box    
fontSize="2xl"    
fontWeight="semibold"    
color="red"    
as="h4"    
lineHeight="tight"    
isTruncated    
 >
{data.name}    
         </Box>    
         <Tooltip    
label=" Add to Cart "  
bg="white"    
placement={"top"}    
color={"gray.800"}    
fontSize={"1.2em"}    
 >
         <chakra.a href={" # "} display={"flex"}>  
<Icon    
as={FiShoppingCart}    
h={7}    
w={7}    
color="red"    
alignSelf={"center"}    
 />
         </chakra.a>    
         </Tooltip>    
         </Flex>    
         <Flex justifyContent="space-between" alignContent="center">    
         <Rating rating={data.rating} numReviews={data.numReviews} />    
         <Box 
         textTransform={"uppercase"}    
         fontSize="xl" color={useColorModeValue("gray.800", "white")}>    
         <Box as="span" color={"gray.600"} fontSize="lg" >    
         </Box>    
{data.price.toFixed(1)}    
 {' '}Matic        </Box>    
         </Flex>    
         </Box>    
         </Box>    

         <Box    
bg={useColorModeValue("white", "gray.800")}    
maxW="sm"    
borderWidth="1px"    
rounded="lg"    
shadow="lg"    
position="relative"    
 >
{data.isNew && (    
         <Circle    
size="10px"    
position="absolute"    
top={2}    
right={2}    
bg="red.200"    
 />
 )}
<Image    
src={data.imageURL}    
alt={` Image of ${data.name} `}  
roundedTop="lg"    
 />
         <Box p="6">    
         <Box d="flex" alignItems="baseline">    
{data.isNew && (    
         <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">    
New Look   
         </Badge>    
 )}
         </Box>    
         <Flex mt="1" justifyContent="space-between" alignContent="center">    
         <Box    
fontSize="2xl"    
fontWeight="semibold"    
color="red"    
as="h4"    
lineHeight="tight"    
isTruncated    
 >
{data.name}    
         </Box>    
         <Tooltip    
label=" Add to Cart "  
bg="white"    
placement={"top"}    
color={"gray.800"}    
fontSize={"1.2em"}    
 >
         <chakra.a href={" # "} display={"flex"}>  
<Icon    
as={FiShoppingCart}    
h={7}    
w={7}    
color="red"    
alignSelf={"center"}    
 />
         </chakra.a>    
         </Tooltip>    
         </Flex>    
         <Flex justifyContent="space-between" alignContent="center">    
         <Rating rating={data.rating} numReviews={data.numReviews} />    
         <Box 
         textTransform={"uppercase"}    
         fontSize="xl" color={useColorModeValue("gray.800", "white")}>    
         <Box as="span" color={"gray.600"} fontSize="lg" >    
         </Box>    
{data.price.toFixed(1)}    
 {' '}Matic        </Box>    
         </Flex>    
         </Box>    
         </Box>    

         <Box    
bg={useColorModeValue("white", "gray.800")}    
maxW="sm"    
borderWidth="1px"    
rounded="lg"    
shadow="lg"    
position="relative"    
 >
{data.isNew && (    
         <Circle    
size="10px"    
position="absolute"    
top={2}    
right={2}    
bg="red.200"    
 />
 )}
<Image    
src={data.imageURL}    
alt={` Image of ${data.name} `}  
roundedTop="lg"    
 />
         <Box p="6">    
         <Box d="flex" alignItems="baseline">    
{data.isNew && (    
         <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">    
New Look   
         </Badge>    
 )}
         </Box>    
         <Flex mt="1" justifyContent="space-between" alignContent="center">    
         <Box    
fontSize="2xl"    
fontWeight="semibold"    
color="red"    
as="h4"    
lineHeight="tight"    
isTruncated    
 >
{data.name}    
         </Box>    
         <Tooltip    
label=" Add to Cart "  
bg="white"    
placement={"top"}    
color={"gray.800"}    
fontSize={"1.2em"}    
 >
         <chakra.a href={" # "} display={"flex"}>  
<Icon    
as={FiShoppingCart}    
h={7}    
w={7}    
color="red"    
alignSelf={"center"}    
 />
         </chakra.a>    
         </Tooltip>    
         </Flex>    
         <Flex justifyContent="space-between" alignContent="center">    
         <Rating rating={data.rating} numReviews={data.numReviews} />    
         <Box 
         textTransform={"uppercase"}    
         fontSize="xl" color={useColorModeValue("gray.800", "white")}>    
         <Box as="span" color={"gray.600"} fontSize="lg" >    
         </Box>    
{data.price.toFixed(1)}    
 {' '}Matic        </Box>    
         </Flex>    
         </Box>    
         </Box>    
   


         </HStack>


         </Flex>    


         </Center>

 );
 }
export default CardService2;              

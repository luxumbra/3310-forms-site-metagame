import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
function Pricing1() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          MetaGame Service Plans that fit a full-stack developer needs.
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Start with free trial. No credit card needed. Connect your address
          now.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              MetaGame Initiatives
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="900">
                100
              </Text>
              <Text fontSize="3xl" fontWeight="600">
                MATIC
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /session
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" color="blue" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited Blockchain Interactions
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                MetaGame provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                MetaGame Pricing Matrix
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="blue" variant="outline">
                Interact with MetaGame Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("orange", "orange.700")}
                px={3}
                py={1}
                color={useColorModeValue("white", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth Strategies
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  MATIC
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  1,000
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /course
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" color="blue" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Unlimited Blockchain Interactions
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  MetaGame provides value and service supporting the fourth
                  industrial revolution. Web3 is a set of technologies that
                  publicly interoperate through blockchain and node based
                  computing systems.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  MetaGame Pricing Matrix
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  MetaGame Pricing Matrix
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  MetaGame Pricing Matrix
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="blue">
                  Interact with MetaGame Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Web3 Developer Maestro
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="900">
                5,000
              </Text>
              <Text fontSize="3xl" fontWeight="600">
                MATIC
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /season
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" color="blue" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited Blockchain Interactions
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                MetaGame provides value and service supporting the fourth
                industrial revolution. Web3 is a set of technologies that
                publicly interoperate through blockchain and node based
                computing systems.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                MetaGame Pricing Matrix
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="blue" variant="outline">
                Interact with MetaGame Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
export default Pricing1;

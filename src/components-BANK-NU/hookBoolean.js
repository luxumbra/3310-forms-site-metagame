import React from "react";
import {
  useBreakpointValue,
  Button,
  Box,
  Image,
  Text,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
function HookBoolean() {
  const [flag, setFlag] = useBoolean();
  const variant = useBreakpointValue({ base: "outline", lg: "solid" });
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src=" https://bafkreibazoeptlr4c5hrgdjzepthjm3iscwe56ojxcxrkorwufjqgfrpmu.ipfs.infura-ipfs.io
 "
          alt=" MetaGame "
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="yellow"
        >
          HookBoolean Click to edit
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
          Finding Members and Patrons for MetaGame
        </Link>
        <br />
        <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
          {flag
            ? "The flag is ON!"
            : "Hover here or click the button below to turn ON"}
        </div>
        <br />
        <Text color="cyan"> Boolean state: {flag.toString()} </Text>
        <Button color="red" onClick={setFlag.toggle}>
          Click to Toggle
        </Button>
        <br />
        <br />
        <VStack align="flex-start">
          <Text> Resize your window to see the button variant change </Text>
          <Button colorScheme="teal" variant={variant}>
            Variant Changing
          </Button>
        </VStack>
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are
          some ways MetaGame members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default HookBoolean;

import React from "react";
import {
  useDisclosure,
  Input,
  Button,
  Box,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
function Drawer4() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          MetaGame Membership Account Setup
        </Link>
        <br />
        <br />
        <Button onClick={onOpen} variant="outline" color="cyan">
          {" "}
          Create an Account Now{" "}
        </Button>
        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> Create your account </DrawerHeader>
            <DrawerBody>
              <form
                id="my-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                }}
              >
                <Input name="nickname" placeholder="Type here..." />
              </form>
            </DrawerBody>
            <DrawerFooter>
              <Button type="submit" form="my-form">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <br />
        <br />
        <Text mt={2} color="gray.500">
          Getting a new organization off the ground takes patience. Here are a
          few ways ways MetaGame members are found.
        </Text>
      </Box>
    </Box>
  );
}
export default Drawer4;

import React from "react";
import {
  Box,
  Image,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
function Links1() {
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
          Drawer5 Click the text to edit
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
        <br />
        <Box>
          <HStack>
            <Link href=" https://metagame.freeweb3.com " isExternal>
              MetaGame <ExternalLinkIcon mx="2px" />
            </Link>
            <Text>
              Did you know that{" "}
              <Link href={" # "} color="teal.500">
                MetaGame Inline Reminder
              </Link>
            </Text>
          </HStack>
          <br />
          <Link href=" https://metagame.freeweb3.com " isExternal>
            MetaGame <ExternalLinkIcon mx="2px" />
          </Link>
          <Text>
            Did you know that{" "}
            <Link href={" # "} color="teal.500">
              MetaGame Inline Reminder
            </Link>
          </Text>
          <Link href=" https://metagame.freeweb3.com " isExternal>
            MetaGame <ExternalLinkIcon mx="2px" />
          </Link>
          <br />
          <Text>
            Did you know that{" "}
            <Link href={" # "} color="teal.500">
              MetaGame Inline Reminder
            </Link>
          </Text>
        </Box>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new game off the ground is hard work. Here are a few ways
          MetaGame participants are found.
        </Text>
      </Box>
    </Box>
  );
}
export default Links1;

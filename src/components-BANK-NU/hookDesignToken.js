import React from "react";
import {
  useToken,
  Box,
  } from "@chakra-ui/react";
function HookDesignToken() {
  const [red100, blue200] = useToken("colors", ["pink.500", "purple.500"]);
  return (
    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        {/* <Image    
borderRadius="lg"    
width={{ md: 40 }}    
src=" https://bafkreibazoeptlr4c5hrgdjzepthjm3iscwe56ojxcxrkorwufjqgfrpmu.ipfs.infura-ipfs.io
 "  
alt=" MetaGame "  
/> */}
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Box p={4} boxShadow={`inset 0 4px 0 ${red100}, 0 0 8px ${blue200}`}>
        MetaGame provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.
        </Box>

      </Box>
    </Box>
  );
}
export default HookDesignToken;

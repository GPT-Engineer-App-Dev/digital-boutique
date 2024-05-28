import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4} mt={10}>
      <Flex justify="space-between" align="center" px={4}>
        <Text>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</Text>
        <Flex>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bg="gray.100" py={20} textAlign="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Welcome to E-Shop
        </Heading>
        <Text fontSize="lg">Your one-stop shop for all electronics</Text>
        <Button colorScheme="blue" size="lg">
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Hero;
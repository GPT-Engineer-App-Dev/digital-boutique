import { Box, Image, Text, VStack } from "@chakra-ui/react";

const ProductCard = ({ image, name, description, price }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={image} alt={name} />
      <VStack spacing={2} align="start" mt={4}>
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Text>{description}</Text>
        <Text color="blue.500" fontSize="lg">
          ${price}
        </Text>
      </VStack>
    </Box>
  );
};

export default ProductCard;
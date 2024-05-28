import { Container, SimpleGrid, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const sampleProducts = [
  {
    image: "https://via.placeholder.com/150",
    name: "Smartphone",
    description: "Latest model with all the new features.",
    price: 699,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    price: 999,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 199,
  },
];

const Index = ({ searchQuery, setSearchQuery }) => {
  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Hero />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
import { Box, Container, Flex, Heading, HStack, VStack, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaChartLine, FaGlobe, FaCommentDots, FaEllipsisH } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="background">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            Financial Times
          </Link>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/" display="flex" alignItems="center">
              <FaHome />
              <Text ml={2}>Home</Text>
            </Link>
            <Link as={RouterLink} to="/markets" display="flex" alignItems="center">
              <FaChartLine />
              <Text ml={2}>Markets</Text>
            </Link>
            <Link as={RouterLink} to="/world" display="flex" alignItems="center">
              <FaGlobe />
              <Text ml={2}>World</Text>
            </Link>
            <Link as={RouterLink} to="/opinion" display="flex" alignItems="center">
              <FaCommentDots />
              <Text ml={2}>Opinion</Text>
            </Link>
            <Link as={RouterLink} to="/more" display="flex" alignItems="center">
              <FaEllipsisH />
              <Text ml={2}>More</Text>
            </Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Top News Section */}
        <Box flex="3" p={4} bg="background">
          <Heading as="h2" size="lg" mb={4}>Top News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" />
              <Heading as="h3" size="md" mt={2}>News Headline 1</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" />
              <Heading as="h3" size="md" mt={2}>News Headline 2</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sidebar for Market Data */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4}>
            <Box>
              <Text fontWeight="bold">Stock A</Text>
              <Text>Price: $100</Text>
              <Text>Change: +1.5%</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Stock B</Text>
              <Text>Price: $200</Text>
              <Text>Change: -0.5%</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Index X</Text>
              <Text>Value: 3000</Text>
              <Text>Change: +0.8%</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
import React from "react";
import { Box, Flex, Text, Link, HStack, Image, Icon, Tooltip } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiX, FiMail } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, label: "Facebook" },
    { icon: FiInstagram, label: "Instagram" },
    { icon: FiX, label: "X" },
    { icon: FiMail, label: "Email" },
  ];

  return (
    <Box as="footer" bg="white" color="black" textAlign="center" pt={{ base: 10, md: 20 }} pb={0}>
      
      {/* Logo */}
      <HStack justify="center" spacing={2} mb={6}>
        <Image src="src/assets/logo.png" maxH={{ base: "40px", md: "60px" }} objectFit="contain" />
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold"><Text as="span" color="goldenrod">Xtra</Text>Perfume</Text>
      </HStack>

      {/* Navigation */}
      <HStack justify="center" spacing={{ base: 6, md: 16 }} pt={6} mb={8} fontSize={{ base: "md", md: "lg" }} fontWeight="medium" flexWrap="wrap">
        <Link _hover={{ color: "goldenrod" }}>Perfumes</Link>
        <Link _hover={{ color: "goldenrod" }}>About Us</Link>
        <Link _hover={{ color: "goldenrod" }}>Stores</Link>
        <Link _hover={{ color: "goldenrod" }}>Brands</Link>
      </HStack>

      {/* Divider */}
      <Box borderBottom="1px solid" borderColor="gray.200" w={{ base: "90%", md: "80%" }} mx="auto" mb={8}></Box>

      {/* Payment / Trust Badges */}
      <HStack justify="center" spacing={6} mb={{ base: 16, md: 32 }} flexWrap="wrap">
        <Image src="src/assets/free.jpeg" alt="Free Shipping" h={{ base: "8", md: "10" }} maxW="120px" objectFit="contain" />
        <Image src="src/assets/payments.png.jpeg" alt="Payment Options" h={{ base: "8", md: "10" }} maxW="120px" objectFit="contain" />
        <Image src="src/assets/secure.png.jpeg" alt="Secure" h={{ base: "8", md: "10" }} maxW="120px" objectFit="contain" />
      </HStack>

      {/* Bottom Black Section */}
      <Box bg="black" color="gray.300" py={6}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" px={{ base: 4, md: 20 }}>
          <Text fontSize={{ base: "xs", md: "sm" }} mb={{ base: 3, md: 0 }}>© 2025 XTRA WordPress Theme.</Text>
          
          {/* Social Icons with Tooltip */}
          <HStack spacing={6} mb={{ base: 3, md: 0 }}>
            {socialLinks.map((s, i) => (
              <Tooltip key={i} label={s.label} bg="goldenrod" color="black" placement="top" hasArrow>
                <Link _hover={{ bg: "goldenrod", color: "black", borderRadius: "50%", p: 2 }}>
                  <Icon as={s.icon} boxSize={{ base: 5, md: 6 }} />
                </Link>
              </Tooltip>
            ))}
          </HStack>

          <Text fontSize={{ base: "xs", md: "sm" }}>info@xtraperfume.com</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;

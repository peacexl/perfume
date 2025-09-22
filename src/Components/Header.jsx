import React, { useState } from "react";
import { Box, Flex, HStack, Input, IconButton, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Category", path: "/category" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <Box
      as="header"
      px={6}
      py={4}
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      boxShadow="md"
    >
      <Flex align="center" minH="80px">
        {/* Logo */}
        <HStack spacing={3} mr={6} flex="0 0 auto">
          <Box boxSize="60px" minW="60px">
            <img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} />
          </Box>
          <Text fontSize="2xl" fontWeight="bold" color="goldenrod" letterSpacing="wide">
            Xtra
            <Text as="span" color="black" fontSize="2xl">
              Perfume
            </Text>
          </Text>
        </HStack>

        {/* Navigation */}
        <Flex flex="1" justify="center">
          <HStack spacing={8} alignItems="center">
            {navItems.map((item) => {
              if (item.label === "Shop") {
                return (
                  <Box
                    key={item.path}
                    position="relative"
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      style={({ isActive }) => ({
                        color: isActive ? "goldenrod" : "black",
                        fontWeight: isActive ? 700 : 600,
                        fontSize: "xl",
                        textDecoration: "none",
                      })}
                    >
                      {item.label}
                    </NavLink>

                    {isShopOpen && (
                      <Box
                        position="absolute"
                        top="100%"
                        left="0"
                        bg="white"
                        border="1px solid #ddd"
                        borderRadius="md"
                        boxShadow="lg"
                        mt={2}
                        p={2}
                        minW="200px"
                      >
                        <NavLink to="/shop/all" style={{ display: "block", padding: "8px" }}>
                          All Products
                        </NavLink>
                        <NavLink to="/cart" style={{ display: "block", padding: "8px" }}>
                          Cart
                        </NavLink>
                        <NavLink to="/checkout" style={{ display: "block", padding: "8px" }}>
                          Checkout
                        </NavLink>
                        <NavLink to="/account" style={{ display: "block", padding: "8px" }}>
                          My Account
                        </NavLink>
                      </Box>
                    )}
                  </Box>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={({ isActive }) => ({
                    color: isActive ? "goldenrod" : "black",
                    fontWeight: isActive ? 700 : 600,
                    fontSize: "xl",
                    textDecoration: "none",
                  })}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </HStack>
        </Flex>

        {/* Right icons */}
        <HStack spacing={4} flex="0 0 auto">
          <Box display={{ base: "none", md: "block" }}>
            <Input
              placeholder="Search"
              size="md"
              width="200px"
              borderRadius="full"
              bg="whiteAlpha.800"
              fontSize="md"
              _placeholder={{ color: "gray.500" }}
              py={2}
              px={4}
            />
          </Box>
          <IconButton
            aria-label="Wishlist"
            icon={<FiHeart size={22} />}
            size="lg"
            variant="ghost"
            color="black"
            _hover={{ color: "goldenrod", bg: "whiteAlpha.700" }}
          />
          <IconButton
            aria-label="Account"
            icon={<FiUser size={22} />}
            size="lg"
            variant="ghost"
            color="black"
            _hover={{ color: "goldenrod", bg: "whiteAlpha.700" }}
          />
          <IconButton
            aria-label="Cart"
            icon={<FiShoppingCart size={22} />}
            size="lg"
            variant="ghost"
            color="black"
            _hover={{ color: "goldenrod", bg: "whiteAlpha.700" }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;

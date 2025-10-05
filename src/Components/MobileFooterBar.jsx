import React from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiArrowUp } from "react-icons/fi";

const MobileFooterBar = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      display={{ base: "block", md: "none" }}
      position="fixed"
      bottom="0"
      left="0"
      w="100%"
      bg="black"
      color="white"
      zIndex="9999"
      borderTop="1px solid goldenrod"
      style={{
        padding: "10px 0",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.4)",
      }}
    >
      <Flex justify="space-around" align="center">
        {/* Shopping Cart */}
        <NavLink to="/cart" style={{ textDecoration: "none", color: "white" }}>
          <Flex direction="column" align="center" style={{ gap: "4px" }}>
            <Box bg="goldenrod" p="8px" borderRadius="8px">
              <FiShoppingCart size={20} color="black" />
            </Box>
            <Text fontSize="xs">Shopping Cart</Text>
          </Flex>
        </NavLink>

        {/* Wishlist */}
        <NavLink to="/wishlist" style={{ textDecoration: "none", color: "white" }}>
          <Flex direction="column" align="center" style={{ gap: "4px" }}>
            <Box bg="goldenrod" p="8px" borderRadius="8px">
              <FiHeart size={20} color="black" />
            </Box>
            <Text fontSize="xs">Wishlist</Text>
          </Flex>
        </NavLink>

        {/* My Account */}
        <NavLink to="/account" style={{ textDecoration: "none", color: "white" }}>
          <Flex direction="column" align="center" style={{ gap: "4px" }}>
            <Box bg="goldenrod" p="8px" borderRadius="8px">
              <FiUser size={20} color="black" />
            </Box>
            <Text fontSize="xs">My Account</Text>
          </Flex>
        </NavLink>

        {/* Scroll To Top */}
        <Flex direction="column" align="center" style={{ gap: "4px" }}>
          <IconButton
            aria-label="Scroll to top"
            icon={<FiArrowUp />}
            onClick={scrollToTop}
            borderRadius="full"
            bg="white"
            color="black"
            size="sm"
            _hover={{ bg: "goldenrod", color: "white" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default MobileFooterBar;

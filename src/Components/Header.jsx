import React, { useState, useRef } from "react";
import {
  Box, Flex, HStack, Input, IconButton, Text, Drawer, DrawerOverlay,
  DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  useDisclosure, Spacer
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiHeart, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import picture3 from "../assets/picture3.jpeg";
// import perfume2 from "../assets/perfume2.jpg";

const MotionBox = motion(Box);

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Category", path: "/category" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const shopLinks = [
  { label: "All Products", path: "/shop/all" },
  { label: "Cart", path: "/cart" },
  { label: "Checkout", path: "/checkout" },
  { label: "My Account", path: "/account" },
];
const formenLinks = [
  { label: "Shop all men's", path: "/category/men/all" },
  { label: "Men's best sellers", path: "/category/men/best" },
  { label: "Luxury perfumes", path: "/category/men/luxury" },
  { label: "Perfume of the month", path: "/category/men/month" },
  { label: "Fragrance finder", path: "/category/men/finder" },
];
const forwomenLinks = [
  { label: "Shop all women's", path: "/category/women/all" },
  { label: "Women's best sellers", path: "/category/women/best" },
  { label: "Luxury perfumes", path: "/category/women/luxury" },
  { label: "Perfume of the month", path: "/category/women/month" },
  { label: "Fragrance finder", path: "/category/women/finder" },
];
const bybrandLinks = [
  { label: "Calvin Klein", path: "/category/brand/calvin" },
  { label: "Yves Saint Laurent", path: "/category/brand/ysl" },
  { label: "Bvlgari", path: "/category/brand/bvlgari" },
  { label: "Christian Dior", path: "/category/brand/dior" },
  { label: "Hugo Boss", path: "/category/brand/hugo" },
];
const sendgiftLinks = [
  { label: "For Him", path: "/category/gift/him" },
  { label: "For Her", path: "/category/gift/her" },
];

const fadeSlideAnim = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.05, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: "easeIn" } },
};

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const shopTimerRef = useRef(null), categoryTimerRef = useRef(null), faqTimerRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEnter = (setOpen, ref) => { if (ref.current) clearTimeout(ref.current); setOpen(true); };
  const handleLeave = (setOpen, ref) => { ref.current = setTimeout(() => setOpen(false), 200); };

  return (
    <Box as="header" px={6} py={4} position="sticky" top="0" zIndex="1000" bg="white" boxShadow="md">
      <Flex align="center" minH="80px">
        {/* Mobile: Cart + Logo + Hamburger */}
        <Flex w="100%" align="center" justify="space-between" display={{ base: "flex", md: "none" }}>
          <IconButton aria-label="Cart" icon={<FiShoppingCart size={22} />} size="lg" variant="ghost" />
          <Box boxSize="60px"><img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} /></Box>
          <IconButton aria-label="Menu" icon={<FiMenu size={26} />} size="lg" variant="ghost" onClick={onOpen} />
        </Flex>

        {/* Desktop: Logo + Nav + Search + Icons */}
        <Flex align="center" w="100%" display={{ base: "none", md: "flex" }}>
          {/* Logo */}
          <HStack spacing={3} mr={6} flex="0 0 auto">
            <Box boxSize="60px"><img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} /></Box>
            <Text fontSize="2xl" fontWeight="bold" color="goldenrod" letterSpacing="wide">
              Xtra<Text as="span" color="black" fontSize="2xl">Perfume</Text>
            </Text>
          </HStack>

          {/* Navigation */}
          <Flex flex="1" justify="center">
            <HStack spacing={8} alignItems="center">
              {navItems.map((item) => {
                if (item.label === "Shop") return (
                  <Box key={item.path} position="relative" onMouseEnter={() => handleEnter(setIsShopOpen, shopTimerRef)} onMouseLeave={() => handleLeave(setIsShopOpen, shopTimerRef)}>
                    <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: isActive ? 700 : 600, fontSize: "xl", textDecoration: "none" })}>{item.label}</NavLink>
                    {isShopOpen && (
                      <MotionBox {...fadeSlideAnim} position="absolute" top="100%" left="0" bg="white" border="1px solid #ddd" borderRadius="md" boxShadow="lg" mt={2} p={2} minW="220px">
                        {shopLinks.map(link => (
                          <NavLink key={link.path} to={link.path} style={{ display: "block", padding: "10px 12px", color: "black", textDecoration: "none", fontSize: "md" }}
                            onMouseEnter={e => e.currentTarget.style.color = "goldenrod"} onMouseLeave={e => e.currentTarget.style.color = "black"}>{link.label}</NavLink>
                        ))}
                      </MotionBox>
                    )}
                  </Box>
                );

                if (item.label === "Category") return (
                  <Box key={item.path} position="relative" onMouseEnter={() => handleEnter(setIsCategoryOpen, categoryTimerRef)} onMouseLeave={() => handleLeave(setIsCategoryOpen, categoryTimerRef)}>
                    <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: isActive ? 700 : 600, fontSize: "xl", textDecoration: "none" })}>{item.label}</NavLink>
                    {isCategoryOpen && (
                      <MotionBox {...fadeSlideAnim} position="absolute" top="100%" left="-500%" transform="translateX(-36%)" bg="white" border="1px solid #ddd" borderRadius="md" boxShadow="lg" mt={2} p={6} minW="1100px" display="flex" gap={10}>
                        <Box>
                          <Text fontWeight="semibold" fontFamily="'Bodoni MT Condensed', serif" fontSize="3xl" mb={3}>ForMen</Text>
                          {formenLinks.map(link => (
                            <NavLink key={link.path} to={link.path} style={{ display: "block", padding: "8px 10px", color: "black", textDecoration: "none", fontSize: "md" }}
                              onMouseEnter={e => e.currentTarget.style.color = "goldenrod"} onMouseLeave={e => e.currentTarget.style.color = "black"}>{link.label}</NavLink>
                          ))}
                        </Box>
                        <Box>
                          <Text fontWeight="semibold" fontFamily="'Bodoni MT Condensed', serif" fontSize="3xl" mb={3}>ForWomen</Text>
                          {forwomenLinks.map(link => (
                            <NavLink key={link.path} to={link.path} style={{ display: "block", padding: "8px 10px", color: "black", textDecoration: "none", fontSize: "md" }}
                              onMouseEnter={e => e.currentTarget.style.color = "goldenrod"} onMouseLeave={e => e.currentTarget.style.color = "black"}>{link.label}</NavLink>
                          ))}
                        </Box>
                        <Box>
                          <Text fontWeight="semibold" fontFamily="'Bodoni MT Condensed', serif" fontSize="3xl" mb={3}>ByBrand</Text>
                          {bybrandLinks.map(link => (
                            <NavLink key={link.path} to={link.path} style={{ display: "block", padding: "8px 10px", color: "black", textDecoration: "none", fontSize: "md" }}
                              onMouseEnter={e => e.currentTarget.style.color = "goldenrod"} onMouseLeave={e => e.currentTarget.style.color = "black"}>{link.label}</NavLink>
                          ))}
                        </Box>
                        <Box>
                          <Text fontWeight="semibold" fontFamily="'Bodoni MT Condensed', serif" fontSize="3xl" mb={3}>SendGift</Text>
                          {sendgiftLinks.map(link => (
                            <NavLink key={link.path} to={link.path} style={{ display: "block", padding: "8px 10px", color: "black", textDecoration: "none", fontSize: "md" }}
                              onMouseEnter={e => e.currentTarget.style.color = "goldenrod"} onMouseLeave={e => e.currentTarget.style.color = "black"}>{link.label}</NavLink>
                          ))}
                        </Box>
                        <Box flex="2" maxH="350px"><img src={picture3} alt="Promo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></Box>
                      </MotionBox>
                    )}
                  </Box>
                );

                if (item.label === "FAQ") return (
                  <Box key={item.path} position="relative" onMouseEnter={() => handleEnter(setIsFaqOpen, faqTimerRef)} onMouseLeave={() => handleLeave(setIsFaqOpen, faqTimerRef)}>
                    <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: isActive ? 700 : 600, fontSize: "xl", textDecoration: "none" })}>{item.label}</NavLink>
                    {isFaqOpen && (
                      <MotionBox {...fadeSlideAnim} position="absolute" top="100%" left="0" bg="white" border="1px solid #ddd" borderRadius="md" boxShadow="lg" mt={2} p={3} minW="200px">
                        <Box position="relative" onMouseEnter={() => setIsSubmenuOpen(true)} onMouseLeave={() => setIsSubmenuOpen(false)}>
                          <Flex align="center" justify="space-between" px={2} py={2} cursor="pointer" _hover={{ color: "goldenrod" }}>
                            <Text>Submenu1</Text>
                          </Flex>
                          {isSubmenuOpen && (
                            <MotionBox {...fadeSlideAnim} position="absolute" top="0" left="100%" bg="white" border="1px solid #ddd" borderRadius="md" boxShadow="lg" ml={2} p={3} minW="180px">
                              <NavLink to="/faq/sub1" style={{ display: "block", padding: "6px 8px", color: "black", textDecoration: "none", fontSize: "md" }}
                                onMouseEnter={e => e.currentTarget.style.color = "goldenrod"} onMouseLeave={e => e.currentTarget.style.color = "black"}>Submenu Item A</NavLink>
                              <NavLink to="/faq/sub2" style={{ display: "block", padding: "6px 8px", color: "black", textDecoration: "none", fontSize: "md" }}
                                onMouseEnter={e => e.currentTarget.style.color = "goldenrod"} onMouseLeave={e => e.currentTarget.style.color = "black"}>Submenu Item B</NavLink>
                            </MotionBox>
                          )}
                        </Box>
                      </MotionBox>
                    )}
                  </Box>
                );

                return <NavLink key={item.path} to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: isActive ? 700 : 600, fontSize: "xl", textDecoration: "none" })}>{item.label}</NavLink>;
              })}
            </HStack>
          </Flex>

          {/* Right icons */}
          <HStack spacing={4} flex="0 0 auto">
            <Box display={{ base: "none", md: "block" }}>
              <Input placeholder="Search" size="md" width="220px" borderRadius="full" bg="whiteAlpha.800" border="1.5px" fontSize="md" _placeholder={{ color: "gray.500" }} py={2} px={4} />
            </Box>
            <IconButton aria-label="Wishlist" icon={<FiHeart size={22} />} size="lg" variant="ghost" />
            <IconButton aria-label="Account" icon={<FiUser size={22} />} size="lg" variant="ghost" />
            <IconButton aria-label="Cart" icon={<FiShoppingCart size={22} />} size="lg" variant="ghost" />
          </HStack>
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bgImage= "src/assets/perfume2.jpeg"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
          color="white"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <Box boxSize="50px"><img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} /></Box>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              {navItems.map((item) => {
                if (item.label === "Shop") return (
                  <Accordion key={item.label} allowToggle w="100%">
                    <AccordionItem border="none">
                      <AccordionButton px={0}>
                        <Box flex="1" textAlign="left" fontSize="lg" fontWeight="600">{item.label}</Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {shopLinks.map(link => (
                          <NavLink key={link.path} to={link.path} style={{ display: "block", padding: "6px 0", fontSize: "md", color: "black" }}>{link.label}</NavLink>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                );

                if (item.label === "Category") return (
                  <Accordion key={item.label} allowToggle w="100%">
                    <AccordionItem border="none">
                      <AccordionButton px={0}>
                        <Box flex="1" textAlign="left" fontSize="lg" fontWeight="600">{item.label}</Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {[...formenLinks, ...forwomenLinks, ...bybrandLinks, ...sendgiftLinks].map(link => (
                          <NavLink key={link.path} to={link.path} style={{ display: "block", padding: "6px 0", fontSize: "md", color: "black" }}>{link.label}</NavLink>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                );

                if (item.label === "FAQ") return (
                  <Accordion key={item.label} allowToggle w="100%">
                    <AccordionItem border="none">
                      <AccordionButton px={0}>
                        <Box flex="1" textAlign="left" fontSize="lg" fontWeight="600">{item.label}</Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <NavLink to="/faq/sub1" style={{ display: "block", padding: "6px 0", fontSize: "md", color: "black" }}>Submenu Item A</NavLink>
                        <NavLink to="/faq/sub2" style={{ display: "block", padding: "6px 0", fontSize: "md", color: "black" }}>Submenu Item B</NavLink>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                );

                return (
                  <NavLink key={item.path} to={item.path} style={{ fontSize: "lg", fontWeight: "600", color: "black" }}>{item.label}</NavLink>
                );
              })}
            </VStack>
            <Spacer />
            <Box mt={96} textAlign="center" fontSize="sm" color="gray.500">
              © {new Date().getFullYear()} XtraPerfume. All rights reserved.
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;

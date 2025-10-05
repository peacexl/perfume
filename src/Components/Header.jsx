import React, { useState, useRef } from "react";
import {
  Box, Flex, HStack, VStack, Text, Input, InputGroup, InputLeftElement,
  IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,
  DrawerHeader, DrawerBody, Accordion, AccordionItem, AccordionButton,
  AccordionPanel, AccordionIcon, useDisclosure, Image, Divider
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiHeart, FiUser, FiShoppingCart, FiMenu, FiSearch } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import picture3 from "../assets/picture3.jpeg";
import perfume2 from "../assets/perfume2.jpeg";

const MotionBox = motion(Box);

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Category", path: "/category" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

const shopLinks = [
  { label: "All Products", path: "/shop/all" },
  { label: "Cart", path: "/cart" },
  { label: "Checkout", path: "/checkout" },
  { label: "My Account", path: "/account" }
];

const formenLinks = [
  { label: "Shop All Men's", path: "/category/men/all" },
  { label: "Men's Best Sellers", path: "/category/men/best" },
  { label: "Luxury Perfumes", path: "/category/men/luxury" },
  { label: "Perfume Of The Month", path: "/category/men/month" },
  { label: "Fragrance Finder", path: "/category/men/finder" }
];

const forwomenLinks = [
  { label: "Shop All Women's", path: "/category/women/all" },
  { label: "Women's Best Sellers", path: "/category/women/best" },
  { label: "Luxury Perfumes", path: "/category/women/luxury" },
  { label: "Perfume Of The Month", path: "/category/women/month" },
  { label: "Fragrance Finder", path: "/category/women/finder" }
];

const bybrandLinks = [
  { label: "Calvin Klein", path: "/category/brand/calvin" },
  { label: "Yves Saint Laurent", path: "/category/brand/ysl" },
  { label: "Bvlgari", path: "/category/brand/bvlgari" },
  { label: "Christian Dior", path: "/category/brand/dior" },
  { label: "Hugo Boss", path: "/category/brand/hugo" }
];

const sendgiftLinks = [
  { label: "For Her", path: "/category/gift/her" },
  { label: "For Him", path: "/category/gift/him" }
];

const fadeAnim = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: "easeIn" } }
};

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const shopTimer = useRef(null), categoryTimer = useRef(null), faqTimer = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEnter = (setter, ref) => { if (ref.current) clearTimeout(ref.current); setter(true); };
  const handleLeave = (setter, ref) => { ref.current = setTimeout(() => setter(false), 150); };

  return (
    <Box as="header" px={8} py={4} position="sticky" top="0" zIndex="1000" bg="white" boxShadow="md">
      <Flex align="center" minH="88px">
        {/* MOBILE HEADER */}
        <Flex w="100%" align="center" justify="space-between" display={{ base: "flex", md: "none" }}>
          <IconButton aria-label="Cart" icon={<FiShoppingCart />} bg="goldenrod" color="white" />
          <HStack spacing={2}>
            <Box boxSize="44px"><img src={logo} alt="logo" style={{ width: "100%" }} /></Box>
            <Text fontWeight="bold" color="goldenrod" fontSize="lg">Xtra<Text as="span" color="black">Perfume</Text></Text>
          </HStack>
          <IconButton aria-label="Menu" icon={<FiMenu />} bg="goldenrod" color="white" onClick={onOpen} />
        </Flex>

        {/* DESKTOP HEADER */}
        <Flex w="100%" align="center" justify="space-between" display={{ base: "none", md: "flex" }}>
          <HStack spacing={3}>
            <Box boxSize="58px"><img src={logo} alt="logo" style={{ width: "100%" }} /></Box>
            <Text fontWeight="bold" fontSize="2xl" color="goldenrod">Xtra<Text as="span" color="black">Perfume</Text></Text>
          </HStack>

          {/* NAV */}
          <HStack spacing={8}>
            {navItems.map((item) => {
              if (item.label === "Shop")
                return (
                  <Box key={item.path} position="relative"
                    onMouseEnter={() => handleEnter(setIsShopOpen, shopTimer)}
                    onMouseLeave={() => handleLeave(setIsShopOpen, shopTimer)}>
                    <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: 600 })}>{item.label}</NavLink>
                    {isShopOpen && (
                      <MotionBox {...fadeAnim} position="absolute" top="100%" left="0" mt={2}
                        bg="rgba(0,0,0,0.85)" borderRadius="8px" p={3} minW="220px">
                        {shopLinks.map(link => (
                          <NavLink key={link.path} to={link.path}
                            style={{ display: "block", padding: "6px 10px", color: "white", textDecoration: "none" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "goldenrod"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "white"}>
                            {link.label}
                          </NavLink>
                        ))}
                      </MotionBox>
                    )}
                  </Box>
                );

              if (item.label === "Category")
                return (
                  <Box key={item.path} position="relative"
                    onMouseEnter={() => handleEnter(setIsCategoryOpen, categoryTimer)}
                    onMouseLeave={() => handleLeave(setIsCategoryOpen, categoryTimer)}>
                    <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: 600 })}>{item.label}</NavLink>
                    {isCategoryOpen && (
                      <MotionBox {...fadeAnim} position="absolute" top="100%" left="50%" transform="translateX(-50%)"
                        bg="rgba(0,0,0,0.9)" borderRadius="10px" p={6} mt={3} display="flex" gap={10} minW="1000px" justify="center" align="start">
                        <Box>
                          <Text fontWeight="bold" color="goldenrod" mb={3}>For Women</Text>
                          {forwomenLinks.map(l => (
                            <NavLink key={l.path} to={l.path}
                              style={{ display: "block", padding: "4px 0", color: "white" }}
                              onMouseEnter={(e) => e.currentTarget.style.color = "goldenrod"}
                              onMouseLeave={(e) => e.currentTarget.style.color = "white"}>{l.label}</NavLink>
                          ))}
                        </Box>
                        <Box>
                          <Text fontWeight="bold" color="goldenrod" mb={3}>For Men</Text>
                          {formenLinks.map(l => (
                            <NavLink key={l.path} to={l.path}
                              style={{ display: "block", padding: "4px 0", color: "white" }}
                              onMouseEnter={(e) => e.currentTarget.style.color = "goldenrod"}
                              onMouseLeave={(e) => e.currentTarget.style.color = "white"}>{l.label}</NavLink>
                          ))}
                        </Box>
                        <Box>
                          <Text fontWeight="bold" color="goldenrod" mb={3}>By Brand</Text>
                          {bybrandLinks.map(l => (
                            <NavLink key={l.path} to={l.path}
                              style={{ display: "block", padding: "4px 0", color: "white" }}
                              onMouseEnter={(e) => e.currentTarget.style.color = "goldenrod"}
                              onMouseLeave={(e) => e.currentTarget.style.color = "white"}>{l.label}</NavLink>
                          ))}
                        </Box>
                        <Box>
                          <Text fontWeight="bold" color="goldenrod" mb={3}>Send Gift</Text>
                          {sendgiftLinks.map(l => (
                            <NavLink key={l.path} to={l.path}
                              style={{ display: "block", padding: "4px 0", color: "white" }}
                              onMouseEnter={(e) => e.currentTarget.style.color = "goldenrod"}
                              onMouseLeave={(e) => e.currentTarget.style.color = "white"}>{l.label}</NavLink>
                          ))}
                        </Box>
                        <Image src={picture3} alt="Perfume promo" w="200px" borderRadius="10px" />
                      </MotionBox>
                    )}
                  </Box>
                );

              if (item.label === "FAQ")
                return (
                  <Box key={item.path} position="relative"
                    onMouseEnter={() => handleEnter(setIsFaqOpen, faqTimer)}
                    onMouseLeave={() => handleLeave(setIsFaqOpen, faqTimer)}>
                    <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: 600 })}>{item.label}</NavLink>
                    {isFaqOpen && (
                      <MotionBox {...fadeAnim} position="absolute" top="100%" left="0" mt={2}
                        bg="rgba(0,0,0,0.85)" borderRadius="8px" p={3} minW="220px">
                        <NavLink to="/faq/sub1" style={{ display: "block", color: "white", padding: "6px 8px" }}
                          onMouseEnter={(e) => e.currentTarget.style.color = "goldenrod"}
                          onMouseLeave={(e) => e.currentTarget.style.color = "white"}>Submenu Item A</NavLink>
                        <NavLink to="/faq/sub2" style={{ display: "block", color: "white", padding: "6px 8px" }}
                          onMouseEnter={(e) => e.currentTarget.style.color = "goldenrod"}
                          onMouseLeave={(e) => e.currentTarget.style.color = "white"}>Submenu Item B</NavLink>
                      </MotionBox>
                    )}
                  </Box>
                );

              return <NavLink key={item.path} to={item.path} style={({ isActive }) => ({ color: isActive ? "goldenrod" : "black", fontWeight: 600 })}>{item.label}</NavLink>;
            })}
          </HStack>

          {/* RIGHT ICONS */}
          <HStack spacing={3}>
            <InputGroup width="200px">
              <InputLeftElement pointerEvents="none"><FiSearch color="gray" /></InputLeftElement>
              <Input placeholder="Search perfumes..." borderRadius="full" border="1px" fontSize="sm" />
            </InputGroup>
            <IconButton icon={<FiHeart />} variant="ghost" />
            <IconButton icon={<FiUser />} variant="ghost" />
            <IconButton icon={<FiShoppingCart />} variant="ghost" />
          </HStack>
        </Flex>
      </Flex>

      {/* MOBILE DRAWER */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} motionPreset="slideInRight">
        <DrawerOverlay />
        <DrawerContent bgImage={`url(${perfume2})`} bgSize="cover" bgPosition="center" color="white" transition="all 0.6s ease">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
            <Flex align="center" justify="center" gap={3}>
              <Box boxSize="48px"><img src={logo} alt="logo" style={{ width: "100%" }} /></Box>
              <Text fontSize="2xl" fontWeight="bold" color="goldenrod">Xtra<Text as="span" color="white">Perfume</Text></Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={3} w="100%">
              <Accordion allowMultiple w="100%">
                {[
                  { label: "Shop", links: shopLinks },
                  {
                    label: "Category",
                    groups: [
                      { title: "For Women", items: forwomenLinks },
                      { title: "For Men", items: formenLinks },
                      { title: "By Brand", items: bybrandLinks },
                      { title: "Send Gift", items: sendgiftLinks }
                    ]
                  },
                  {
                    label: "FAQ",
                    links: [
                      { label: "Submenu Item A", path: "/faq/sub1" },
                      { label: "Submenu Item B", path: "/faq/sub2" }
                    ]
                  }
                ].map((section, i) => (
                  <AccordionItem border="none" key={i}>
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton px={0}>
                          <Box flex="1" textAlign="left" fontWeight="600" color={isExpanded ? "goldenrod" : "white"}>{section.label}</Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          {section.groups
                            ? section.groups.map((g, j) => (
                              <Box key={j} mb={2}>
                                <Text fontWeight="bold" color="white">{g.title}</Text>
                                {g.items.map(l => (
                                  <NavLink key={l.path} to={l.path} style={{ display: "block", padding: "5px 0", color: "white" }}>{l.label}</NavLink>
                                ))}
                              </Box>
                            ))
                            : section.links.map(l => (
                              <NavLink key={l.path} to={l.path} style={{ display: "block", padding: "5px 0", color: "white" }}>{l.label}</NavLink>
                            ))}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>

              {navItems.filter(i => !["Shop", "Category", "FAQ", "Home"].includes(i.label)).map(l => (
                <NavLink key={l.path} to={l.path} style={{ fontWeight: 500, textDecoration: "none", color: "white" }}>{l.label}</NavLink>
              ))}

              <Divider borderColor="gray.600" my={6} />

              <HStack spacing={3}>
                {[FaFacebookF, FaInstagram, FaTiktok, FaEnvelope].map((Icon, i) => (
                  <Box key={i} bg="goldenrod" p={2} borderRadius="md" cursor="pointer" _hover={{ bg: "white", color: "black" }}>
                    <Icon size={18} color="black" />
                  </Box>
                ))}
              </HStack>

              <Text fontSize="sm" opacity={0.8} pt={3}>Copyright © 2025</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;

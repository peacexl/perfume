import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

const Page = ({ title }) => (
  <div style={{ padding: "4rem 1rem", minHeight: "60vh", textAlign: "center" }}>
    <h1 style={{ fontSize: "3rem", margin: 0 }}>{title}</h1>
  </div>
);

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Page title="Home Page" />} />
        <Route path="/shop" element={<Page title="Shop Page" />} />
        <Route path="/category" element={<Page title="Category Page" />} />
        <Route path="/faq" element={<Page title="FAQ Page" />} />
        <Route path="/blog" element={<Page title="Blog Page" />} />
        <Route path="/about" element={<Page title="About Page" />} />
        <Route path="/contact" element={<Page title="Contact Page" />} />
        <Route path="/wishlist" element={<Page title="Wishlist" />} />
        <Route path="/account" element={<Page title="My Account" />} />
        <Route path="/cart" element={<Page title="Cart" />} />
      </Routes>
    </>
  );
}

"use client";
import React from "react";
import { useCart } from "../contexts/cartcontextprovider";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const AddToCartButton = ({ product, size = "" }) => {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    addToCart(product);
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <Button
        size={size}
        variant="contained"
        color="primary"
        sx={{ flex: 1 }}
        startIcon={<ShoppingCart />}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartButton;

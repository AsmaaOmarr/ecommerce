"use client";
import React from "react";
import { useCart } from "../contexts/cartcontextprovider";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

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
        color="warning"
        sx={{
          // bgcolor: yellow[700],
          flex: 1,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            bgcolor: yellow[900],
            color: "white",
          },
        }}
        startIcon={<ShoppingCart />}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartButton;

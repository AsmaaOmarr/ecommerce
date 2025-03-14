"use client";
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useCart } from "../contexts/cartcontextprovider";
const CartItem = ({ item, refreshCart }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQuantity = async (id) => {
    const response = await fetch(`http://localhost:3000/api/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: 1 }),
    });
    const data = await response.json();
    console.log(data);
    addToCart(item);
    refreshCart();
  };

  const deleteProduct = async (id) => {
    console.log("remove");
    await fetch(`http://localhost:3000/api/cart/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    removeFromCart(id, true);
    refreshCart();
  };

  const decreaseQuantity = async (id) => {
    if (item.quantity === 1) {
      return deleteProduct(id);
    }
    const response = await fetch(`http://localhost:3000/api/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: -1 }), // ✅ Decrements quantity
    });
    removeFromCart(id);
    const data = await response.json();
    console.log(data);
    refreshCart();
  };

  return (
    <>
      <Card
        key={item.id}
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          boxShadow: 2,
          p: 2,
          bgcolor: "white",
          borderRadius: "12px",
          transition: "0.3s",
          "&:hover": { boxShadow: 5 },
        }}
      >
        {/* Product Image */}
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{ width: 90, height: 90, objectFit: "contain", mr: 2 }}
        />

        <CardContent sx={{ flex: 1 }}>
          {/* Product Title */}
          <Typography variant="h6" fontWeight="bold">
            {item.title}
          </Typography>

          {/* Quantity & Controls */}
          <Box display="flex" alignItems="center" mt={1}>
            <IconButton
              onClick={() => decreaseQuantity(item.id)}
              sx={{ bgcolor: " #f0f0f0", "&:hover": { bgcolor: "#ddd" } }}
            >
              <Remove />
            </IconButton>
            <Typography mx={2}>{item.quantity}</Typography>
            <IconButton
              onClick={() => increaseQuantity(item.id)}
              sx={{ bgcolor: "#f0f0f0", "&:hover": { bgcolor: "#ddd" } }}
            >
              <Add />
            </IconButton>
          </Box>
        </CardContent>

        {/* Price */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "#ff9800", mr: 2 }}
        >
          ${item.price * item.quantity}
        </Typography>

        {/* Delete Button */}
        <IconButton
          color="error"
          onClick={() => removeFromCart(item.id)}
          sx={{ bgcolor: "#ffebee", "&:hover": { bgcolor: "#ffcdd2" } }}
        >
          <Delete />
        </IconButton>
      </Card>
    </>
  );
};

export default CartItem;

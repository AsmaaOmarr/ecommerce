"use client";
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  TableRow,
  TableCell,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useCart } from "../contexts/cartcontextprovider";

const CartItem = ({ item, refreshCart }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQuantity = async (id) => {
    await fetch(`http://localhost:3000/api/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: 1 }),
    });
    addToCart(item);
    refreshCart();
  };

  const deleteProduct = async (id) => {
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
    await fetch(`http://localhost:3000/api/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: -1 }),
    });
    removeFromCart(id);
    refreshCart();
  };

  return (
    <TableRow sx={{ width: "600px", maxWidth: "100%" }}>
      <TableCell sx={{ width: "40%" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <img
            src={item.image}
            alt={item.title}
            width={60}
            height={60}
            style={{ borderRadius: "8px", objectFit: "contain" }}
          />
          <Typography variant="body1" fontWeight="bold" color="black">
            {item.title}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="right" sx={{ width: "15%", color: "gray" }}>
        ${item.price.toFixed(2)}
      </TableCell>
      <TableCell align="center" sx={{ width: "25%" }}>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <IconButton
            onClick={() => decreaseQuantity(item.id)}
            sx={{
              bgcolor: "#333",
              color: "white",
              "&:hover": { bgcolor: "#444" },
            }}
          >
            <Remove />
          </IconButton>
        
          <Typography color="black">{item.quantity}</Typography>
          <IconButton
            onClick={() => increaseQuantity(item.id)}
            sx={{
              bgcolor: "#333",
              color: "white",
              "&:hover": { bgcolor: "#444" },
            }}
          >
            <Add />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell align="right" sx={{ width: "20%" }}>
        <Typography fontWeight="bold" color="#f39c12">
          ${(item.price * item.quantity).toFixed(2)}
        </Typography>
        <IconButton color="error" onClick={() => deleteProduct(item.id)}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;

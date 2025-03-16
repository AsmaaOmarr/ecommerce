"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "@/app/contexts/cartcontextprovider";
import CartItem from "./cartItem";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  // Function to fetch updated cart data
  const getCart = async () => {
    const res = await fetch(`http://localhost:3000/api/cart`);
    const data = await res.json();
    setCart(data);
  };

  useEffect(() => {
    getCart();
  }, []);

  if (cart.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
        textAlign="center"
        p={3}
      >
        <ShoppingCart sx={{ fontSize: 80, color: "gray" }} />
        <Typography variant="h4" fontWeight="bold" mt={2}>
          Your Cart is Empty
        </Typography>
        <Typography variant="body1" mt={1} color="text.secondary">
          Looks like you haven’t added anything yet!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, px: 4 }}
          href="/products"
        >
          Start Shopping
        </Button>
      </Box>
    );
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box p={4} maxWidth={900} mx="auto">
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        textAlign="center"
        // color="gray"
      >
        🛒 Your Shopping Cart
      </Typography>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} refreshCart={getCart}></CartItem>
      ))}

      {/* <Divider sx={{ my: 3 }} /> */}

      {/* Total Price & Actions */}
      <Box
        position="sticky"
        bottom={0}
        bgcolor="white"
        p={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" fontWeight="bold" color="warning">
          Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Box display="flex" gap={2}>
          <Button variant="contained" color="warning">
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;

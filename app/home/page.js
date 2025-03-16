import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

const HomePage = async () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      {/* Full-Screen Hero Section */}
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography variant="h2" fontWeight="bold">
            Welcome to ShopEase 🛍️
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 600, mt: 1 }}>
            Discover amazing deals on your favorite products!
          </Typography>
          <Link href="/products" passHref>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "#ff6b6b",
                color: "white",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": { bgcolor: "#e63946" },
              }}
            >
              Start Shopping
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;

import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Link from "next/link";

const HomePage = async () => {
  async function getTopProducts() {
    const res = await fetch("https://fakestoreapi.com/products?limit=4", {
      cache: "no-store",
    });
    return res.json();
  }

  const products = await getTopProducts();

  return (
    <Box p={3} maxWidth={1200} mx="auto">
      {/* Hero Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        py={5}
        sx={{ bgcolor: "#f5f5f5", borderRadius: 3 }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to ShopEase 🛍️
        </Typography>
        <Typography variant="h6" color="text.secondary" mt={1} maxWidth={600}>
          Discover amazing products at unbeatable prices. Shop now and enjoy
          exclusive deals!
        </Typography>
        <Link href={"/products"}>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Start Shopping
          </Button>
        </Link>
      </Box>
      {/* Trending Products */}
      <Box mt={6}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Trending Now 🔥
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          mt={3}
          gap={2}
        >
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card
                key={product.id}
                sx={{ width: 250, boxShadow: 3, cursor: "pointer" }}
                // onClick={() => router.push(`/products/${product.id}`)}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 200, objectFit: "contain", p: 2 }}
                />
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    {product.title.length > 30
                      ? product.title.substring(0, 30) + "..."
                      : product.title}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>

      {/* Promotional Banner */}
      <Box
        mt={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        p={4}
        sx={{ bgcolor: "#ff9800", borderRadius: 3, color: "white" }}
      >
        <Typography variant="h4" fontWeight="bold">
          Limited-Time Offer! 🎉
        </Typography>
        <Typography variant="body1" mt={1} maxWidth={600}>
          Get up to <strong>50% OFF</strong> on selected items. Hurry, before
          the sale ends!
        </Typography>
        <Link href={"/products"}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "white",
              color: "#ff9800",
              fontWeight: "bold",
            }}
          >
            Shop Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;

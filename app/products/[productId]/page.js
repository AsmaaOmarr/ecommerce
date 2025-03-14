import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
} from "@mui/material";
import Link from "next/link";
import AddToCartButton from "@/app/components/addToCartbutton";

const Page = async ({ params }) => {
  const { productId } = await params;

  async function getProductDetails() {
    const res = await fetch(
      `${process.env.BASE_URL}/api/products/${productId}`,
      {
        cache: "no-store", // SSR for fresh data
      }
    );
    return res.json();
  }

  const product = await getProductDetails();

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" p={3}>
      <Card sx={{ maxWidth: 900, padding: 2, boxShadow: 5 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          {/* Left Side - Product Image */}
          <CardMedia
            component="img"
            height="350"
            image={product.image}
            alt={product.title}
            sx={{
              objectFit: "contain",
              padding: 2,
              flex: 1,
              width: "40%",
            }}
          />

          {/* Right Side - Product Details */}
          <CardContent sx={{ flex: "2" }}>
            {/* Product Title */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {product.title}
            </Typography>

            {/* Category */}
            <Typography variant="subtitle1" color="secondary" gutterBottom>
              Category: {product.category}
            </Typography>

            {/* Rating */}
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Rating value={product.rating.rate} precision={0.5} readOnly />
              <Typography variant="body2">
                ({product.rating.count} reviews)
              </Typography>
            </Box>

            {/* Description */}
            <Typography variant="body1" color="text.secondary">
              {product.description}
            </Typography>

            {/* Price */}
            <Typography variant="h6" color="primary" mt={2}>
              ${product.price}
            </Typography>

            {/* Buttons */}
            <Box display="flex" gap={2} mt={2}>
              <AddToCartButton product={product} />
              <Link
                // note href not event onclick
                href="/products"
                style={{ textDecoration: "none", flex: 1 }}
              >
                <Button variant="outlined" sx={{ width: "100%" }}>
                  Back to Products
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default Page;

import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddToCartButton from "../components/addToCartbutton";

async function getProducts() {
  const res = await fetch(`http://localhost:3000/api/products`, {
    next: { revalidate: 10 },
  });
  return res.json();
}

const Page = async () => {
  const products = await getProducts();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        mx: 2,
        my: 5,
        gap: 5,
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            py: 2,
            maxWidth: 300,
            borderRadius: 4,
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
            sx={{
              objectFit: "contain",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                scale: 1.08,
              },
            }}
          />
          <CardContent>
            <Typography variant="h6" noWrap>
              {product.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ${product.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <AddToCartButton product={product} size={"small"} />
            <Link
              href={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="small"
                variant="outlined"
                color="black"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    bgcolor: "rgba(18, 18, 18, 0.87)",
                    color: "white",
                  },
                }}
              >
                View Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Page;

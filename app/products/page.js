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
  
  const res = await fetch(`${process.env.BASE_URL}/api/products`, {
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
        <Card key={product.id} sx={{ width: 300, boxShadow: 10, py: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: "contain" }}
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
              <Button size="small" variant="outlined">
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

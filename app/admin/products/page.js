"use client";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ProductsTable from "@/app/components/productstable";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const getProducts = async () => {
    const response = await fetch(`http://localhost:3000/api/products`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={2}>
        Products Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/admin/products/new")}
      >
        Add New Product
      </Button>
      <ProductsTable products={products} setProducts={setProducts} />
    </Box>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
} from "@mui/material";
import CustomSnackbar from "@/app/components/snackbar";

export default function EditProduct() {
  const { productId } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const getProduct = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !product.title ||
      !product.price ||
      !product.category ||
      !product.image ||
      !product.description
    ) {
      setSnackbar({
        open: true,
        message: "Please fill all required fields",
        severity: "error",
      });
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );

      if (res.ok) {
        const data = await res.json();
        setSnackbar({
          open: true,
          message: data.message,
          severity: "success",
        });
        setTimeout(() => router.push("/admin/products"), 2000);
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Something went wrong!",
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ mt: 5, boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
            🛒 Add New Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Product Title*"
                name="title"
                value={product.title}
                onChange={handleChange}
              />

              <Box display="flex" gap={2}>
                <TextField
                  fullWidth
                  label="Price ($)*"
                  name="price"
                  type="number"
                  value={product.price}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Category*"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                />
              </Box>

              <TextField
                fullWidth
                label="Description*"
                name="description"
                value={product.description}
                onChange={handleChange}
                multiline
                rows={3}
              />

              <TextField
                fullWidth
                label="Image URL*"
                name="image"
                value={product.image}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
              >
                Add Product
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>

      {/* Snackbar for Notifications */}
      <CustomSnackbar
        snackbarOpen={snackbar.open}
        setSnackbarOpen={setSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Container>
  );
}

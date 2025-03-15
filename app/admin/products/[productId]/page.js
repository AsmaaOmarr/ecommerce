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
  Grid,
  Box,
  Avatar,
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

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(
        `http://localhost:3000/api/products/${productId}`
      );
      const data = await res.json();
      setProduct(data);
    };
    getProduct();
  }, []);

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
        setSnackbar({
          open: true,
          message: "Product updated successfully!",
          severity: "success",
        });
        setTimeout(() => router.push("/admin/products"), 2000);
      } else {
        throw new Error("Failed to update product");
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
      <Card sx={{ mt: 5, boxShadow: 5, borderRadius: 3, p: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
            ✏️ Edit Product
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Product Image Preview */}
              <Grid item xs={12} display="flex" justifyContent="center">
                <Avatar
                  src={product.image}
                  alt="Product Image"
                  sx={{ width: 120, height: 120, boxShadow: 3 }}
                />
              </Grid>

              {/* Title Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Title*"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              {/* Price & Category */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Price ($)*"
                  name="price"
                  type="number"
                  value={product.price}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Category*"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description*"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Grid>

              {/* Image URL */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL*"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              {/* Save Button */}
              <Grid item xs={12} display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    transition: "0.3s",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#1565c0" },
                  }}
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
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

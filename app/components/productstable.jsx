"use client";
import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import AlertDialogSlide from "./alertDialog";
import CustomSnackbar from "./snackbar";
import { useRouter } from "next/navigation";

export default function ProductsTable({ products, setProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!selectedProductId) return;
    await fetch(`http://localhost:3000/api/products/${selectedProductId}`, {
      method: "DELETE",
    });
    setProducts(products.filter((product) => product.id !== selectedProductId));
    setIsOpen(false);
    setSnackbarOpen(true);
    setSelectedProductId(null);
  };

  return (
    <>
      {/* alert to confirm delete */}
      <AlertDialogSlide
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      ></AlertDialogSlide>

      {/* Snackbar Notification */}
      <CustomSnackbar
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        message={"Product Deleted Successfully"}
      ></CustomSnackbar>

      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>ID</strong>
            </TableCell>
            <TableCell>
              <strong>Image</strong>
            </TableCell>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Price</strong>
            </TableCell>
            <TableCell>
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>
                <img src={product.image} width={50} height={50}></img>
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => router.push(`/admin/products/${product.id}`)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => {
                    setSelectedProductId(product.id);
                    setIsOpen(true);
                  }}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

import React from "react";
import { Snackbar, Alert } from "@mui/material";
const CustomSnackbar = ({
  snackbarOpen,
  setSnackbarOpen,
  message,
  severity = "success",
}) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;

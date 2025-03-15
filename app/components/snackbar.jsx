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
        // sx={{ width: "100%" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={severity}
          // sx={{ width: "40%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;

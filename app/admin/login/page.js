"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (email === "asmaa@gmail.com" && password === "123123") {
      setSuccess("Login successful");
      setTimeout(() => {
        setSuccess("");
        localStorage.setItem("adminToken", "admin123");
        router.push("/admin/dashboard");
      }, 2000);
    } else {
      setError("Invalid credentials. Try again.");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <Card
        sx={{
          width: 380,
          p: 4,
          boxShadow: 5,
          borderRadius: 4,
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
            Admin Login
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ borderRadius: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ borderRadius: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: 3,
              "&:hover": {
                backgroundColor: "#5a67d8",
              },
            }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

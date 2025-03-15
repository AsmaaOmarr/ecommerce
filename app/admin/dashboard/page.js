"use client";
import { Typography, Box, Card, CardContent } from "@mui/material";

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Admin Dashboard
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Card sx={{ flex: 1, p: 2 }}>
          <CardContent>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">120</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, p: 2 }}>
          <CardContent>
            <Typography variant="h6">Active Orders</Typography>
            <Typography variant="h4">35</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

import React from "react";
import { Box, Typography, Paper, Button, CardMedia } from "@mui/material";

const AboutPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      {/* About Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 900,
          textAlign: "center",
          borderRadius: 2,
          bgcolor: "#f8f9fa",
        }}
      >
        {/* Brand Image */}
        <CardMedia
          component="img"
          image="https://t4.ftcdn.net/jpg/02/50/31/83/360_F_250318394_Sv5grwCptbMlak5Rp4PtiDCsb6HYOUzg.jpg"
          alt="Our Brand"
          sx={{
            width: "100%",
            height: 250,
            objectFit: "cover",
            borderRadius: 2,
            mb: 2,
          }}
        />

        {/* About Us */}
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Welcome to ShopEase 🛍️
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          At <strong>ShopEase</strong>, we bring you the latest trends,
          top-quality products, and an unbeatable shopping experience. Whether
          you're looking for fashion, electronics, or home essentials, we have
          it all!
        </Typography>

        {/* Our Mission */}
        <Typography variant="h5" fontWeight="bold" mt={2} mb={1}>
          Our Mission 🎯
        </Typography>
        <Typography variant="body1" color="text.secondary">
          To provide customers with a seamless and enjoyable online shopping
          experience while offering the best quality and prices.
        </Typography>

        {/* Why Choose Us? */}
        <Typography variant="h5" fontWeight="bold" mt={3} mb={1}>
          Why Shop With Us? 🛒
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ✔ Wide range of high-quality products <br />
          ✔ Secure & fast checkout process <br />
          ✔ Reliable customer service <br />
          ✔ Exclusive deals & discounts <br />
        </Typography>

        {/* CTA Button */}
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Start Shopping
        </Button>
      </Paper>
    </Box>
  );
};

export default AboutPage;

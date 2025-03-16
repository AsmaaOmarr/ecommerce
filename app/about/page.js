import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.6)",
          }}
        />
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
          textAlign="center"
          sx={{ zIndex: 1 }}
        >
          About Us
        </Typography>
      </Box>

      {/* About Content Section */}
      <Container sx={{ py: 10, display: "flex", flexDirection: "row", gap: 5 }}>
        {/* Text Content */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Who We Are
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            At <strong>ShopEase</strong>, we believe in providing high-quality
            products at affordable prices. Our team is dedicated to bringing you
            the best shopping experience with a seamless interface and great
            customer support.
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            We are passionate about connecting customers with the best products
            and ensuring that every shopping experience is effortless and
            enjoyable.
          </Typography>
          <Link href="/contactus">
            <Button variant="contained" sx={{ mt: 2 }}>
              Get in Touch
            </Button>
          </Link>
        </Box>

        {/* Image */}
        <Box flex={1} display="flex" justifyContent="center">
          <Image
            src="https://images.unsplash.com/photo-1609143739217-01b60dad1c67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhY2tpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Our Team"
            width={600}
            height={400}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;

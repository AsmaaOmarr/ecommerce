"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
  ListItemIcon,
  Box,
} from "@mui/material";
import {
  Category,
  ContactMail,
  Home,
  Info,
  Menu,
  ShoppingCart,
} from "@mui/icons-material";
import Link from "next/link";
import { useCart } from "../contexts/cartcontextprovider";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      {/* Dark Navbar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, #1c1c1c, #2b2b2b)",
          boxShadow: "none",
          px: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu />
          </IconButton>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                letterSpacing: 1.5,
                "&:hover": { color: "#f39c12" },
                transition: "0.3s",
              }}
            >
              ShopEase
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "About", href: "/about" },
              { label: "Contact us", href: "/contactus" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: "#f5f5f5",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": { color: "#f39c12" },
                    transition: "0.3s",
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Cart Icon */}
          <Link href="/cart" style={{ color: "inherit" }}>
            <IconButton color="inherit">
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCart sx={{ fontSize: 28 }} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            background: "#2b2b2b",
            color: "white",
          },
        }}
      >
        <List>
          {[
            { text: "Home", href: "/", icon: <Home /> },
            { text: "Products", href: "/products", icon: <Category /> },
            { text: "About", href: "/about", icon: <Info /> },
            { text: "Contact", href: "/contactus", icon: <ContactMail /> },
            { text: "Cart", href: "/cart", icon: <ShoppingCart /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{
                  "&:hover": { background: "#444" },
                  transition: "0.3s",
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

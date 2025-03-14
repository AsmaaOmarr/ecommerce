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
      <AppBar position="static" sx={{ backgroundColor: "primary" }}>
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
          <IconButton color="inherit">
            <Typography variant="h6">ShopEase</Typography>
          </IconButton>

          {/* Desktop Navigation */}
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", md: "block", fontSize: "1rem" },
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <Link
              href="/home"
              style={{
                margin: "0 15px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              href="/products"
              style={{
                margin: "0 15px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Products
            </Link>
            <Link
              href="/about"
              style={{
                margin: "0 15px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              href="/contactus"
              style={{
                margin: "0 15px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </Typography>

          {/* Cart Icon at End */}
          <Link
            href="/cart"
            style={{
              margin: "0 15px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <IconButton color="inherit">
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: 200 } }}
      >
        <List>
          {[
            { text: "Home", href: "/home", icon: <Home /> },
            { text: "Products", href: "/products", icon: <Category /> },
            { text: "About", href: "/about", icon: <Info /> },
            { text: "Contact Us", href: "/contactus", icon: <ContactMail /> },
            { text: "Cart", href: "/cart", icon: <ShoppingCart /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
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

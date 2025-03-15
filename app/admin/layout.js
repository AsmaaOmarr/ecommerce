"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Box,
} from "@mui/material";
import {
  Dashboard,
  People,
  Settings,
  ExitToApp,
  Menu as MenuIcon,
} from "@mui/icons-material";

const drawerWidth = 260;

const menuItems = [
  { text: "Products", icon: <Dashboard />, path: "/admin/products" },
  { text: "Users", icon: <People />, path: "/admin/users" },
  { text: "Settings", icon: <Settings />, path: "/admin/settings" },
];

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    if (path === "/admin/login") {
      localStorage.removeItem("adminToken"); // Logout
      router.push(path);
    } else {
      router.push(path);
    }
  };

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: " #121212",
        height: "100vh",
        color: "white",
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", py: 2, fontWeight: "bold" }}
      >
        Admin Panel
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            sx={{
              bgcolor: pathname === item.path ? "#0047AB" : "transparent",
              color: pathname === item.path ? "white" : "#aaa",
              "&:hover": { bgcolor: "#0047AB", color: "white" },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
        {/* Logout Button */}
        <ListItemButton
          onClick={() => handleNavigation("/admin/login")}
          sx={{
            width: "100%",
            color: "crimson",
            "&:hover": { bgcolor: "crimson", color: "white" },
          }}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "primary",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar - Permanent for large screens, Temporary for mobile */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          width: drawerWidth,
        }}
      >
        {drawer}
      </Drawer>

      {/* Page Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {/* childen producst etc.. */}
        {children}
      </Box>
    </Box>
  );
}

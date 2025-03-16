import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const ContactPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        p: 3,
      }}
    >
      {/* Dark Overlay for better readability */}
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

      {/* Contact Content */}
      <Box
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          maxWidth: 1000,
          width: "100%",
        }}
      >
        {/* Contact Form */}
        <Paper
          elevation={5}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 450,
            textAlign: "center",
            borderRadius: 3,
            bgcolor: "white",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            📩 Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            We'd love to hear from you! Fill out the form below and we'll get
            back to you.
          </Typography>

          <form>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                required
                multiline
                rows={4}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default ContactPage;

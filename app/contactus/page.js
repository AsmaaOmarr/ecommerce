import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const ContactPage = () => {
  // async function getData() {
  //   const res = await fetch("", {
  //     cache: "force-cache",
  //   });
  //   return res.json();
  // }

  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-around"} alignItems="center" p={3}>
      {/* Contact Info */}
      <Box mt={4} textAlign="center">
        <Typography variant="h5" fontWeight="bold">
          📍 Our Location
        </Typography>
        <Typography variant="body1">1234 Street Name, City, Country</Typography>
        <Typography variant="body1">📞 +1 234 567 890</Typography>
        <Typography variant="body1">📧 contact@company.com</Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          📩 Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          We'd love to hear from you! Fill out the form below and we'll get back
          to you.
        </Typography>

        <form >
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
  );
};

export default ContactPage;

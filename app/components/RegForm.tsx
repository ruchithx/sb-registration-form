// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import { RegisterProvider } from "./RegisterContext";
import RegisterForm from "./RegisterForm";

const RegForm = () => {
  return (
    <RegisterProvider>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h3" mt={4} component="h2">
              Register Page
            </Typography>
          </Grid>
          <Grid item>Welcome to IEEE Student branch Registration!</Grid>
          <Grid item>
            Unlock a world of personalized experiences by creating your account.
            Join our community of [describe your audience, e.g., enthusiasts,
            users, members] and take advantage of exclusive features
          </Grid>
          <Grid item mt={5}>
            <RegisterForm />
          </Grid>
        </Grid>
      </Container>
    </RegisterProvider>
  );
};

export default RegForm;

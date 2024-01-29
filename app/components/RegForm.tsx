// import { ThemeProvider, createTheme } from "@mui/material/styles";
"use client";

import { useEffect } from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { RegisterProvider } from "./RegisterContext";
import RegisterForm from "./RegisterForm";
import { gsap } from "gsap";
import style from "./../form.module.css";

const RegForm = () => {
  useEffect(() => {
    gsap.fromTo(
      ".topic",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5, y: -10, ease: "back" }
    );
    gsap.fromTo(
      "#sub-topic",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1, y: -10, ease: "back" }
    );
    gsap.fromTo(
      "#description",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5, y: -10, ease: "back" }
    );
  }, []);

  return (
    <Typography
      className={style.main}
      component="div"
      sx={{
        typography: {
          lg: { marginLeft: 60, marginRight: 50 },
          md: { marginLeft: 0, marginRight: 0 },
        },
      }}
    >
      <RegisterProvider>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={style.background}
          sx={{
            borderRadius: 15,
            marginRight: 15,
          }}
        >
          <Grid item>
            <Typography variant="h4" mt={4} component="h2">
              <div className={style.formFont} style={{ textAlign: "center" }}>
                <p>Application for Membership of IEEE Student Branch</p>
                <p>University of Moratuwa</p>
                <p>Term '23/24</p>
              </div>
            </Typography>
          </Grid>

          <Grid item>
            <div
              className={style.formFont2}
              id="description"
              style={{ textAlign: "center" }}
            >
              <Typography
                sx={{
                  typography: {
                    md: { fontSize: 11 },
                    lg: { fontSize: 14, padding: 5 },
                    fontFamily: "Amenti Regular",
                  },
                }}
              >
                <>
                  IEEE Student Branch of University of Moratuwa , is ready to
                  redefine the pathway that leading to a remarkable attainment.
                </>
                <>
                  IEEE (Institute of Electrical and Electronics Engineers) is
                  the world’s largest technical professional organization
                  dedicated to inspiring a global community to innovate for a
                  better tomorrow. IEEE Student Branch University of Moratuwa
                  will help you to reach the global and local communities,
                  connect with professionals of countless technical fields and
                  have the best volunteering experience.
                </>
                With great pleasure we open Applications for Membership of IEEE
                Student Branch for term 22/23.
                <> Trust the magic of new beginnings.</>
              </Typography>
            </div>
          </Grid>
          <Grid item mt={5}>
            <RegisterForm />
          </Grid>
        </Grid>
      </RegisterProvider>
    </Typography>
  );
};

export default RegForm;

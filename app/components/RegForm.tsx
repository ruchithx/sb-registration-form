// import { ThemeProvider, createTheme } from "@mui/material/styles";
"use client";

import { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { RegisterProvider } from "./RegisterContext";
import RegisterForm from "./RegisterForm";
import { TimelineLite, Power3, gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/all";

// gsap.registerPlugin(ScrollSmoother);
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const smoother = ScrollSmoother.create({});

const RegForm = () => {
  // let t1 = new TimelineLite({ delay: 0.3 });

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
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h4" mt={4} component="h2">
            <div className="topic" style={{ textAlign: "center" }}>
              <p>Application for Membership of IEEE Student Branch</p>
              <p>University of Moratuwa</p> Term '23/24
            </div>
          </Typography>
        </Grid>
        <Grid item sx={{ fontSize: 18 }}>
          <div id="description" style={{ textAlign: "center" }}>
            <Typography
              sx={{
                typography: { md: { fontSize: 13 }, lg: { fontSize: 17 } },
              }}
            >
              <>
                IEEE Student Branch of University of Moratuwa , is ready to
                redefine the pathway that leading to a remarkable attainment.
              </>
              <>
                IEEE (Institute of Electrical and Electronics Engineers) is the
                world’s largest technical professional organization dedicated to
                inspiring a global community to innovate for a better tomorrow.
                IEEE Student Branch University of Moratuwa will help you to
                reach the global and local communities, connect with
                professionals of countless technical fields and have the best
                volunteering experience.
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
    </Container>
  );
};

export default RegForm;

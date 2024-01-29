"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { darkTheme } from "./providers/darkModeProvider";

import RegForm from "./components/RegForm";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RegForm />
      </ThemeProvider>
    </div>
  );
}

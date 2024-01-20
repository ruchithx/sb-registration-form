"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { darkTheme } from "./providers/darkModeProvider";

import RegForm from "./components/RegForm";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RegForm />
      </ThemeProvider>
    </div>
  );
}

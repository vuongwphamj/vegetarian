"use client";
import * as React from "react";

import ProductHero from "@modules/views/AppBody";
import AppHeader from "@modules/views/AppHeader";
import AppFooter from "@modules/views/AppFooter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@modules/theme";

function Index() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Fragment>
          <AppHeader />
          <ProductHero />
          <AppFooter />
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Index;

import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import SearchSection from "./components/SearchSection";
import Popular from "./components/Popular";
import CarLogo from "./components/CarLogo";
import HowItWorks from "./components/HowItWorks";
import Banner from "./components/Banner";
import MidLayer from "./components/MidLayer";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Box sx={{ paddingX: "100px" }}>
        <Header />
        <IntroSection />
        <SearchSection />
        <Popular />
        <CarLogo />
        <HowItWorks />
      </Box>
      <Box>
        <Banner />
      </Box>
      <Box sx={{ paddingX: "100px", justifyContent: "center", display: "flex" }}>
        <MidLayer />
      </Box>
      <Box sx={{ paddingX: "100px" }}>
        <Testimonial />
      </Box>
      <Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
}

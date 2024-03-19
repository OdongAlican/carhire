"use client"
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
import ModalComponent from "./modals/Modal";
import Login from "./login";

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40%",
  bgcolor: 'background.paper',
  borderRadius: '5px',
  p: 4,
};

export default function Home() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      {
        open ? <ModalComponent
          style={style}
          open={open}
          handleClose={handleClose}>
          <Login />
        </ModalComponent> : null
      }
      <Box sx={{ paddingX: "100px" }}>
        <Header handleOpen={handleOpen} />
        <IntroSection />
        <SearchSection />
        <Popular header="Most Popular" />
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

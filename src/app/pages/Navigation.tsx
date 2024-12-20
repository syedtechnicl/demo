"use client";
import React, { useState } from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";

const NavigationBar = () => {
  // Initialize state for drawer open/close
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };

  // Navbar configuration
  const navbarProps = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "SKILLS",
        link: "#skills",
      },
      {
        text: "CONTACT",
        link: "#Contact",
      },
      {
        text: "EXPERIENCE",
        link: "#exp",
      },
      {
        text: "PROJECTS",
        link: "#project",
      },
      {
        text: "EDUCATION",
        link: "#education", // Fixed typo from "edugation" to "education"
      },
    ],
    logo: {
      text: "", // Optional logo text if needed
    },
  };

  return (
    <Navbar
      {...navbarProps}
      isDrawerOpen={isDrawerOpen}
      onDrawerToggle={() => setIsDrawerOpen(!isDrawerOpen)} // Toggle drawer state
      onLinkClick={handleLinkClick} // Close drawer on link click
    />
  );
};

export default NavigationBar;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionProps } from "@/types";

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  background = "primary",
  ...props
}) => {
  const baseClasses = "section";
  const backgroundClasses = {
    primary: "",
    secondary: "",
    accent: "",
  };

  const classes = `${baseClasses} ${backgroundClasses[background]} ${className}`;

  let sectionStyle = {};
  if (background === "primary") {
    sectionStyle = {
      background: "rgba(177,156,217,0.10)",
      backdropFilter: "blur(6px)",
    };
  } else if (background === "secondary") {
    sectionStyle = {
      background: "rgba(177,156,217,0.16)",
      backdropFilter: "blur(8px)",
    };
  } else if (background === "accent") {
    sectionStyle = {
      background:
        "linear-gradient(135deg, rgba(177,156,217,0.12) 0%, rgba(255,179,217,0.10) 100%)",
      backdropFilter: "blur(10px)",
    };
  }

  return (
    <motion.section
      id={id}
      className={classes}
      style={sectionStyle}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
};

export default Section;

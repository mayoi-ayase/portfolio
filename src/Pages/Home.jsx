import React from "react";
import { motion } from "motion/react";

function Home() {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      Placeholder until I have an image here.................
    </motion.div>
  );
}

export default Home;

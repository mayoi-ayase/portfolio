import "./App.css";
import { AnimatePresence } from "motion/react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Commissions from "./Pages/Commissions";
import Art from "./Pages/Art";
import Videos from "./Pages/Videos";
import Vocals from "./Pages/Vocals";
import Contact from "./Pages/Contact";
import React from "react";

function App() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="commissions" element={<Commissions />} />
            <Route path="art" element={<Art open={open} setOpen={setOpen} />} />
            <Route path="videos" element={<Videos />} />
            <Route path="vocals" element={<Vocals />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

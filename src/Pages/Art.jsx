import { motion } from "motion/react";
import ArtGallery from "../Components/ArtGallery";
import { Modal } from "react-responsive-modal";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Art({ open, setOpen }) {
  const modalRef = useRef(null);

  const portfolioArt = [
    {
      src: "/portfolio/2024_1. Ghosts of summer.webp",
      width: 1920,
      height: 1080,
      selfNote: "natsu no obake",
      description: "2024",
    },
    {
      src: "/portfolio/2024_17. evil shinomayo.webp",
      width: 3500,
      height: 2250,
      selfNote: "angelghost",
      description: "2024",
    },
    {
      src: "/portfolio/2024_20. rengelic paint.webp",
      width: 1200,
      height: 1032,
      selfNote: "rengelic 2024",
      description: "2024",
    },
    {
      src: "/portfolio/2024_25. affocreme.webp",
      width: 1950,
      height: 1250,
      selfNote: "affocreme",
      description: "2024",
    },
    {
      src: "/portfolio/2024_28. ganbatta.webp",
      width: 2880,
      height: 2635,
      selfNote: "angelghost2",
      description: "2024",
    },
    {
      src: "/portfolio/2024_30. happy smiley.webp",
      width: 2880,
      height: 4036,
      selfNote: "raika",
      description: "2024",
    },
    {
      src: "/portfolio/2025_4. yuroi.webp",
      width: 3000,
      height: 2000,
      selfNote: "yuri mayoi",
      description: "2024",
    },
    {
      src: "/portfolio/2025_5. jiraiyoi.webp",
      width: 2000,
      height: 3000,
      selfNote: "jiriai mayoi",
      description: "2025",
    },
    {
      src: "/portfolio/2025_14. hehe.webp",
      width: 1818,
      height: 2146,
      selfNote: "myoxie",
      description: "2025",
    },
    {
      src: "/portfolio/2025_18. may10.webp",
      width: 1991,
      height: 3593,
      selfNote: "maid day 2025",
      description: "2025",
    },
    {
      src: "/portfolio/2025_22. YURI!!!!!!!!!!!!!!!!!!!.webp",
      width: 2377,
      height: 2454,
      selfNote: "shinomayo yuri jirai4jirai",
      description: "2025",
    },
    {
      src: "/portfolio/2025_23. mesmerizer1.webp",
      width: 2388,
      height: 1668,
      selfNote: "rengelic mesmerizer",
      description: "2025",
    },
    {
      src: "/portfolio/2025_25. ummm.webp",
      width: 2227,
      height: 2530,
      selfNote: "angelkun",
      description: "2025",
    },
    {
      src: "/portfolio/2025_27. easy peasy.webp",
      width: 2388,
      height: 1668,
      selfNote: "rakuraku mayoi",
      description: "2025",
    },
    {
      src: "/portfolio/2025_30. terrible.webp",
      width: 2500,
      height: 2000,
      selfNote: "T E R R I B L E",
      description: "2025",
    },
    {
      src: "/portfolio/2026_1. makkana.webp",
      width: 2234,
      height: 2500,
      selfNote: "makkana",
      description: "2026",
    },
    {
      src: "/portfolio/2026_2. jiraiyoi fixed.webp",
      width: 2500,
      height: 2500,
      selfNote: "moe jiraiyoi",
      description: "2026",
    },
  ];

  portfolioArt.reverse();

  return (
    <motion.div
      initial={{ transform: "translateY(20px)" }}
      animate={{
        transform: "translateY(0)",
        transition: {
          default: { type: "spring", duration: 0.6 },
        },
      }}
    >
      <h1>Artworks</h1>
      {/* MODAL */}
      <Modal
        center
        closeOnOverlayClick={false}
        ref={modalRef}
        open={open}
        onClose={() => setOpen(false)}
        initialFocusRef={modalRef}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        {/* MODAL CONTENT */}
        <h2>Disclaimer</h2>
        <div className="disclaimer">
          <p>
            I tend to explore dark topics in my art, so there are pieces in my
            portfolio which contain themes and depictions of{" "}
            <b>self-harm, mental illness, suicide, blood,</b> and{" "}
            <b>violence.</b>
          </p>
          <p>
            If you find any of these topics distressing, I would advise you to{" "}
            <Link to="/">return to the home page.</Link>
          </p>
        </div>

        <div className="buttonWrapper">
          <Link
            className="modal-btn button"
            onClick={() => setOpen(true)}
            to="/"
          >
            Back to Home
          </Link>

          <div
            className="modal-btn button art-btn"
            onClick={() => setOpen(false)}
          >
            View Art
          </div>
        </div>
        {/*  */}
      </Modal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <ArtGallery
          slides={portfolioArt}
          rowMaxHeight={{ singleRowMaxHeight: 500 }}
        />
        <Modal />
      </motion.div>
    </motion.div>
  );
}

export default Art;

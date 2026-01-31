import Gallery from "../Components/Gallery";
import { motion } from "motion/react";

// const headshot

const headshot = [
  {
    src: "/cm_examples/headshot_1 .webp",
    width: 1500,
    height: 1500,
    selfNote: "mayoi headshot",
  },
];

const halfbody = [
  {
    src: "/cm_examples/halfbody_1 .webp",
    width: 1670,
    height: 1500,
    selfNote: "rinmayo",
  },
  {
    src: "/cm_examples/halfbody_2 .webp",
    width: 1453,
    height: 1500,
    selfNote: "jk shinomayo",
  },
];

const kneeup = [
  {
    src: "/cm_examples/kneeup_1 .webp",
    width: 1070,
    height: 1500,
    selfNote: "raika",
  },
  {
    src: "/cm_examples/kneeup_2 .webp",
    width: 1453,
    height: 2251,
    selfNote: "jk mayoi",
  },
];

const fullbody = [
  {
    src: "/cm_examples/fullbody_1 .webp",
    width: 1000,
    height: 2451,
    selfNote: "angelkun",
  },
  {
    src: "/cm_examples/fullbody_2 .webp",
    width: 1000,
    height: 2451,
    selfNote: "ghostsan",
  },
  {
    src: "/cm_examples/fullbody_3 .webp",
    width: 1000,
    height: 2668,
    selfNote: "momo",
  },
  {
    src: "/cm_examples/fullbody_4 .webp",
    width: 1000,
    height: 2462,
    selfNote: "yukio",
  },
  {
    src: "/cm_examples/fullbody_5 .webp",
    width: 1000,
    height: 2856,
    selfNote: "haruto",
  },
];

const misc = [
  {
    src: "/cm_examples/misc_1 .webp",
    width: 1000,
    height: 1000,
    selfNote: "angelstamp",
  },
  {
    src: "/cm_examples/misc_2 .webp",
    width: 1000,
    height: 1000,
    selfNote: "ghoststamp",
  },
  {
    src: "/cm_examples/misc_3 .webp",
    width: 1000,
    height: 1308,
    selfNote: "ten moe",
  },
  {
    src: "/cm_examples/misc_4 .webp",
    width: 1182,
    height: 1000,
    selfNote: "squidbob",
  },
  {
    src: "/cm_examples/misc_5 .webp",
    width: 1000,
    height: 1136,
    selfNote: "angelkun blue",
  },
  {
    src: "/cm_examples/misc_6 .webp",
    width: 1000,
    height: 1000,
    selfNote: "jirai mayoi moe",
  },
];

function Commissions() {
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
      <h1>Commission Info</h1>
      <div className="button">
        <h3>TOS & Contact</h3>
      </div>

      {/* PRICES SECTION START */}
      <h2>Prices</h2>
      {/* HEADSHOT START */}
      <h3>Headshot / Icon</h3>
      <div className="serviceSection">
        <div className="serviceGallery">
          <Gallery
            slides={headshot}
            rowMaxHeight={{ singleRowMaxHeight: 250 }}
          />
        </div>
        <div className="servicePrices">
          <p>
            Specify bust or icon. <strong>Max 1 character per canvas.</strong>
          </p>
          <p>1 character: US$15</p>
          <p>Matching icons: US$25</p>
        </div>
      </div>
      {/* HEADSHOT END */}

      <h3>Halfbody</h3>
      <div className="serviceSection">
        <div className="serviceGallery">
          <Gallery
            slides={halfbody}
            rowMaxHeight={{ singleRowMaxHeight: 250 }}
          />
        </div>
        <div className="servicePrices">
          <p>
            <strong>Max 2 characters per canvas.</strong>
          </p>
          <p>1 character: US$35</p>
          <p>2 characters: US$50</p>
        </div>
      </div>
      {/* HALFBODY END */}

      {/* KNEEUP START */}
      <h3>Knee-up</h3>
      <div className="serviceSection">
        <div className="serviceGallery">
          <Gallery slides={kneeup} rowMaxHeight={{ singleRowMaxHeight: 250 }} />
        </div>
        <div className="servicePrices">
          <p>
            <strong>Max 2 characters per canvas.</strong>
          </p>
          <p>1 character: US$45</p>
          <p>2 characters: US$70</p>
        </div>
      </div>
      {/* KNEEUP END */}

      {/* FULLBODY START */}
      <h3>Character Fullbody</h3>
      <div className="serviceSection">
        <div className="serviceGallery fullbody">
          <Gallery
            slides={fullbody}
            rowMaxHeight={{ singleRowMaxHeight: 300 }}
          />
        </div>
        <div className="servicePrices">
          <p>
            <strong>Max 1 character per canvas. Transparent background.</strong>
          </p>
          <p>Flat colors: US$35</p>
          <p>Rendered: US$60</p>
        </div>
      </div>
      {/* FULLBODY END */}

      {/* MISC START */}
      <h3>Other Styles / Experimental</h3>
      <div className="serviceSection">
        <div className="serviceGallery">
          <Gallery slides={misc} rowMaxHeight={{ singleRowMaxHeight: 250 }} />
        </div>
        <div className="servicePrices misc">
          <p>
            If there's a particular style I've drawn before that you'd like to
            order that's not covered by the above options, you may contact me
            with the details and I would be happy to give you a quote.
          </p>
          <p>
            I have experience with drawing stamp/sticker-like drawings, chibi
            styles, and doing art style imitations (i.e. MV screencap redraws),
            for example.
          </p>
          <p>
            I am open to trying different styles and services, so feel free to
            contact me with your request. I will deny it if I feel it's outside
            the scope of my ability.
          </p>
        </div>
      </div>
      {/* MISC END */}
    </motion.div>
  );
}

export default Commissions;

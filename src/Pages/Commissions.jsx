import Gallery from "../Components/Gallery";
import { motion } from "motion/react";
import { Modal } from "react-responsive-modal";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

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
  const modalRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ transform: "translateY(20px)" }}
      animate={{
        transform: "translateY(0)",
        transition: {
          default: { type: "spring", duration: 0.6 },
        },
      }}
      className="serviceWrapperMobile"
    >
      <h1>Commission Info</h1>
      <div onClick={() => setOpen(true)} className="button tosButton">
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
          <p>1 character: US$20</p>
          <p>Matching icons: US$30</p>
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
          <p>1 character: US$40</p>
          <p>2 characters: US$60</p>
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
        <Modal
          center
          ref={modalRef}
          open={open}
          onClose={() => setOpen(false)}
          initialFocusRef={modalRef}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <div className="tosContact">
            <div className="tosWrapper">
              <h2>Terms of Service</h2>
              <div className="tosBody">
                <h4>Skillset</h4>
                <div className="skillsetWrapper tosList">
                  <div className="tosCan">
                    <h5>Can do —</h5>
                    <ul>
                      <li>Dark atmospheres ☆</li>
                      <li>Solo character ☆</li>
                      <li>Blood, wounds, light gore ☆</li>
                      <li>OC / Fanart</li>
                      <li>Furry</li>
                      <li>Ship / couple art (BL / GL / HL / Yume all OK!)</li>
                      <li>Suggestive</li>
                    </ul>
                  </div>
                  <div className="tosCant">
                    <h5>Cannot do —</h5>
                    <ul>
                      <li>NSFW</li>
                      <li>Heavy gore</li>
                      <li>Mecha</li>
                      <li>
                        Incest, violent or suggestive art of underage
                        characters, age gap
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="skillsetPara">
                  The characters I like to draw most are bishounen, bishoujo,
                  and furry characters. I believe my art style is most suited
                  for this style of character.
                </p>
                <h3>General Terms</h3>
                <p>
                  I accept requests at my own discretion - if I feel I cannot
                  fulfill a request for any reason, I will not accept it. My
                  apologies.
                </p>

                <h4>Personal Use</h4>
                <p>
                  Do <strong>not</strong> claim the finished illustration as
                  your own work. Do <strong>not</strong> use my artwork for
                  AI/NFT. Do <strong>not</strong> use the illustration in any
                  manner that falls under my commercial use criteria.
                </p>
                <p>
                  Besides that, you are free to do as you wish with the
                  illustration, for example:
                </p>
                <ul className="tosList">
                  <li>Usage on social media, Carrds, Rentry, etc.</li>
                  <li>
                    Non-profit personal merchandise printing (e.g. making +
                    ordering a sticker just for yourself or as a gift for a
                    friend)
                  </li>
                  <li>Tracing or editing</li>
                  <li>Reposting</li>
                </ul>
                <p>
                  Credit in any form is completely optional, as long as you do
                  not claim my work as your own.
                </p>
                <h4>Commercial Use</h4>
                <p>
                  The commercial use fee is typically +100% of the final price
                  for illustration services, though this may be subject to
                  change. Please contact me for a quote.
                </p>
                <p>
                  <em>
                    Do not use the illustration in any manner listed below
                    unless you have paid the commercial use fee.
                  </em>{" "}
                </p>

                <ul className="tosList">
                  <li>Promotional use</li>
                  <li>Stream assets</li>
                </ul>
                <p>
                  If you have any other questions about a specific scenario in
                  which you would like to use the illustration commercially, you
                  are free to ask.
                </p>
                <p>
                  The only absolutely forbidden use case is commercial
                  merchandise production. Under no circumstance will I allow
                  this. My apologies. 🙇
                </p>
                <h4>Payment & Delivery</h4>
                <p>
                  <strong>
                    This is for email communication. Please see my{" "}
                    <Link to="/contact">Contact</Link> page for payment and
                    delivery information if commissioning via VGen.
                  </strong>
                </p>
                <p>
                  Payment via PayPal or Ko-fi. If you are Australian, I also
                  accept PayID and bank transfer.
                </p>
                <p>
                  You may choose to either send payment{" "}
                  <strong>before I begin the illustration</strong>, or{" "}
                  <strong>immediately before final delivery.</strong>
                </p>
                <p>
                  If applicable, I will provide transparent and unfiltered
                  versions. Delivery via Google Drive.
                </p>
                <h4>Deadlines & Refunds</h4>
                <p>
                  Turnaround is between 1 - 4 weeks.You are free to request a
                  refund if 6 weeks have elapsed without the finished piece.
                </p>
                <h3>Contact</h3>
                <p>
                  Please see my <Link to="/contact">Contact</Link> page for
                  contact details and commission status.
                </p>
                <p>
                  Feel free to email me if you have any inquiries or a
                  commission request. You are also free to message me on VGen
                  for instant communication, but do note that any transactions
                  initiated on VGen cannot be moved off-platform.
                </p>
                <div className="buttonWrapper">
                  <div
                    className="button modal-btn art-btn"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      {/* MISC END */}
    </motion.div>
  );
}

export default Commissions;

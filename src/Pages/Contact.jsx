import { motion } from "motion/react";
import { Modal } from "react-responsive-modal";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const modalRef = useRef(null);
  const otherModalRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openOther, setOpenOther] = useState(false);
  const [slideToggle, setSlideToggle] = useState("none");
  const [chevron, setChevron] = useState("Show Form");
  const [arrow, setArrow] = useState(<FontAwesomeIcon icon={faAngleDown} />);

  function slideToggleChange() {
    if (slideToggle == "none") {
      setSlideToggle("block");
      setChevron("Hide Form");
      setArrow(<FontAwesomeIcon icon={faAngleUp} />);
    } else if (slideToggle == "block") {
      setSlideToggle("none");
      setChevron("Show Form");
      setArrow(<FontAwesomeIcon icon={faAngleDown} />);
    }
  }

  return (
    <motion.div
      initial={{ transform: "translateY(20px)" }}
      animate={{
        transform: "translateY(0)",
        transition: { default: { type: "spring", duration: 0.6 } },
      }}
    >
      <h1>About & Contact</h1>
      <h2>Contact</h2>
      <div className="contactText">
        <h4>Commission Status</h4>
        <h5>
          Commissions are... kind of open! Feel free to send a request — if I am
          unable to accept it immediately, I will move your request to a
          waitlist and contact you again once I am able to accept it.
        </h5>
        <h4>Contact Methods</h4>
        <p>
          The most effective way to reach me for anything commission/art related
          is via VGen. Feel free to either message or send a request. Note that
          any transactions initiated on VGen cannot be moved off-platform.
        </p>
        <p>
          You can also email me about commissions or any inquiries you may have.
          I am happy to discuss any questions, or potentially if you think I may
          be able to offer a service I have not outlined on my commissions page,
          I am open to discuss that as well.
        </p>
        <div className="cnButtonWrapper">
          {" "}
          <div className="buttonWrapper">
            <div onClick={() => setOpen(true)} className="button contactBtn">
              <FontAwesomeIcon className="emailIcon" icon={faEnvelope} />
              Email
            </div>{" "}
            <div
              onClick={() => setOpenOther(true)}
              className="button contactBtn"
            >
              <img className="vgenIcon" src="/icons/vgenIcon.png" /> VGen
            </div>
          </div>
        </div>
      </div>
      <h2>About</h2>
      <div className="aboutText">
        <p>I saved this for the very end because it's rather dull...</p>
        <p>
          Hello. My name is uq9_k, you may also know me as ryuseiyellow or
          (´・ω・｀).
        </p>
        <p>
          I am an artist with a passion for creating fanworks, whether that be
          for Ensemble Stars, vocal synths (VOCALOID), or anything else that may
          catch my interest.
        </p>
        <p>
          I try to do the most I can in any works I create, and I highly value{" "}
          <em>doing things properly,</em> whether that be dedicatedly creating
          videos, covers, or artworks. In fact, I also built this website myself
          from the ground up with React!{" "}
          <em>
            (I really consider myself a jack of all trades, master of none, to
            be honest...)
          </em>
        </p>
        <p>
          There's not much interesting about me to say... My favorite characters
          to make fanworks for are Shinobu Sengoku and Mayoi Ayase, clearly. I
          love the Ninja Club, and I'm a NoritamaP. I also like to use different
          vocal synths, but my favorite by far is Kagamine Len.
        </p>
        <p>
          Besides my more intensive projects, I love to explore both darkness
          and cuteness in my art. I have an affinity towards illustrating
          violent or painful scenes, as well as sparkly pink and lacey clothes.
          I love pretty things, and expressing suffering through my works.
        </p>
        <p>
          My most important goal with my project is to realize my{" "}
          <a
            target="_blank"
            href="https://ensemble-stars.fandom.com/wiki/Green_to_the_sky_(Lyrics)#cite_note-2"
          >
            "likes"
          </a>{" "}
          through my fanworks, and to bring happiness to like-minded people.
          Thank you for supporting my work thus far.
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
        <h2>Email Info</h2>
        <div className="emailPara">
          <p>
            You can contact me at{" "}
            <b className="yippee">ryuseiyellowtl@gmail.com</b>.
          </p>
          <p>
            You can email me if you have any questions! I will reply as soon as
            I see it.{" "}
            <b>I may decline or waitlist commission requests for any reason.</b>
          </p>
          <p>
            If you have a commission request, feel free to fill out and send the
            following commission request form, and I will provide a quote.
          </p>
          <p className="slideToggleBtn" onClick={() => slideToggleChange()}>
            <b>
              {arrow} {chevron}
            </b>
          </p>
          <motion.div
            animate={
              slideToggle == "block"
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -5 }
            }
            transition={{ duration: 0.3 }}
            style={{ display: slideToggle }}
          >
            <div className="requestForm">
              <p>
                <b>Name / Username:</b>{" "}
                <span style={{ opacity: 0.7 }}>[ ... ]</span>
              </p>
              <p>
                <b>Preferred communication platform:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ Email / Twitter |{" "}
                  <em>
                    If Twitter, please provide username and ensure you are
                    following @uq9_k
                  </em>{" "}
                  ]
                </span>
              </p>
              <p>
                <b>Service type:</b>{" "}
                <span style={{ opacity: 0.7 }}>[ ... ]</span>
              </p>
              <p>
                <b>References:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ Visual references are required. ]
                </span>
              </p>
              <p>
                <b>Brief/Request details:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ The more detail the better. Images appreciated. ]
                </span>
              </p>
              <p>
                <b>Other notes:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ Any other details or information if applicable. ]
                </span>
              </p>
              <p>
                <b>Payment method?:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ PayPal / Ko-Fi / 🇦🇺 Bank transfer / 🇦🇺 PayID ]
                </span>
              </p>
              <p>
                <b>Preferred payment time?:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ Before commencement of illustration / Before delivery of
                  illustration / 50% before commencement, 50% before delivery ]
                </span>
              </p>
              <p>
                <b>Commercial use?:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ Yes / No | <em>A commercial use fee will apply.</em> ]
                </span>
              </p>
              <p>
                <b>Do you have a deadline?:</b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ Yes / No | <em>A rush fee will apply.</em> ]
                </span>
              </p>

              <p>
                <b>
                  May I post this artwork on social media / use as a commission
                  example?:
                </b>{" "}
                <span style={{ opacity: 0.7 }}>
                  [ Yes, @ me in post / Yes, keep me anonymous / No |{" "}
                  <em>
                    There is no guarantee that I post the finished piece even if
                    you say yes here. If I don't have your social media details,
                    I may not @ you.
                  </em>{" "}
                  ]
                </span>
              </p>
            </div>
          </motion.div>
          <p>
            Alternatively, you can message me or send commission requests
            through{" "}
            <a href="https://vgen.co/mayoiayase" target="_blank">
              VGen.
            </a>
          </p>
        </div>

        <div className="buttonWrapper">
          <a
            className="button modal-btn"
            href="mailTo:ryuseiyellowtl@gmail.com"
          >
            <FontAwesomeIcon className="emailIcon" icon={faEnvelope} /> To Email
          </a>
          <div
            onClick={() => setOpen(false)}
            className="button modal-btn art-btn"
          >
            Close
          </div>
        </div>
      </Modal>
      <Modal
        center
        ref={otherModalRef}
        open={openOther}
        onClose={() => setOpenOther(false)}
        initialFocusRef={otherModalRef}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <h2>VGen Info</h2>
        <div className="emailPara">
          <p>
            Feel free to submit a request through VGen if my services are open
            or on waitlist!{" "}
            <b>I may decline or waitlist requests for any reason.</b>
          </p>
          <p>
            If you are interested in something not covered by the available
            services, you may message me directly on VGen or submit a{" "}
            <a
              href="https://vgen.co/mayoiayase/service/custom-inquiry/ebfaf1c7-e561-487d-a071-378f8923d41c"
              target="_blank"
            >
              custom inquiry.
            </a>
          </p>
          <p>
            Note that all payments made through VGen will take place before
            commencement of the commission.
          </p>
        </div>
        <div className="buttonWrapper fuckingHelpMe">
          <a
            className="button modal-btn"
            href="https://vgen.co/mayoiayase"
            target="_blank"
          >
            <span className="vGenIconContainer">
              <img className="vgenIcon" src="/icons/vgenIcon.png" /> To VGen
            </span>{" "}
          </a>
          <div
            onClick={() => setOpenOther(false)}
            className="button modal-btn art-btn"
          >
            <span className="vGenIconContainer">Close</span>{" "}
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}

export default Contact;

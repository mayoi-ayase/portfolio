import { motion } from "motion/react";

function Contact() {
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
        <p>
          The most effective way to reach me for anything commission/art related
          is via VGen. Feel free to either message or send a request. Note that
          any transactions initiated on VGen cannot be moved off-platform.
        </p>
        <p>
          You can also email me at ryuseiyellowtl@gmail.com about commissions or
          enquiries.
        </p>
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
    </motion.div>
  );
}

export default Contact;

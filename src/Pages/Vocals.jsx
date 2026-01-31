import { motion } from "motion/react";
import CoverCard from "../Components/CoverCard";
import SoundcloudCard from "../Components/SoundcloudCard";
import VsynthGallery from "../Components/VsynthGallery";

function Vocals() {
  const synthV = [
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/4512327a.png?v=aafd726bp",
      link: "https://www.ah-soft.com/synth-v/teto/index.html",
      width: 150,
      height: 150,
      name: "Kasane Teto AI",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/006ba39e.png?v=aafd726b",
      link: "https://www.ah-soft.com/synth-v/rikka/",
      width: 150,
      height: 150,
      name: "☆ Koharu Rikka AI",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/c0d04617.png?v=aafd726b",
      link: "https://synthv.fandom.com/wiki/ANRI_(Synthesizer_V_Studio)",
      width: 150,
      height: 150,
      name: "ANRI",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/90e52bbc.jpg?v=aafd726b",
      link: "https://eclipsedsounds.com/pages/sc/solaria",
      width: 150,
      height: 150,
      name: "SOLARIA",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/e8810caa.jpg?v=aafd726b",
      link: "https://synthv.fandom.com/wiki/Kevin_(Synthesizer_V_Studio)",
      width: 150,
      height: 150,
      name: "Kevin",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/52bbe965.png?v=aafd726b",
      link: "https://www.ah-soft.com/synth-v/iroha2/",
      width: 150,
      height: 150,
      name: "Nekomura Iroha SV2",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/2cc6ab67.png?v=aafd726b",
      link: "https://www.ah-soft.com/synth-v/moca2/index.html",
      width: 150,
      height: 150,
      name: "Miyamai Moca SV2",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery17/7368ab12.jpg?v=aafd726b",
      link: "https://store.dreamtonics.com/product/yuma-2-voice-database/",
      width: 150,
      height: 150,
      name: "Yuma 2",
    },
  ];

  const vocaloid = [
    {
      src: "https://mayoi.crd.co/assets/images/gallery16/82acbc50.jpg?v=aafd726b",
      link: "https://sonicwire.com/product/virtualsinger/special/rinlenv4x?lang=en",
      width: 150,
      height: 150,
      name: "☆ Kagamine Rin/Len V4X",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery16/1d9d880c.jpg?v=aafd726b",
      link: "https://ec.crypton.co.jp/pages/prod/virtualsinger/cv01",
      width: 150,
      height: 150,
      name: "☆ Hatsune Miku V2",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery16/8c881698.jpg?v=aafd726b",
      link: "https://www.ah-soft.com/vocaloid/yuki/index.html",
      width: 150,
      height: 150,
      name: "Kaai Yuki V4",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery16/15e8918a.jpg?v=aafd726b",
      link: "https://www.ssw.co.jp/products/vocaloid6/megpoid/index.html",
      width: 150,
      height: 150,
      name: "Megpoid AI",
    },
  ];

  const cevio = [
    {
      src: "https://mayoi.crd.co/assets/images/gallery06/d6ebbf9b.jpg?v=aafd726b",
      link: "https://musical-isotope.kamitsubaki.jp/product/kafu/",
      width: 150,
      height: 150,
      name: "KAFU",
    },
  ];

  const jinriki = [
    {
      src: "https://mayoi.crd.co/assets/images/gallery14/1c7cee55.jpg?v=aafd726b",
      width: 150,
      height: 150,
      name: "Mayoi Ayase",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery14/1496fb17.jpg?v=aafd726b",
      width: 150,
      height: 150,
      name: "Rinne Amagi",
    },
    {
      src: "https://mayoi.crd.co/assets/images/gallery14/5509ce73.jpg?v=aafd726b",
      width: 150,
      height: 150,
      name: "Shinobu Sengoku",
    },
  ];

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
      <h1>Vocal Synths</h1>
      <h2>Covers</h2>
      {/* HAIKEI */}
      <CoverCard
        id="weMbKT-DYJI"
        title="Dear (English Cover)"
        date="August 26, 2025"
        vocals="Koharu Rikka"
        originalProducer="PEPOYO"
        uploadLink="https://www.youtube.com/watch?v=rvf74ZentYo"
        fileType="UST"
        ustBy="hksickroom"
        ustLink="https://hksickroom.wixsite.com/shironiwa"
        translationBy="MeaningfulUsername"
        translationLink="https://vocaloidlyrics.miraheze.org/wiki/%E6%8B%9D%E5%95%93_(Haikei)/Pepoyo"
      />

      {/* KONTON BOOGIE */}
      <CoverCard
        id="Vz4tdfgQ44Y"
        title="Konton Boogie (English Cover)"
        date="November 13, 2024"
        vocals="SOLARIA Lite"
        originalProducer="jon-YAKITORY"
        uploadLink="https://www.youtube.com/watch?v=1Swg-aBO9eY"
        fileType="VSQx"
        ustBy="ハスKEI"
        ustLink="https://www.youtube.com/watch?v=PdOndQ9Q5l8"
        translationBy="Webb"
        translationLink="https://vocaloidlyrics.miraheze.org/wiki/%E6%B7%B7%E6%B2%8C%E3%83%96%E3%82%AE_(Konton_Boogie)"
      />

      {/* GO TO DAITOKAI */}
      <SoundcloudCard
        id="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2215700720&color=%232b263c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="Go to the Big City"
        date="November 20, 2025"
        vocals="Kagamine Len V4X"
        originalProducer="Tsukiri & Niang Donglong"
        uploadLink="https://www.youtube.com/watch?v=Uc4NBh_kCL4"
        fileType=""
        ustBy=""
        ustLink=""
        translationBy=""
        translationLink=""
      />

      <h2>Collection</h2>
      <p>I just want to show off my collection a little... sorry.</p>
      <p>☆ = Favourite</p>
      <h4 className="fuckmychunguslife">Synthesizer V</h4>
      <div className="vsynthGallery">
        <VsynthGallery slides={synthV} />
      </div>
      <h4 className="fuckmychunguslife">VOCALOID</h4>
      <div className="vsynthGallery">
        <VsynthGallery slides={vocaloid} />
      </div>
      <h4 className="fuckmychunguslife">CeVIO</h4>
      <div className="vsynthGallery">
        <VsynthGallery slides={cevio} />
      </div>
    </motion.div>
  );
}

export default Vocals;

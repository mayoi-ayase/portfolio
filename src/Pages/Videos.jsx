import { motion } from "motion/react";
import VideoCard from "../Components/VideoCard";

function Videos() {
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
      <h1>Videos</h1>
      {/* MATRYOSHKA */}
      <VideoCard
        id="XCkPHFQ3zgo"
        title="Matryoshka"
        date="June 9, 2025"
        description="Based on Hachi's"
        originalName="Matryoshka"
        originalLink="https://www.youtube.com/watch?v=HOz-9FzIDf0"
      />

      {/* WARANINJA */}
      <VideoCard
        id="IJ1taFh7mkI"
        title="Hurricane Sneak Killer, Waraninja"
        date="June 9, 2025"
        description="Inspired by PEPOYO's"
        originalName="Hurricane Sneak Killer, Waraninja"
        originalLink="https://www.youtube.com/watch?v=z1PqHoK4E4A"
      />

      {/* RKRK */}
      <div className="video-card">
        <p className="video-date">June 6, 2025</p>
        <div className="video-section">
          <div className="video-thumbnail">
            <div className="iframe-container">
              <div>
                <iframe
                  className="gdrive-video"
                  src="https://player.vimeo.com/video/1160120774?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="【Enstars Jinriki MV】 Easy-peasy Euthanasia 【Mayoi Ayase】"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="video-description">
            <h2>Easy-peasy Euthanasia</h2>
            <p>
              Inspired by PEPOYO's{" "}
              <a
                className="video-link"
                target="_blank"
                href="https://www.youtube.com/watch?v=1gnISlt_mhU"
              >
                Easy-peasy Euthanasia
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ROTTEN GIRL */}
      <VideoCard
        id="dysSXC4qozA"
        title="Rotten Girl, Grotesque Romance"
        date="November 2, 2024"
        description="Inspired by Machigerita's"
        originalName="Rotten Girl, Grotesque Romance"
        originalLink="https://www.nicovideo.jp/watch/sm7704306"
      />

      {/* BUTCHER VANITY */}
      <VideoCard
        id="xw8v4_vEhVo"
        title="BUTCHER VANITY"
        date="July 24, 2024"
        description="Based on FLAVOR FOLEY's"
        originalName="BUTCHER VANITY"
        originalLink="https://www.youtube.com/watch?v=vjBFftpQxxM"
      />

      {/* TELL ME */}
      <VideoCard
        id="Kw087UYnpP8"
        title="Tell Me"
        date="June 25, 2024"
        description="Original meme by"
        originalName="rambyte"
        originalLink="https://www.youtube.com/watch?v=2EVN1nVLGoc"
      />

      {/* HIMITSU */}
      <VideoCard
        id="BCew23-wqME"
        title="The True Secret of Our Feelings"
        date="June 9, 2024"
        description="Based on the Kill Me Baby ED"
      />

      {/* CLOUD CLOUD FORECAST */}
      <VideoCard
        id="BkFRRxFet3A"
        title="Cloud Cloud Forecast"
        date="May 13, 2024"
        description="Inspired by KikuoHana's"
        originalName="Cloud Cloud Forecast"
        originalLink="https://vocaloidlyrics.miraheze.org/wiki/%E9%9B%B2%E9%9B%B2%E4%BA%88%E5%A0%B1_(Kumo_Kumo_Yohou)"
      />

      {/* DARLING DANCE */}
      <VideoCard
        id="mhblgQgLdKA"
        title="Darling Dance"
        date="November 18, 2023"
        description="Based on Nou's MV for Kairiki Bear's"
        originalName="DARLING DANCE"
        originalLink="https://www.youtube.com/watch?v=Rkrm5foi188"
      />

      {/* SUICIDE SONG */}
      <VideoCard
        id="aj4n3Z_j6YM"
        title="Suicide Song"
        date="June 6, 2023"
        description="Inspired by Nashimoto Ui's"
        originalName="Suicide Song"
        originalLink="https://www.nicovideo.jp/watch/sm16864294"
      />
    </motion.div>
  );
}

export default Videos;

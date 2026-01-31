/* eslint-disable react/prop-types */
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function CoverCard({
  id,
  title,
  date,
  vocals,
  originalProducer,
  uploadLink,
  fileType,
  ustBy,
  ustLink,
  translationBy,
  translationLink,
}) {
  return (
    <div className="video-card">
      <p className="video-date">{date}</p>
      <div className="video-section">
        <div className="video-thumbnail">
          <LiteYouTubeEmbed
            id={id}
            title="Darling Dance"
            lazyLoad={true}
            poster="maxresdefault"
            webp="true"
          />
        </div>
        <div className="video-description">
          <h2>
            {title} {vocals ? `ft. ${vocals}` : ""}
          </h2>

          {/* PRODUCER CREDIT */}
          <p>
            {originalProducer ? (
              <>
                Original:{" "}
                <a className="video-link" target="_blank" href={uploadLink}>
                  {originalProducer}
                </a>
              </>
            ) : (
              ""
            )}
          </p>

          {/* UST CREDIT */}
          <p>
            {ustBy ? (
              <>
                {fileType} Base:{" "}
                <a className="video-link" target="_blank" href={ustLink}>
                  {ustBy}
                </a>
              </>
            ) : (
              ""
            )}
          </p>

          {/* TRANSLATION CREDIT */}

          <p>
            {translationBy ? (
              <>
                Translation Base:{" "}
                <a
                  className="video-link"
                  target="_blank"
                  href={translationLink}
                >
                  {translationBy}
                </a>
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverCard;

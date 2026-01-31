/* eslint-disable react/prop-types */
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function VideoCard({
  id,
  title,
  date,
  vocals,
  description,
  originalName,
  originalLink,
}) {
  return (
    <div className="video-card">
      <p className="video-date">{date}</p>
      <div className="video-section">
        <div className="video-thumbnail">
          <LiteYouTubeEmbed
            id={id}
            title={title}
            lazyLoad={true}
            poster="maxresdefault"
            webp="true"
          />
        </div>
        <div className="video-description">
          <h2>
            {title} {vocals ? `ft. ${vocals}` : ""}
          </h2>
          <p>
            {description}{" "}
            {originalLink ? (
              <a className="video-link" target="_blank" href={originalLink}>
                {originalName}
              </a>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

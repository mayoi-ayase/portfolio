import React from "react";

function SoundcloudCard({
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
          <div className="iframe-container">
            <div>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={id}
              ></iframe>
              <div
                style={{
                  fontSize: "10px",
                  color: "#cccccc",
                  lineBreak: "anywhere",
                  wordBreak: "normal",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontFamily:
                    "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                  fontWeight: 100,
                }}
              ></div>
            </div>
          </div>
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

export default SoundcloudCard;

function VsynthGallery(props) {
  return (
    <>
      <div className="vsynthGallery">
        {props.slides.map((vocal) => (
          <div className="vsynthWrapper" key={vocal.name}>
            <div className="img-wrapper">
              <a href={vocal.link} target="_blank">
                <img className="vsynthImage" src={vocal.src} />
              </a>
            </div>
            <p className="vsynthCaption">{vocal.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default VsynthGallery;

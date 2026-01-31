import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

function ArtGallery(props) {
  const [index, setIndex] = useState(-1);
  return (
    <div className="portfolio-gallery">
      <MasonryPhotoAlbum
        columns="3"
        photos={props.slides}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        plugins={[Captions]}
        captions={{ descriptionTextAlign: "center" }}
        index={index}
        slides={props.slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default ArtGallery;

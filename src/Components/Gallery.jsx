import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

function Gallery(props) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <RowsPhotoAlbum
        photos={props.slides}
        targetRowHeight={250}
        rowConstraints={props.rowMaxHeight}
        onClick={({ index: current }) => setIndex(current)}
        defaultContainerWidth={1000}
      />

      <Lightbox
        index={index}
        slides={props.slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}

export default Gallery;

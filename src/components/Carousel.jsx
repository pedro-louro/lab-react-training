import { useState } from 'react';

const Carousel = ({ images }) => {
  const [image, setImage] = useState(0);

  const imagesLeft = () => {
    if (image <= 0) {
      console.log(images.length);
      setImage(images.length - 1);
    } else {
      setImage((prevImage) => prevImage - 1);
    }
  };
  const imagesRight = () => {
    if (image === images.length - 1) {
      setImage(0);
    } else {
      setImage((prevImage) => prevImage + 1);
    }
  };

  return (
    <div>
      <img src={images[image]} alt="" />
      <button onClick={imagesLeft}>Left</button>
      <button onClick={imagesRight}>Right</button>
    </div>
  );
};
export default Carousel;

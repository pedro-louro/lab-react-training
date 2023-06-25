import noGlasses from '../assets/images/maxence.png';
import Glasses from '../assets/images/maxence-glasses.png';
import { useState } from 'react';

const ClickablePicture = () => {
  const [glasses, setGlasses] = useState(false);
  const clickHandle = () => {
    setGlasses((prevValue) => !prevValue);
  };

  const img = glasses ? Glasses : noGlasses;

  return (
    <div>
      <img src={img} alt="" onClick={clickHandle} />
    </div>
  );
};

export default ClickablePicture;

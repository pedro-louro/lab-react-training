import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const colorHandler = (color, value) => {
    if (color === 'r') {
      setRValue(value);
    } else if (color === 'g') {
      setGValue(value);
    } else if (color === 'b') {
      setBValue(value);
    }
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} changed={colorHandler} />

      <SingleColorPicker color="g" value={gValue} changed={colorHandler} />

      <SingleColorPicker color="b" value={bValue} changed={colorHandler} />
      <div width={120}>
        <p>
          <span
            style={{
              borderStyle: 'solid',
              paddingRight: '10px',
              paddingLeft: '10px',
              backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            }}
          >
            {'   '}
          </span>
          rgb ({`${rValue}, ${gValue}, ${bValue}`})
        </p>
      </div>
    </div>
  );
};
export default RGBColorPicker;

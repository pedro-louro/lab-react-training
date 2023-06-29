const SingleColorPicker = ({ color, value, changed }) => {
  const handleChange = (event) => {
    changed(color, event.target.value);
  };

  let setBackground = '';
  if (color === 'r') {
    setBackground = 'rgb(255, 0, 0)';
  } else if (color === 'g') {
    setBackground = 'rgb(0, 255, 0)';
  } else if (color === 'b') {
    setBackground = 'rgb(0, 0, 255)';
  }

  return (
    <div>
      <span
        style={{
          borderStyle: 'solid',
          paddingRight: '10px',
          paddingLeft: '10px',
          backgroundColor: `${setBackground}`,
        }}
      ></span>
      {'  '}
      <label>{color}</label>
      <input
        type="number"
        min={0}
        max={255}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SingleColorPicker;

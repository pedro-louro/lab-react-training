const BoxColor = ({r, g, b}) => {
  const style = {
    border: "solid",
    "background-color": `rgb(${r},${g},${b})`,
  }

  return(
    <div style={style}>
      <p>rgb({r},{g},{b})</p>
    </div>
  )
}

export default BoxColor;
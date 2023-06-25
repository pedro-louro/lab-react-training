const Random = ({min, max}) => {

  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <div class="idCard">
      <p>Random value between {min} and {max} =&gt; {randomNumber}</p>
    </div>
  )
}

export default Random
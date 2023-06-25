const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
  return(
    <div class="idCard">
      <div><img src={picture} alt="" />
      </div>
      <div>
        <p> <b>First Name:</b>  {firstName}</p>
        <p><b>Last Name:</b>  {lastName}</p>
        <p><b>Gender:</b>  {gender}</p>
        <p><b>Height:</b>  {height}</p>
        <p><b>Birth:</b>  {birth}</p>
      </div>
    </div>
  )
}

export default IdCard
const Greetings = ({lang, children}) => {
  const greeting = (lang) => {
    if (lang === "de") {
      return "Hallo"
    }
    else if (lang === "fr") {
      return "Bonjour"
    }
  }
  return (
    <div class="idCard">
      <p>{greeting(lang)} {children}</p>
    </div>
  )
}

export default Greetings
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const img = type === 'Visa' ? visa : mastercard;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: 300,
        borderRadius: 10,
      }}
    >
      <img src={img} alt="" width="50" />
      <p>***********{number.slice(12)}</p>
      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;

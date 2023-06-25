import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '700px',
        backgroundColor: '#455EB5',
        borderRadius: 15,
        color: 'white',
        padding: 20,
      }}
    >
      <img
        src={img}
        alt=""
        width="100"
        height="100"
        style={{ borderRadius: 50 }}
      />
      <div style={{ textAlign: 'start' }}>
        <h4>{name}</h4>
        <Rating value={rating} />
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;

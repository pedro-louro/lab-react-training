const NumbersTable = ({ limit }) => {
  const arrayNumbers = [];
  for (let i = 1; i <= limit; i++) {
    arrayNumbers.push(i);
  }

  return (
    <div className="tableNumbers">
      {arrayNumbers.map((number) => {
        const isOdd = number % 2 === 0 ? 'oddNumber' : '';
        console.log(isOdd);
        return <p className={`numbers ${isOdd}`}>{number}</p>;
      })}
    </div>
  );
};

export default NumbersTable;

const Rating = ({ value }) => {
  const fullStars = Math.round(value);
  const emptyStars = Math.round(5 - fullStars);
  const starsArray = [];

  for (let i = 0; i < fullStars; i++) {
    starsArray.push('★');
  }
  for (let i = 0; i < emptyStars; i++) {
    starsArray.push('☆');
  }

  return (
    <p>
      {starsArray.map((star) => {
        return <span>{star}</span>;
      })}
    </p>
  );
};

export default Rating;

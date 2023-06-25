import { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const bgColor =
    colors[Math.floor(Math.random() * (colors.length - 0 + 1) + 0)];

  const addLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div>
      <button onClick={addLike} style={{ backgroundColor: bgColor }}>
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;

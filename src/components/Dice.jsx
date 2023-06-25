import Dice0 from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';
import { useState } from 'react';

const Dice = () => {
  const dices = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [currDice, setCurrDice] = useState(Dice6);

  const diceHandler = () => {
    const randomDice = Math.floor(Math.random() * (6 - 0 + 1) + 0);
    setCurrDice(Dice0);
    setTimeout(() => {
      setCurrDice(dices[randomDice]);
    }, 1000);
  };
  return <img src={currDice} alt="" width="100" onClick={diceHandler} />;
};

export default Dice;

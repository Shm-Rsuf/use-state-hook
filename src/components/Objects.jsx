import { useState } from "react";

const messi = {
  firstName: "Leo",
  lastName: "Messi",
  jersyNum: 10,
};

const Objects = () => {
  const [player, setPlayer] = useState({});

  const addPropertyHandler = () => {
    setPlayer({ ...player, ...messi });
    console.log(player);
  };

  const makeGoalHandler = () => {
    const goal = Math.floor(Math.random() * 10 + 1);
    setPlayer({ ...player, goal: goal });
  };

  return (
    <div>
      <h2>
        Player Name: {player.firstName} {player.lastName}
      </h2>
      <h2>Jersy Number: {player.jersyNum} </h2>
      <h2>Goals: {player.goal}</h2>
      <button onClick={addPropertyHandler}>Add Property</button>
      <button onClick={makeGoalHandler}>make goals</button>
    </div>
  );
};

export default Objects;

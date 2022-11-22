import { useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  const addUserHandler = () => {
    const id = user.length;
    const userNumber = Math.floor(Math.random() * 10 + 1);

    setUser({ id: id, userNumber: userNumber });
  };

  return (
    <div>
      <button onClick={addUserHandler}>Add user</button>
      {user.map((singleUser) => (
        <h2 key={singleUser.id}>{singleUser.userNumber}</h2>
      ))}
    </div>
  );
};

export default User;

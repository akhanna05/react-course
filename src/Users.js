import React, { useState } from "react";

const Users = () => {
  const [name, setName] = useState(" ");
  const [age, setAge] = useState(" ");
  const [address, setAddress] = useState(" ");
  function makeuser() {
    let data={name,age,address}
    console.warn("this is done",data);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <input type="text" onChange={(e) => setAge(e.target.value)} value={age} />
      <br />
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      <br />
      <br />
      <button onClick={makeuser}>Create User</button>
    </div>
  );
};
export default Users;

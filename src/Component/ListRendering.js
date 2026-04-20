import React from 'react'

function ListRendering() {

  const fruits = ["Apple", "Banana", "Mango"];

  // with array of object
  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Neha" }
  ];

  return (
    <div>
      <h2>List Rendering</h2>
      {/* using simple map function */}
      {/* <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul> */}
      {/*  */}
      {/* --------------------------------------------------------------------- */}

      {/* using array of object */}
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>

    </div>
  )
}

export default ListRendering
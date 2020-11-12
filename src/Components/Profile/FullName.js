import React from "react";
const user={
  firstName: 'John',
  lastName: 'Doe'
};

const FullName = () => {
  return (
    <React.Fragment>
      <h2>My name is {user.firstName} {user.lastName} </h2>
    </React.Fragment>
  );
 };
 export default FullName;
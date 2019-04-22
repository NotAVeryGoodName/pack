import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Walter",
  lastName: "Colins"
};

const element = <h1>Hey, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("root"));

import React from "react";

const Gods = ({ gods }) => {
  return (
    <div>
      {gods &&
        gods.map((god, i) => (
          <li key={i}>
            <img style={{ height: "100px", width: "100px" }} src={god.image} />{" "}
            {god.name} - {god.title}
          </li>
        ))}
    </div>
  );
};

export default Gods;

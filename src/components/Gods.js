import React from "react";

const Gods = ({ gods, boons }) => {
  const getGodBoons = (god) => {
    console.log(god);
  };

  return (
    <div>
      {gods &&
        gods.map((god, i) => (
          <li key={i}>
            <img
              style={{ height: "100px", width: "100px" }}
              src={god.image}
              onClick={() => getGodBoons(god)}
            />{" "}
            {god.name} - {god.title}
          </li>
        ))}
    </div>
  );
};

export default Gods;

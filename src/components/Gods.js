import React from "react";

const Gods = ({ gods }) => {
  return (
    <div>
      <ul>
        {gods && gods.map((god) => (
          <li>
            {god.name} - {god.title} 
          </li>
        ))}
      </ul>
      {gods && gods.map((god) => (
          god.image ? <img src={god.image} /> : null
      ))}
    </div>
  );
};

export default Gods;

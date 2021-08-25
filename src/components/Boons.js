import React from "react";

const Boons = ({ boons }) => {
  const findDuos = () => {
    let duos = boons.filter((boon) => boon.duo === true);
    console.log(duos);
  };

  findDuos();

  const findPrereqs = () => {
    let reqs = boons.filter((boon) => boon.prerequisites.length > 0);
    console.log(reqs);
  };

  findPrereqs();

  return <div>Hello boons</div>;
};

export default Boons;

import React from "react";
import { StyledSkill } from "./Skill.styled";

const Skill = ({ name, image }) => {
  return (
    <StyledSkill>
      <img src={image} alt={`skill ${name}`} />
      <p>{name}</p>
    </StyledSkill>
  );
};

export default Skill;

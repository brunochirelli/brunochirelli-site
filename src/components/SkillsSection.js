import React from "react";
import { StyledSection, Skills } from "./SkillSection.styled";

const SkillsSection = ({ title, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <Skills>{children}</Skills>
    </StyledSection>
  );
};

export default SkillsSection;

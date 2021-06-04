import React from "react";
import Books from "../components/Books";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Quote from "../components/Quote";
import Skill from "../components/Skill";
import SkillsSection from "../components/SkillsSection";
import { skills } from "../data/skills";

const Home = () => {
  return (
    <>
      <Header />
      <Books />
      <Quote />

      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "3rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Portfolio
      </h1>
      <Portfolio />
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "3rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Skills
      </h1>
      <SkillsSection title="Frontend">
        <>
          {skills.frontEnd.map((skill, i) => (
            <Skill
              name={skill.name}
              image={skill.image}
              key={`${skill.name}-${i}`}
            />
          ))}
        </>
      </SkillsSection>
    </>
  );
};

export default Home;

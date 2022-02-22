import React from "react";
import styled from "styled-components";
import "./css/team.css";
import { teams } from "../data";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background-color: black;
  color: lightgray;
  padding-top: 25px;
  ${mobile({})}
  ${tablet({ paddingTop: "0px" })}
`;

const Wrapper = styled.div`
  display: flex;
  flex: wrap;
  margin-left: 50px;
  margin-right: 50px;
  ${mobile({ flexDirection: "column" })}
  ${tablet({
    flexDirection: "column",
    flex: "block",
  })}
`;

const Team = () => {
  return (
    <Container>
      <Wrapper>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Team;

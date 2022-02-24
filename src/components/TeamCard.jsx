import styled from "styled-components";
import "./css/team.css";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 70vh;
  width: 450px;
  background-color: black;
  color: lightgray;
  position: relative;
  margin-bottom: 80px;
  margin-left: 30px;
  ${mobile({
    height: "50vh",
    width: "100%",
    marginBottom: "40px",
    marginLeft: "0px",
  })}
  ${tablet({
    width: "100%",
    height: "55vh",
    marginLeft: "0px",
  })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  display: block;
  transition: calc() 0.5s ease;
  backface-visibility: hidden;
`;

const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const Rank = styled.h1`
  color: lightgray;
`;
const Name = styled.h2`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 400;
`;

const TeamCard = ({ team }) => {
  return (
    <Container className="container animate__animated animate__fadeIn animate__slower">
      <Link className="link" to={`/team/${team.id}`}>
        <Image className="image" src={team.img} />
        <Middle className="middle">
          <Rank>{team.rank} </Rank>
        </Middle>
        <Name>{team.name}</Name>
      </Link>
    </Container>
  );
};

export default TeamCard;

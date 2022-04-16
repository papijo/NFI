import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./css/influencer.css";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin-top: 50px;
  :hover {
    opacity: 0.7;
  }
`;

const Image = styled.img`
  height: 70vh;
  width: 400px;
  object-fit: cover;
  ${mobile({ height: "35vh", width: "90vw" })}
  ${tablet({ height: "40vh", width: "45vw" })}
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  ${mobile({ marginBottom: "0px" })}
  ${tablet({ marginBottom: "0px" })}
`;
const InfoText = styled.h2`
  color: lightgray;
  font-weight: 300;
`;

const InfluencerCard = ({ influencer }) => {
  return (
    <Container className="InfluencerDiv">
      <Link className="link" to={`/influencer/${influencer._id}`}>
        <Image
          className="InfluencerImg animate__animated animate__fadeIn animate__slower "
          src={influencer.img1}
        />
        <Info className="InfluencerInfo">
          <InfoText className="InfluencerInfoText">{influencer.name}</InfoText>
        </Info>
      </Link>
    </Container>
  );
};

export default InfluencerCard;

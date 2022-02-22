import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./css/models.css";

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
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const InfoText = styled.h2`
  color: lightgray;
  font-weight: 300;
`;

const ModelCard = ({ model }) => {
  return (
    <Container className="ModelDiv">
      <Link className="link" to={`/model/${model.id}`}>
        <Image
          className="ModeImg animate__animated animate__fadeIn animate__slower"
          src={model.img}
        />
        <Info className="ModelInfo">
          <InfoText className="ModelInfoText">{model.text}</InfoText>
        </Info>
      </Link>
    </Container>
  );
};

export default ModelCard;

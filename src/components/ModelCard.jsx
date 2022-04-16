import { Link } from "react-router-dom";
import styled from "styled-components";
import "./css/models.css";
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

const ModelCard = ({ model }) => {
  return (
    <Container className="ModelDiv">
      <Link className="link" to={`/model/${model._id}`}>
        <Image
          className="ModeImg animate__animated animate__fadeIn animate__slower"
          src={model.img1}
        />
        <Info className="ModelInfo">
          <InfoText className="ModelInfoText">{model.name}</InfoText>
        </Info>
      </Link>
    </Container>
  );
};

export default ModelCard;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  flex: 1;
  position: relative;
  :hover {
    opacity: 0.7;
  }
  ${mobile({ height: "70vh", flexDirection: "column", marginBottom: "15px" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: lightgray;
  margin-bottom: 20px;
  margin-left: 80px;
  ${mobile({ marginLeft: "35px", fontSize: "17px" })}
  ${tablet({ marginLeft: "35px", fontSize: "20px" })}
`;
// const Button = styled.button`
//   border: none;
//   padding: 10px;
//   background-color: white;
//   color: gray;
//   cursor: pointer;
//   font-weight: 600;
//   margin-left: 80px;
// `;

const ServiceItem = ({ service }) => {
  return (
    <Container>
      <Link className="link" to={`/${service.url}`}>
        <Image
          className="animate__animated animate__fadeIn animate__slower"
          src={service.img}
        />
        <Info>
          <Title>{service.title} </Title>
          {/* <Button>Find Out More</Button> */}
        </Info>
      </Link>
    </Container>
  );
};

export default ServiceItem;

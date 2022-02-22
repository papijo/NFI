import React from "react";
import styled from "styled-components";
import "animate.css";

const Container = styled.div``;
// const ServiceTitle = styled.h2`
//   margin-left: 50px;
//   font-weight: bold;
// `;
const ServiceWrapper = styled.div`
  display: flex;
`;
const ServiceWrapperKey = styled.div`
  flex: 1;
  font-size: 25px;
  margin-left: 50px;
  font-weight: bold;
`;
const ServiceWrapperPrice = styled.div`
  flex: 1;
  font-size: 25px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const Hr = styled.hr`
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const ServicePageLeftInfo = ({ web }) => {
  return (
    <Container>
      <ServiceWrapper>
        <ServiceWrapperKey className="animate__animated animate__fadeInLeft animate__slow">
          {web.wrapperKey}
        </ServiceWrapperKey>
        <ServiceWrapperPrice>{web.price}</ServiceWrapperPrice>
      </ServiceWrapper>
      <Hr />
    </Container>
  );
};

export default ServicePageLeftInfo;

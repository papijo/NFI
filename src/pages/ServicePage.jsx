import React from "react";
import styled from "styled-components";
import ServicePageLeftInfo from "../components/ServicePageLeftInfo";
import { servicesWeb } from "../data";
import "animate.css";
import Footer from "../components/Footer";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background-color: lightgray;
  color: black;
  padding-top: 5px;
`;
const Wrapper = styled.div``;
const WrapperTitle = styled.h1`
  font-weight: bolder;
  text-align: center;
  margin-top: 10px;
`;
const InnerWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  margin-left: 100px;
  margin-right: 200px;
  ${mobile({ marginLeft: "10px", marginRight: "10px" })}
`;
const Left = styled.div`
  flex: 1;
`;

const LeftWrapper = styled.div``;
const LeftWrapperTitle = styled.h1`
  margin-left: 50px;
  font-weight: bolder;
  margin-bottom: 10px;
  ${mobile({ marginLeft: "10px" })}
`;
// const LeftInnerWrapper = styled.div`
//   display: flex;
// `;
// const LeftInnerWrapperKey = styled.div`
//   flex: 1;
//   font-size: 25px;
//   margin-left: 50px;
// `;
// const LeftInnerWrapperValue = styled.div`
//   flex: 1;
//   font-size: 25px;
//   margin-left: 20px;
// `;

const Right = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const ServicePage = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperTitle>Our Range of Services</WrapperTitle>
        <InnerWrapper>
          <Left>
            <LeftWrapper>
              <LeftWrapperTitle className="animate__animated animate__fadeInDown animate__slow">
                Web Design and Development
              </LeftWrapperTitle>
              {servicesWeb.map((web) => (
                <ServicePageLeftInfo key={web.id} web={web} />
              ))}
            </LeftWrapper>
          </Left>
          <Right>Right</Right>
        </InnerWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ServicePage;

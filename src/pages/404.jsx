import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: black;
`;

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: lightgray;
`;

const Title = styled.h1`
  padding: 50px;
  font-weight: bolder;
  font-size: 70px;
`;
const Body = styled.h2`
  font-weight: 400;
  font-size: 50px;
`;

const ErrorPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title className="animate__animated animate__pulse animate__infinite">
          Page Not Found: Error 404
        </Title>
        <Body>You must have taken a Wrong Turn</Body>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ErrorPage;

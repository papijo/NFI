import React from "react";
import Footer from "../components/Footer";
import Services from "../components/Services";
import styled from "styled-components";
import SliderTest from "../components/SliderTest";

const Container = styled.div`
  background-color: black;
`;

const Home = () => {
  return (
    <Container>
      <Services />
      <SliderTest />
      <div>
        <Footer />
      </div>
    </Container>
  );
};

export default Home;

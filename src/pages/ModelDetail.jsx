import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import ModelSlider from "../components/ModelSlider";

const Container = styled.div``;

const Wrapper = styled.div``;

const ModelDetail = () => {
  return (
    <Container>
      <Wrapper>
        <ModelSlider />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ModelDetail;

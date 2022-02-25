import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import InfluencerSlider from "../components/InfluencerSlider";

const Container = styled.div``;

const Wrapper = styled.div``;

const InfluencerDetail = () => {
  return (
    <Container>
      <Wrapper>
        <InfluencerSlider />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default InfluencerDetail;

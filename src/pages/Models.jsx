import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import ModelCard from "../components/ModelCard";

import { models } from "../data";

const Container = styled.div`
  background-color: black;
`;
const Wrapper = styled.div``;
const ContainerTitle = styled.h1`
  color: lightgray;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 200;
  font-size: 50px;
`;

const ModelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 50px;
  margin-left: 50px;
`;

const Models = () => {
  return (
    <Container>
      <Wrapper>
        <ContainerTitle>Our Models</ContainerTitle>

        <ModelsWrapper>
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </ModelsWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Models;

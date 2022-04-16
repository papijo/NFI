import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import ModelCard from "../components/ModelCard";
import { mobile, tablet } from "../responsive";
import { publicRequest } from "./../utils/requestMethods";

// import { models } from "../data";

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
  ${mobile({ marginLeft: "20px" })}
  ${tablet({ marginLeft: "25px", marginRight: "0px" })}
`;

const Models = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const getModels = async () => {
      const res = await publicRequest.get("model/");
      setModels(res.data);
    };
    getModels();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ContainerTitle>Our Models</ContainerTitle>

        <ModelsWrapper>
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </ModelsWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Models;

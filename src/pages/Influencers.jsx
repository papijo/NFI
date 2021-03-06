import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import InfluencerCard from "../components/InfluencerCard";
// import ModelCard from "../components/ModelCard";
import { influencers } from "../data";
import { mobile, tablet } from "../responsive";
import { publicRequest } from "../utils/requestMethods";

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

const InfluencersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 50px;
  margin-left: 50px;
  ${mobile({ marginLeft: "20px" })}
  ${tablet({ marginLeft: "25px", marginRight: "0px" })}
`;

const Influencers = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const getInfluencers = async () => {
      const res = await publicRequest.get("influencer/");
      setInfluencers(res.data);
    };
    getInfluencers();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ContainerTitle>Influencers</ContainerTitle>
        <InfluencersWrapper>
          {influencers.map((influencer) => (
            <InfluencerCard key={influencer._id} influencer={influencer} />
          ))}
        </InfluencersWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Influencers;

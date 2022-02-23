import React from "react";
import styled from "styled-components";
import ServiceItem from "./ServiceItem";
import { services } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 55px);
  padding: 10px;
  background-color: black;
  ${mobile({
    height: "60px",
    marginTop: "0px",
    padding: "2px",
    flexDirection: "column",
  })}
  ${tablet({ height: "80vh", margin: "0px" })}
`;

const Services = () => {
  return (
    <Container>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </Container>
  );
};

export default Services;

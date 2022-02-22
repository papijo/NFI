import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import "animate.css";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background-color: lightgray;
  color: black;
  /* background-image: url("https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"); */
`;
const Wrapper = styled.div`
  margin-top: 50px;
  padding-top: 25px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 20px;
  background-color: lightgray;
  ${mobile({ marginLeft: "5px", marginRight: "5px" })}
  ${tablet({ marginLeft: "5px", marginRight: "5px" })}
`;

const WrapperTop = styled.div`
  display: flex;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column", fontSize: "15px" })}
  ${tablet({ flexDirection: "column", fontSize: "15px" })}
`;
const WrapperBottom = styled.div``;
const Left = styled.div`
  flex: 1;
  margin-right: 50px;
  ${mobile({ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" })}
  ${tablet({ marginLeft: "50px", marginBottom: "10px" })}
`;

const LeftTitle = styled.h1`
  text-align: center;
  font-weight: bolder;
`;

const LeftBody = styled.div`
  font-size: 25px;
  text-align: justify;
`;

const Center = styled.div`
  flex: 1;
  margin-left: 50px;
  margin-right: 50px;
  ${mobile({ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" })}
  ${tablet({ marginBottom: "10px" })}
`;

const CenterTitle = styled.h1`
  text-align: center;
  font-weight: bolder;
`;

const CenterBody = styled.div`
  font-size: 25px;
  text-align: justify;
`;

const Right = styled.div`
  flex: 1;
  margin-left: 50px;
  ${mobile({ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" })}
  ${tablet({ marginRight: "50px", marginBottom: "10px" })}
`;

const RightTitle = styled.h1`
  text-align: center;
  font-weight: bolder;
`;
const RightBody = styled.div`
  font-size: 25px;
  text-align: justify;
`;

const Bottom = styled.div``;
const BottomTitle = styled.h1`
  text-align: center;
  font-weight: bolder;
`;
const BottomBody = styled.div`
  font-size: 25px;
  text-align: justify;
  margin-left: 250px;
  margin-right: 250px;
  ${mobile({ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" })}
  ${tablet({ marginLeft: "50px", marginBottom: "10px", marginRight: "50px" })}
`;
const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperTop>
          <Left>
            <LeftTitle className="animate__animated animate__fadeInUp">
              Core Values
            </LeftTitle>
            <LeftBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              esse nam laboriosam recusandae aspernatur rem magni magnam quos
              sit nulla sed quis perferendis, impedit commodi architecto
              nesciunt perspiciatis blanditiis eaque?
            </LeftBody>
          </Left>
          <Center>
            <CenterTitle className="animate__animated animate__fadeInUp">
              Mission Statement
            </CenterTitle>
            <CenterBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              harum suscipit inventore sapiente illum architecto veritatis,
              impedit, molestias praesentium laboriosam nulla incidunt commodi
              delectus eligendi rem? Quia, voluptas. Corporis, id?
            </CenterBody>
          </Center>
          <Right>
            <RightTitle className="animate__animated animate__fadeInUp">
              Vision for the Future
            </RightTitle>
            <RightBody>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste
              rerum excepturi labore nam minima expedita provident maxime neque!
              Harum dicta vitae voluptates provident accusamus officiis ex ad
              maiores quaerat!
            </RightBody>
          </Right>
        </WrapperTop>
        <WrapperBottom>
          <Bottom>
            <BottomTitle className="animate__animated animate__fadeInUp">
              About NFI
            </BottomTitle>
            <BottomBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              totam expedita illum cum inventore praesentium, aut earum laborum
              voluptatibus accusantium, non quis rem impedit. Facere quisquam
              cupiditate magnam cum quam! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Repudiandae pariatur molestiae vel
              sapiente, iure saepe libero repellendus voluptas! Fugiat,
              voluptatum! Sequi quis provident eligendi. Velit veniam et iure
              ratione tempora?
            </BottomBody>
          </Bottom>
        </WrapperBottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AboutUs;

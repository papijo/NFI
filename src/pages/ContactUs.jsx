import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background-color: lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 0px;
`;

const Left = styled.div`
  flex: 2;
`;

const LeftWrapper = styled.div`
  margin-top: 100px;
`;

const InfoBox = styled.div`
  display: flex;
  margin-top: 20px;
`;
const InfoKey = styled.div`
  flex: 1;
  margin-left: 200px;
  font-size: 35px;
  font-weight: bold;
  ${mobile({
    marginLeft: "5px",
    marginRight: "5px",
    fontSize: "20px",
    marginTop: "5px",
  })}
  ${tablet({ marginLeft: "50px", marginRight: "50px" })}
`;
const InfoValue = styled.div`
  flex: 1;
  font-size: 20px;
`;

const InnerInfoValue = styled.div`
  padding: 5px;
`;

const Right = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const Hr = styled.hr`
  background-color: black;
  border: none;
  height: 0.5px;
  margin-left: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0.2px;
  ${mobile({ display: "none" })}
  ${tablet({ marginLeft: "50px", marginRight: "50px" })}
`;

const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftWrapper>
            {/* Location */}
            <InfoBox>
              <InfoKey className="animate__animated animate__fadeInLeft">
                LOCATION
              </InfoKey>
              <InfoValue>
                <InnerInfoValue>LAGOS, NIGERIA</InnerInfoValue>
                <InnerInfoValue>ABUJA, NIGERIA</InnerInfoValue>
                <InnerInfoValue>JOS, NIGERIA</InnerInfoValue>
              </InfoValue>
            </InfoBox>
            <Hr />
            {/* Bookings */}
            <InfoBox>
              <InfoKey className="animate__animated animate__fadeInLeft">
                BOOKINGS
              </InfoKey>
              <InfoValue>
                <InnerInfoValue>BOOKINGS@NFI.COM</InnerInfoValue>
              </InfoValue>
            </InfoBox>
            <Hr />
            {/* Artist Bookings */}
            <InfoBox>
              <InfoKey className="animate__animated animate__fadeInLeft">
                ARTIST BOOKINGS
              </InfoKey>
              <InfoValue>
                <InnerInfoValue>ARTISTS@NFI.COM</InnerInfoValue>
              </InfoValue>
            </InfoBox>
            <Hr />

            {/* Representation  */}
            <InfoBox>
              <InfoKey className="animate__animated animate__fadeInLeft">
                REPRESENTATIONS
              </InfoKey>
              <InfoValue>
                <InnerInfoValue>REP@NFI.COM</InnerInfoValue>
                <InnerInfoValue>
                  Fill and submit the representation form on the website.
                </InnerInfoValue>
              </InfoValue>
            </InfoBox>
            <Hr />

            {/* Placement Requests  */}
            <InfoBox>
              <InfoKey className="animate__animated animate__fadeInLeft">
                PLACEMENT REQUESTS
              </InfoKey>
              <InfoValue>
                <InnerInfoValue>PLACEMENTS@NFI.COM</InnerInfoValue>
              </InfoValue>
            </InfoBox>
            <Hr />

            {/* Careers  */}
            <InfoBox>
              <InfoKey className="animate__animated animate__fadeInLeft">
                CAREERS
              </InfoKey>
              <InfoValue>
                <InnerInfoValue>CAREER@NFDA.COM</InnerInfoValue>
              </InfoValue>
            </InfoBox>
            <Hr />

            {/* Social Media  */}
            <InfoBox>
              <InfoKey className="animate__animated animate__fadeInLeft">
                SOCIAL MEDIA
              </InfoKey>
              <InfoValue>
                <InnerInfoValue>
                  <FacebookOutlined /> <Twitter /> <Instagram />
                </InnerInfoValue>
              </InfoValue>
            </InfoBox>
            <Hr />
          </LeftWrapper>
        </Left>
        <Right></Right>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ContactUs;

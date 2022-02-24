// import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background: black;
  color: lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ paddingTop: "0px" })}
`;
const Left = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  margin: 50px;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  ${mobile({})}
  ${tablet({ paddingTop: "70px" })}
`;

const RightInnerWrapper = styled.div`
  margin-right: 50px;
  ${mobile({ marginRight: "10px", marginLeft: "10px" })}
  ${tablet({})}
`;
const BioHeading = styled.h1``;
const BioOne = styled.div`
  margin-top: 10px;
  text-align: justify;
  font-size: 20px;
`;
const BioTwo = styled.div`
  margin-top: 10px;
  text-align: justify;
  font-size: 20px;
`;
const BioThree = styled.div`
  margin-top: 10px;
  text-align: justify;
  font-size: 20px;
  margin-bottom: 20px;
`;

const SocialMediaCount = styled.div`
  margin-bottom: 20px;
`;

const Achievements = styled.div``;

const TeamDetail = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     const getCount = async () => {
  //       const res = await axios.get("https://www.instagram.com/papijo10/?__a=1", {
  //         headers: { "Access-Control-Allow-Origin": "*" },
  //       });
  //       setCount(res.data);
  //       console.log(res.data);
  //     };
  //     getCount();
  //   }, []);

  //   console.log(count);

  return (
    <Container>
      <Wrapper>
        <Left>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/10963990/pexels-photo-10963990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </ImageContainer>
        </Left>
        <Right>
          <RightInnerWrapper>
            <BioHeading>Bio</BioHeading>
            <BioOne>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BioOne>
            <BioTwo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BioTwo>
            <BioThree>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BioThree>
            <SocialMediaCount>
              Add Social Media Count When connecting backend with
              ""https://www.instagram.com/papijo10/?__a=1""
            </SocialMediaCount>
            <Achievements>Make Individual acheivements.</Achievements>
          </RightInnerWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TeamDetail;

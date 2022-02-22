import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  FacebookOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: black;
  color: lightgray;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  /* background-color: ${(props) => props.bg}; */
`;

// Slide One
const SlideOne = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const SlideImg = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  margin-top: 50px;
`;

const Image = styled.img`
  height: 80%;
  width: 90%;
  object-fit: cover;
`;
const SlideText = styled.div`
  flex: 1;
  margin-top: 50px;
  margin-right: 100px;
`;
const BioHeading = styled.div`
  font-size: 30px;
  font-weight: bolder;
`;
const BioBodyOne = styled.div`
  font-size: 20px;
  text-align: justify;
  margin-bottom: 10px;
`;
const BioBodyTwo = styled.div`
  font-size: 20px;
  text-align: justify;
  margin-bottom: 10px;
`;
const BioBodyThree = styled.div`
  font-size: 20px;
  text-align: justify;
  margin-bottom: 10px;
`;

const Social = styled.div`
  display: flex;
`;
const SocialFacebook = styled.div`
  flex: 1;
  display: flex;
`;
const SocialTwitter = styled.div`
  flex: 1;
  display: flex;
`;
const SocialInstagram = styled.div`
  flex: 1;
  display: flex;
`;

const P = styled.p`
  margin-left: 10px;
  margin-top: 2px;
`;

// Slide Two

const SlideTwo = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 90px;
`;

const SlideLeft = styled.div`
  flex: 1;
`;

const SlideLeftImgContainer = styled.div``;
const SlideLeftImage = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;

const SlideCenter = styled.div`
  flex: 1;
`;
const SlideCenterImgContainer = styled.div``;
const SlideCenterImage = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;

const SlideRight = styled.div`
  flex: 1;
`;

const SlideRightImgContainer = styled.div``;
const SlideRightImage = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;

// Slide 3
const SlideThree = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 90px;
`;

const InfluencerSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* Image and Text */}
        <Slide>
          <SlideOne>
            <SlideImg>
              <Image
                className="animate__animated animate__fadeIn animate__slower"
                src="https://images.pexels.com/photos/7243129/pexels-photo-7243129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
            </SlideImg>
            <SlideText>
              <BioHeading>Bio: Checks</BioHeading>
              <BioBodyOne>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                labore magni ea unde. Velit, necessitatibus debitis. Iste minima
                quam nobis nam, expedita quidem! Ea eius officia eaque earum
                beatae atque?
              </BioBodyOne>
              <BioBodyTwo>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                labore magni ea unde. Velit, necessitatibus debitis. Iste minima
                quam nobis nam, expedita quidem! Ea eius officia eaque earum
                beatae atque?
              </BioBodyTwo>
              <BioBodyThree>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                labore magni ea unde. Velit, necessitatibus debitis. Iste minima
                quam nobis nam, expedita quidem! Ea eius officia eaque earum
                beatae atque?
              </BioBodyThree>
              <Social>
                <SocialFacebook>
                  <FacebookOutlined />
                  <P>100k</P>
                </SocialFacebook>
                <SocialTwitter>
                  <Twitter />
                  <P>100k</P>
                </SocialTwitter>
                <SocialInstagram>
                  <Instagram />
                  <P>100k</P>
                </SocialInstagram>
              </Social>
            </SlideText>
          </SlideOne>
        </Slide>

        {/* All Image */}
        <Slide>
          <SlideTwo>
            <SlideLeft>
              <SlideLeftImgContainer>
                <SlideLeftImage src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </SlideLeftImgContainer>
            </SlideLeft>
            <SlideCenter>
              <SlideCenterImgContainer>
                <SlideCenterImage src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </SlideCenterImgContainer>
            </SlideCenter>
            <SlideRight>
              <SlideRightImgContainer>
                <SlideRightImage src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </SlideRightImgContainer>
            </SlideRight>
          </SlideTwo>
        </Slide>
        {/* All Image */}
        <Slide>
          <SlideThree>
            <SlideLeft>
              <SlideLeftImgContainer>
                <SlideLeftImage src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </SlideLeftImgContainer>
            </SlideLeft>
            <SlideCenter>
              <SlideCenterImgContainer>
                <SlideCenterImage src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </SlideCenterImgContainer>
            </SlideCenter>
            <SlideRight>
              <SlideRightImgContainer>
                <SlideRightImage src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </SlideRightImgContainer>
            </SlideRight>
          </SlideThree>
        </Slide>
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default InfluencerSlider;

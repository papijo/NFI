import "./css/models.css";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  FacebookOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../utils/requestMethods";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: black;
  color: lightgray;
  ${mobile({ paddingBottom: "50px", height: "auto" })}
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
  ${mobile({ height: "30px", width: "30px", position: "fixed" })}
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  align-items: center;
  /* background-color: ${(props) => props.bg}; */
`;

// Slide One
const SlideOne = styled.div`
  width: 100%;
  display: flex;
  ${mobile({ flexDirection: "column", height: "" })}
  ${tablet({ flexDirection: "column", height: "80vh" })}
`;
const SlideImg = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  margin-top: 50px;
  ${mobile({ marginLeft: "30px", marginRight: "20px", height: "30vh" })}
  ${tablet({ marginLeft: "100px", marginRight: "20px", height: "50vh" })}
`;

const Image = styled.img`
  height: 80%;
  width: 90%;
  object-fit: cover;
  ${mobile({ marginLeft: "10px" })}
`;
const SlideText = styled.div`
  flex: 1;
  margin-top: 50px;
  margin-right: 100px;
  ${mobile({
    marginTop: "0px",
    marginLeft: "10px",
    marginRight: "10px",
    height: "50vh",
  })}
  ${tablet({
    marginTop: "0px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "50vh",
  })}
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
// const BioBodyTwo = styled.div`
//   font-size: 20px;
//   text-align: justify;
//   margin-bottom: 10px;
// `;
// const BioBodyThree = styled.div`
//   font-size: 20px;
//   text-align: justify;
//   margin-bottom: 10px;
// `;

const RateCard = styled.div`
  display: flex;
  font-size: 25px;
  ${mobile({ flexDirection: "column" })}
`;

const RateCardTitle = styled.h1``;

const RateCardLeft = styled.div`
  flex: 1;
  margin-right: 10px;
`;
const RateCardRight = styled.div`
  flex: 1;
  margin-left: 10px;
`;
const RateCardContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const RateKey = styled.div`
  flex: 1;
`;
const RateValue = styled.div`
  flex: 1;
  text-align: right;
`;

const Social = styled.div`
  display: flex;
  font-size: 30px !important;
  margin-bottom: 20px;
  ${mobile({ fontSize: "25px !important" })}
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
  ${mobile({
    flexDirection: "column",
    marginRight: "0px",
    marginLeft: "25px",
  })}
  ${tablet({
    flexDirection: "column",
    marginRight: "100px",
    marginLeft: "100px",
  })}
`;

const SlideLeft = styled.div`
  flex: 1;
`;

const SlideLeftImgContainer = styled.div`
  ${mobile({ height: "60vh" })}
  ${tablet({ height: "40vh" })}
`;
const SlideLeftImage = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;

const SlideCenter = styled.div`
  flex: 1;
`;
const SlideCenterImgContainer = styled.div`
  ${mobile({ height: "60vh" })}
  ${tablet({ height: "40vh" })}
`;
const SlideCenterImage = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;

const SlideRight = styled.div`
  flex: 1;
`;

const SlideRightImgContainer = styled.div`
  ${mobile({ height: "60vh" })}
  ${tablet({ height: "40vh" })}
`;
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
  ${mobile({
    flexDirection: "column",
    marginRight: "0px",
    marginLeft: "25px",
  })}
  ${tablet({
    flexDirection: "column",
    marginRight: "100px",
    marginLeft: "100px",
  })}
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

  //Get Influencer
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [influencer, setInfluencer] = useState({});

  useEffect(() => {
    const getInfluencer = async () => {
      const res = await publicRequest.get(`/influencer/find/${id}`);
      setInfluencer(res.data);
    };
    getInfluencer();
  }, [id]);

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
                src={influencer.img2}
              />
            </SlideImg>
            <SlideText>
              <BioHeading>{influencer.name}</BioHeading>
              <BioBodyOne>{influencer.bio}</BioBodyOne>
              {/* <BioBodyTwo>
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
              </BioBodyThree> */}
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
              <RateCardTitle>Rate Card</RateCardTitle>
              <RateCard>
                <RateCardLeft>
                  <RateCardContainer>
                    <RateKey>Single Instagram Post:</RateKey>
                    <RateValue>${influencer.singleInstagramPost}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Video Content Single Post:</RateKey>
                    <RateValue>${influencer.videoContentSinglePost}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Beauty/Makeup Brands:</RateKey>
                    <RateValue>${influencer.beautifyBrands}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Instagram Story Post:</RateKey>
                    <RateValue>${influencer.instagramStoryPost}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Ambassadorial Deals (1 Month):</RateKey>
                    <RateValue>
                      ${influencer.ambassadorialDealOneMonth}
                    </RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Ambassadorial Deals (3 Month):</RateKey>
                    <RateValue>
                      ${influencer.ambassadorialDealThreeMonth}
                    </RateValue>
                  </RateCardContainer>
                </RateCardLeft>
                <RateCardRight>
                  <RateCardContainer>
                    <RateKey>Ambassadorial Deals (6 Month):</RateKey>
                    <RateValue>
                      ${influencer.ambassadorialDealSixMonth}
                    </RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Client Flyer/Post:</RateKey>
                    <RateValue>${influencer.clientFlyer}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Catalog Shoots (per hour):</RateKey>
                    <RateValue>${influencer.catalogShoots}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Music Videos (Daytime) :</RateKey>
                    <RateValue>${influencer.musicVideosDT}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Music Videos (Nighttime) :</RateKey>
                    <RateValue>${influencer.musicVideosNT}</RateValue>
                  </RateCardContainer>
                  <RateCardContainer>
                    <RateKey>Instagram Reels :</RateKey>
                    <RateValue>${influencer.instagramReels}</RateValue>
                  </RateCardContainer>
                </RateCardRight>
              </RateCard>
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

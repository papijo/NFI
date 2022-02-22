import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { mobile } from "../responsive";

//Import Image Files
import One from "../img/One.jpg";
import Two from "../img/Two.jpg";
import Three from "../img/Three.jpg";
import Four from "../img/Four.jpg";
import Five from "../img/Five.jpg";
import Six from "../img/Six.jpg";
import Seven from "../img/Seven.jpg";
import Eight from "../img/Eight.jpg";
import Nine from "../img/Nine.jpg";
import Ten from "../img/Ten.jpg";
import Eleven from "../img/Eleven.jpg";
import Twelve from "../img/Twelve.jpg";
import Thirteen from "../img/Thirteen.jpg";
import Fourteen from "../img/Fourteen.jpg";
import Fifteen from "../img/Fifteen.jpg";
import Sixteen from "../img/Sixteen.jpg";
import Seventeen from "../img/Seventeen.jpg";
import Eighteen from "../img/Eighteen.jpg";
import Nineteen from "../img/Nineteen.jpg";
import Twenty from "../img/Twenty.jpg";
import TwentyOne from "../img/TwentyOne.jpg";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  padding-bottom: 5px;
  z-index: -1;
  ${mobile({ marginTop: "300px" })}
`;

const Wrapper = styled.div`
  margin-top: 0px;
  overflow: hidden;
  max-height: 62vh;
  background: #ffffff;
  /* background-image: url("https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
  background-repeat: repeat;
  background-position: center;
  background-color: black;
  color: white;
  font-style: italic;
`;

const ImgContainer = styled.div``;
const Image = styled.img`
  height: 62vh;
`;

const TitleContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 25px;
  font-weight: bold;
  margin-bottom: 5px;
  color: lightgray;
`;

const SliderTest = () => {
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 25000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 25000,
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 100,
          cssEase: "linear",
          pauseOnHover: true,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <Container>
      <Wrapper id="home-carousel" className="home-banner">
        <TitleContainer>
          <Title>A Sample of Our Work</Title>
        </TitleContainer>
        <ImgContainer>
          <Slider {...settings}>
            <Image className="slick-slide" src={One} />
            <Image className="slick-slide" src={Two} />
            <Image className="slick-slide" src={Three} />
            <Image className="slick-slide" src={Four} />
            <Image className="slick-slide" src={Five} />
            <Image className="slick-slide" src={Six} />
            <Image className="slick-slide" src={Seven} />
            <Image className="slick-slide" src={Eight} />
            <Image className="slick-slide" src={Nine} />
            <Image className="slick-slide" src={Ten} />
            <Image className="slick-slide" src={Eleven} />
            <Image className="slick-slide" src={Twelve} />
            <Image className="slick-slide" src={Thirteen} />
            <Image className="slick-slide" src={Fourteen} />
            <Image className="slick-slide" src={Fifteen} />
            <Image className="slick-slide" src={Sixteen} />
            <Image className="slick-slide" src={Seventeen} />
            <Image className="slick-slide" src={Eighteen} />
            <Image className="slick-slide" src={Nineteen} />
            <Image className="slick-slide" src={Twenty} />
            <Image className="slick-slide" src={TwentyOne} />
          </Slider>
        </ImgContainer>
      </Wrapper>
    </Container>
  );
};

export default SliderTest;

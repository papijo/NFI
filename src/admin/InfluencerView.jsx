import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { updateInfluencer } from "../redux/influencerApiCalls";

const Container = styled.div`
  margin-top: 80px;
`;
const Wrapper = styled.div`
  margin: 50px;
`;
const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const WrapperTopLeft = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 10px;
`;
const WrapperTopRight = styled.div``;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  :hover {
    background-color: black;
    color: white;
  }
`;

const WrapperBody = styled.div`
  display: flex;
`;
const WrapperInfluencerView = styled.div`
  flex: 1;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-right: 25px;
`;
const WrapperTitle = styled.h2``;
const WrapperInfluencerContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const WrapperBodyKey = styled.div`
  flex: 1;
`;
const WrapperBodyValue = styled.div`
  flex: 2;
`;

const WrapperInfluencerEdit = styled.div`
  flex: 1;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-left: 25px;
`;
const TextArea = styled.textarea``;

const WrapperPriceContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const PriceKey = styled.div`
  flex: 2;
`;
const PriceValue = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 50px;
`;

const WrapperImageContainer = styled.div``;

const WrapperImageTitle = styled.h4``;
const WrapperImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  padding: 10px;
`;

const Label = styled.label`
  padding: 5px;
`;
const Input = styled.input`
  padding: 5px;
`;
const WrapperEditForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 20px;
  :hover {
    background-color: black;
    color: white;
  }
`;

const InfluencerView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[4];
  const influencer = useSelector((state) =>
    state.influencer.Influencers.find((influencer) => influencer._id === id)
  );
  const [inputs, setInputs] = useState(influencer);
  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e?.target?.name]: e?.target?.value };
    });
    // const { name, value } = e.target;
    // setInputs({ name: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const influencer = {
      ...inputs,
    };
    updateInfluencer(id, influencer, dispatch);
    console.log(influencer);
    navigate("/admin/dashboard/influencers");
  };

  return (
    <Container>
      <Wrapper>
        <WrapperTop>
          <WrapperTopLeft>Influencer</WrapperTopLeft>
          <WrapperTopRight>
            <Button>
              {" "}
              <Link to="/admin/dashboard/new-influencer" className="link">
                Create
              </Link>
            </Button>
          </WrapperTopRight>
        </WrapperTop>
        <WrapperBody>
          <WrapperInfluencerView>
            <WrapperTitle>Influencer Information</WrapperTitle>
            <WrapperInfluencerContainer>
              <WrapperBodyKey>Name</WrapperBodyKey>
              <WrapperBodyValue>{influencer.name}</WrapperBodyValue>
            </WrapperInfluencerContainer>
            <WrapperInfluencerContainer>
              <WrapperBodyKey>Bio</WrapperBodyKey>
              <WrapperBodyValue>{influencer.bio}</WrapperBodyValue>
            </WrapperInfluencerContainer>
            <WrapperTitle>Price Card</WrapperTitle>
            <WrapperPriceContainer>
              <PriceKey>Single Instagram Post</PriceKey>
              <PriceValue>${influencer.singleInstagramPost}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Video Content Single Post</PriceKey>
              <PriceValue>${influencer.videoContentSinglePost}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Beautify Brands</PriceKey>
              <PriceValue>${influencer.beautifyBrands}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Instagram Story Post</PriceKey>
              <PriceValue>${influencer.instagramStoryPost}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Instagram Reels</PriceKey>
              <PriceValue>${influencer.instagramReels}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Ambassadorial Deal (One Month)</PriceKey>
              <PriceValue>${influencer.ambassadorialDealOneMonth}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Ambassadorial Deal (Three Month)</PriceKey>
              <PriceValue>${influencer.ambassadorialDealThreeMonth}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Ambassadorial Deal (Six Month)</PriceKey>
              <PriceValue>${influencer.ambassadorialDealSixMonth}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Client Flyer</PriceKey>
              <PriceValue>${influencer.clientFlyer}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Ambassadorial Deal (One Month)</PriceKey>
              <PriceValue>${influencer.ambassadorialDealOneMonth}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Catalog Shoots </PriceKey>
              <PriceValue>${influencer.catalogShoots}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Music Videos Night Time </PriceKey>
              <PriceValue>${influencer.musicVideosNT}</PriceValue>
            </WrapperPriceContainer>
            <WrapperPriceContainer>
              <PriceKey>Music Videos Day Time </PriceKey>
              <PriceValue>${influencer.musicVideosDT}</PriceValue>
            </WrapperPriceContainer>
            <WrapperTitle>Influencer Images</WrapperTitle>
            <WrapperImageContainer>
              <WrapperImageTitle>Influencer List Image</WrapperImageTitle>
              <WrapperImage src={influencer.img1} />
            </WrapperImageContainer>
            <WrapperImageContainer>
              <WrapperImageTitle>Model Profile Image</WrapperImageTitle>
              <WrapperImage src={influencer.img2} />
            </WrapperImageContainer>
            <WrapperImageContainer>
              <WrapperImageTitle>Slider Images</WrapperImageTitle>
              <WrapperImage src={influencer.img3} />
              <WrapperImage src={influencer.img4} />
              <WrapperImage src={influencer.img5} />
              <WrapperImage src={influencer.img6} />
              <WrapperImage src={influencer.img7} />
              <WrapperImage src={influencer.img8} />
            </WrapperImageContainer>
          </WrapperInfluencerView>
          <WrapperInfluencerEdit>
            <WrapperTitle>Influencer Edit Form</WrapperTitle>

            {/* Edit Form */}
            <WrapperEditForm>
              <Label>Name</Label>
              <Input
                name="name"
                onChange={handleChange}
                defaultValue={influencer.name}
              />
              <Label>Bio</Label>
              <TextArea
                name="bio"
                onChange={handleChange}
                defaultValue={influencer.bio}
              />
              <Label>Single Instagram Post</Label>
              <Input
                name="singleInstagramPost"
                onChange={handleChange}
                defaultValue={influencer.singleInstagramPost}
              />
              <Label>Video Content Single Post</Label>
              <Input
                name="videoContentSinglePost"
                onChange={handleChange}
                defaultValue={influencer.videoContentSinglePost}
              />
              <Label>Beautify Brands</Label>
              <Input
                name="beautifyBrands"
                onChange={handleChange}
                defaultValue={influencer.beautifyBrands}
              />
              <Label>Instagram Story Post </Label>
              <Input
                name="instagramStoryPost"
                onChange={handleChange}
                defaultValue={influencer.instagramStoryPost}
              />
              <Label>Instagram Reels</Label>
              <Input
                name="instagramReels"
                onChange={handleChange}
                defaultValue={influencer.instagramReels}
              />
              <Label>Ambassadorial Deal (One Month)</Label>
              <Input
                name="ambassadorialDealOneMonth"
                onChange={handleChange}
                defaultValue={influencer.ambassadorialDealOneMonth}
              />
              <Label>Ambassadorial Deal (Three Month)</Label>
              <Input
                name="ambassadorialDealThreeMonth"
                onChange={handleChange}
                defaultValue={influencer.ambassadorialDealThreeMonth}
              />
              <Label>Ambassadorial Deal (Six Month)</Label>
              <Input
                name="ambassadorialDealSixMonth"
                onChange={handleChange}
                defaultValue={influencer.ambassadorialDealSixMonth}
              />
              <Label>Client Flyer</Label>
              <Input
                name="clientFlyer"
                onChange={handleChange}
                defaultValue={influencer.clientFlyer}
              />
              <Label>Catalog Shoots</Label>
              <Input
                name="catalogShoots"
                onChange={handleChange}
                defaultValue={influencer.catalogShoots}
              />
              <Label> Music Videos Night Time </Label>
              <Input
                name="musicVideosNT"
                onChange={handleChange}
                defaultValue={influencer.musicVideosNT}
              />
              <Label> Music Videos Day Time </Label>
              <Input
                name="musicVideosDT"
                onChange={handleChange}
                defaultValue={influencer.musicVideosDT}
              />

              <WrapperTitle>Images</WrapperTitle>
              <Label>Influencer List Image</Label>
              <Input
                name="img1"
                // type="file"
                id="file1"
                // style={{ display: "none" }}
                defaultValue={influencer.img1}
                onChange={handleChange}
              />

              <Label>Model Profile Image</Label>
              <Input
                name="img2"
                // type="file"
                id="file2"
                // style={{ display: "none" }}
                defaultValue={influencer.img2}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img3"
                // type="file"
                id="file3"
                // style={{ display: "none" }}
                defaultValue={influencer.img3}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img4"
                // type="file"
                id="file4"
                // style={{ display: "none" }}
                defaultValue={influencer.img4}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img5"
                // type="file"
                id="file5"
                // style={{ display: "none" }}
                defaultValue={influencer.img5}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img6"
                // type="file"
                id="file6"
                // style={{ display: "none" }}
                defaultValue={influencer.img6}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img7"
                // type="file"
                id="file7"
                // style={{ display: "none" }}
                defaultValue={influencer.img7}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                // type="file"
                id="file8"
                // style={{ display: "none" }}
                defaultValue={influencer.img8}
                onChange={handleChange}
              />

              <SubmitButton onClick={handleClick}>Submit</SubmitButton>
            </WrapperEditForm>
          </WrapperInfluencerEdit>
        </WrapperBody>
      </Wrapper>
    </Container>
  );
};

export default InfluencerView;

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addInfluencer } from "../redux/influencerApiCalls";

const Container = styled.div`
  margin-top: 80px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const WrapperTop = styled.div`
  font-size: 30px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
`;
const Label = styled.label`
  padding: 5px;
`;
const Input = styled.input`
  padding: 10px;
  margin: 5px;
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
const WrapperTitle = styled.h2``;
const TextArea = styled.textarea``;

const NewInfluencer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e?.target?.name]: e?.target?.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const influencer = {
      ...inputs,
    };
    addInfluencer(influencer, dispatch);
    navigate("/admin/dashboard/influencers");
  };

  return (
    <Container>
      <Wrapper>
        <WrapperTop>Register a New Influencer</WrapperTop>
        <Form>
          <Label>Name</Label>
          <Input name="name" onChange={handleChange} />
          <Label>Bio</Label>
          <TextArea name="bio" onChange={handleChange} />
          <Label>Single Instagram Post</Label>
          <Input name="singleInstagramPost" onChange={handleChange} />
          <Label>Video Content Single Post</Label>
          <Input name="videoContentSinglePost" onChange={handleChange} />
          <Label>Beautify Brands</Label>
          <Input name="beautifyBrands" onChange={handleChange} />
          <Label>Instagram Story Post </Label>
          <Input name="instagramStoryPost" onChange={handleChange} />
          <Label>Instagram Reels</Label>
          <Input name="instagramReels" onChange={handleChange} />
          <Label>Ambassadorial Deal (One Month)</Label>
          <Input name="ambassadorialDealOneMonth" onChange={handleChange} />
          <Label>Ambassadorial Deal (Three Month)</Label>
          <Input name="ambassadorialDealThreeMonth" onChange={handleChange} />
          <Label>Ambassadorial Deal (Six Month)</Label>
          <Input name="ambassadorialDealSixMonth" onChange={handleChange} />
          <Label>Client Flyer</Label>
          <Input name="clientFlyer" onChange={handleChange} />
          <Label>Catalog Shoots</Label>
          <Input name="catalogShoots" onChange={handleChange} />
          <Label> Music Videos Night Time </Label>
          <Input name="musicVideosNT" onChange={handleChange} />
          <Label> Music Videos Day Time </Label>
          <Input name="musicVideosDT" onChange={handleChange} />

          <WrapperTitle>Images</WrapperTitle>
          <Label>Influencer List Image</Label>
          <Input
            name="img1"
            // type="file"
            id="file1"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <Label>Model Profile Image</Label>
          <Input
            name="img2"
            // type="file"
            id="file2"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <Label>Slider Image</Label>
          <Input
            name="img3"
            // type="file"
            id="file3"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <Label>Slider Image</Label>
          <Input
            name="img4"
            // type="file"
            id="file4"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <Label>Slider Image</Label>
          <Input
            name="img5"
            // type="file"
            id="file5"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <Label>Slider Image</Label>
          <Input
            name="img6"
            // type="file"
            id="file6"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <Label>Slider Image</Label>
          <Input
            name="img7"
            // type="file"
            id="file7"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <Label>Slider Image</Label>
          <Input
            // type="file"
            id="file8"
            // style={{ display: "none" }}

            onChange={handleChange}
          />

          <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewInfluencer;

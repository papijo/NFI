import React, { useState } from "react";
import styled from "styled-components";
import placement from "./customHooks/placement";
import { addModel } from "../redux/modelApiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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
const TextArea = styled.textarea``;

const WrapperPlacementTitle = styled.h4`
  margin-top: 10px;
`;
const PlacementContainer = styled.div`
  display: flex;
`;

const PlacementLabel = styled.label`
  padding: 5px;
`;

const PlacementInput = styled.input`
  padding: 5px;
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

const NewModel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [place, setPlace] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e?.target?.name]: e?.target?.value };
    });
  };
  const handlePlacementChange = (e, p) => {
    const foundInArray = place.some((item) => item.id === p.id);

    // IF ITEM HAS BEEN CLICK/ADDED, REMOVE FROM ARRAY AND UNCHECK
    if (foundInArray) setPlace((x) => x.filter((item) => item.id !== p.id));
    // ELSE IF ITEM HAS NOT BEEN CLICK/ADDED, ADD ITEM TO ARRAY AND CHECK
    else
      setPlace((x) => {
        return [...x, { id: p.id, name: p.name, location: p.location }];
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const model = {
      ...inputs,
      placement: place,
    };
    addModel(model, dispatch);
    navigate("/admin/dashboard/models");
  };

  return (
    <Container>
      <Wrapper>
        <WrapperTop>Register a New Model</WrapperTop>
        <Form>
          <Label>Name</Label>
          <Input name="name" placeholder="Full Name" onChange={handleChange} />
          <Label>BIO</Label>
          <TextArea name="bio" placeholder="Bio" onChange={handleChange} />
          <Label>Date of Birth</Label>
          <Input name="dob" placeholder="yyyy-mm-dd" onChange={handleChange} />
          <Label>Height</Label>
          <Input name="height" placeholder="1.65m" onChange={handleChange} />
          <Label>Weight</Label>
          <Input name="weight" placeholder="250kg" onChange={handleChange} />
          <Label>Bust</Label>
          <Input name="bust" placeholder="35cm" onChange={handleChange} />
          <Label>Waist</Label>
          <Input name="waist" placeholder="30cm" onChange={handleChange} />
          <Label>Hips</Label>
          <Input name="hips" placeholder="65cm" onChange={handleChange} />
          <Label>Hair Color</Label>
          <Input name="hairColor" placeholder="Brown" onChange={handleChange} />
          <Label>Eye Color</Label>
          <Input name="eyeColor" placeholder="Blue" onChange={handleChange} />
          <Label>Shoe Size</Label>
          <Input name="shoeSize" placeholder="8" onChange={handleChange} />
          <Label>Instagram Handle</Label>
          <Input
            name="instagram"
            placeholder="user123"
            onChange={handleChange}
          />
          <WrapperPlacementTitle>Images</WrapperPlacementTitle>
          <Label>Model List Image</Label>
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
            name="img8"
            id="file8"
            // style={{ display: "none" }}
            onChange={handleChange}
          />

          <WrapperPlacementTitle>Placement</WrapperPlacementTitle>
          {placement.map((p) => (
            <PlacementContainer key={p.id}>
              <PlacementLabel>{p.identifier}</PlacementLabel>
              <PlacementInput
                type="checkbox"
                // checked={place.some((x) => x.id === p.id)}
                onClick={(e) => handlePlacementChange(e, p)}
              />
            </PlacementContainer>
          ))}
          <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewModel;

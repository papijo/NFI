import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import placement from "./customHooks/placement";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateModel } from "./../redux/modelApiCalls";

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
const WrapperBody = styled.div`
  display: flex;
`;
const WrapperModelView = styled.div`
  flex: 1;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-right: 25px;
`;

const WrapperModelContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const WrapperBodyKey = styled.div`
  flex: 1;
`;
const WrapperBodyValue = styled.div`
  flex: 3;
`;

const WrapperModelEdit = styled.div`
  flex: 1;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-left: 25px;
`;

const WrapperTitle = styled.h2``;

const WrapperImageContainer = styled.div``;

const WrapperImageTitle = styled.h4``;
const WrapperImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  padding: 10px;
`;

const WrapperEditForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  padding: 5px;
`;
const Input = styled.input`
  padding: 5px;
`;
const TextArea = styled.textarea``;

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

const ModelView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[4];
  const model = useSelector((state) =>
    state.model.Models.find((model) => model._id === id)
  );
  const [age, setAge] = useState("");
  const [inputs, setInputs] = useState(model);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const getAge = async () => {
      let today = new Date();
      let bday = new Date(model.dob);
      let Age = today.getFullYear() - bday.getFullYear();
      setAge(Age);
    };
    getAge();
  }, [id, model.dob]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e?.target?.name]: e?.target?.value };
    });
    // const { name, value } = e.target;
    // setInputs({ name: e.target.value });
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
    updateModel(id, model, dispatch);
    console.log(model);
    navigate("/admin/dashboard/models");
  };

  return (
    <Container>
      <Wrapper>
        <WrapperTop>
          <WrapperTopLeft>Model</WrapperTopLeft>
          <WrapperTopRight>
            <Button>
              {" "}
              <Link to="/admin/dashboard/new-model" className="link">
                Create
              </Link>
            </Button>
          </WrapperTopRight>
        </WrapperTop>
        <WrapperBody>
          <WrapperModelView>
            <WrapperTitle>Model Information</WrapperTitle>
            <WrapperModelContainer>
              <WrapperBodyKey>Model:</WrapperBodyKey>
              <WrapperBodyValue>{model.name}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Age:</WrapperBodyKey>
              <WrapperBodyValue>{age}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Height:</WrapperBodyKey>
              <WrapperBodyValue>{model.height}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Weight:</WrapperBodyKey>
              <WrapperBodyValue>{model.weight}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Bust:</WrapperBodyKey>
              <WrapperBodyValue>{model.bust}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Waist:</WrapperBodyKey>
              <WrapperBodyValue>{model.waist}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Hips:</WrapperBodyKey>
              <WrapperBodyValue>{model.hips}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Hair Color:</WrapperBodyKey>
              <WrapperBodyValue>{model.hairColor}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Eye Color:</WrapperBodyKey>
              <WrapperBodyValue>{model.eyeColor}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Shoe Size:</WrapperBodyKey>
              <WrapperBodyValue>{model.shoeSize}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>Height:</WrapperBodyKey>
              <WrapperBodyValue>{model.height}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperModelContainer>
              <WrapperBodyKey>IG:</WrapperBodyKey>
              <WrapperBodyValue>{model.instagram}</WrapperBodyValue>
            </WrapperModelContainer>
            <WrapperTitle>Placement</WrapperTitle>
            {model?.placement?.map((p) => (
              <WrapperModelContainer key={p._id}>
                <WrapperBodyKey>{p.name} </WrapperBodyKey>
                <WrapperBodyValue>{p.location}</WrapperBodyValue>
              </WrapperModelContainer>
            ))}

            <WrapperTitle>Model Images</WrapperTitle>
            <WrapperImageContainer>
              <WrapperImageTitle>Model List Image</WrapperImageTitle>
              <WrapperImage src={model.img1} />
            </WrapperImageContainer>
            <WrapperImageContainer>
              <WrapperImageTitle>Model Profile Image</WrapperImageTitle>
              <WrapperImage src={model.img2} />
            </WrapperImageContainer>
            <WrapperImageContainer>
              <WrapperImageTitle>Slider Images</WrapperImageTitle>
              <WrapperImage src={model.img3} />
              <WrapperImage src={model.img4} />
              <WrapperImage src={model.img5} />
              <WrapperImage src={model.img6} />
              <WrapperImage src={model.img7} />
              <WrapperImage src={model.img8} />
            </WrapperImageContainer>
          </WrapperModelView>

          {/* Model Edit Form */}
          <WrapperModelEdit>
            <WrapperTitle>Model Edit Form</WrapperTitle>
            <WrapperEditForm>
              <Label>Name</Label>
              <Input
                name="name"
                onChange={handleChange}
                defaultValue={model.name}
              />
              <Label>Bio</Label>
              <TextArea
                name="bio"
                onChange={handleChange}
                defaultValue={model.bio}
              />
              <Label>Date of Birth</Label>
              <Input
                name="dob"
                onChange={handleChange}
                defaultValue={model.dob}
              />
              <Label>Height</Label>
              <Input
                name="height"
                onChange={handleChange}
                defaultValue={model.height}
              />
              <Label>Weight</Label>
              <Input
                name="weight"
                onChange={handleChange}
                defaultValue={model.weight}
              />
              <Label>Bust</Label>
              <Input
                name="bust"
                onChange={handleChange}
                defaultValue={model.bust}
              />
              <Label>Waist</Label>
              <Input
                name="waist"
                onChange={handleChange}
                defaultValue={model.waist}
              />
              <Label>Hips</Label>
              <Input
                name="hips"
                onChange={handleChange}
                defaultValue={model.hips}
              />
              <Label>Hair Color</Label>
              <Input
                name="hairColor"
                onChange={handleChange}
                defaultValue={model.hairColor}
              />
              <Label>Eye Color</Label>
              <Input
                name="eyeColor"
                onChange={handleChange}
                defaultValue={model.eyeColor}
              />
              <Label>Shoe Size</Label>
              <Input
                name="shoeSize"
                onChange={handleChange}
                defaultValue={model.shoeSize}
              />
              <Label>Instagram</Label>
              <Input
                name="instagram"
                onChange={handleChange}
                defaultValue={model.instagram}
              />

              <WrapperPlacementTitle>Images</WrapperPlacementTitle>
              <Label>Model List Image</Label>
              <Input
                name="img1"
                // type="file"
                id="file1"
                // style={{ display: "none" }}
                defaultValue={model.img1}
                onChange={handleChange}
              />

              <Label>Model Profile Image</Label>
              <Input
                name="img2"
                // type="file"
                id="file2"
                // style={{ display: "none" }}
                defaultValue={model.img2}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img3"
                // type="file"
                id="file3"
                // style={{ display: "none" }}
                defaultValue={model.img3}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img4"
                // type="file"
                id="file4"
                // style={{ display: "none" }}
                defaultValue={model.img4}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img5"
                // type="file"
                id="file5"
                // style={{ display: "none" }}
                defaultValue={model.img5}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img6"
                // type="file"
                id="file6"
                // style={{ display: "none" }}
                defaultValue={model.img6}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                name="img7"
                // type="file"
                id="file7"
                // style={{ display: "none" }}
                defaultValue={model.img7}
                onChange={handleChange}
              />

              <Label>Slider Image</Label>
              <Input
                // type="file"
                id="file8"
                // style={{ display: "none" }}
                defaultValue={model.img8}
                onChange={handleChange}
              />

              <WrapperPlacementTitle>Placement</WrapperPlacementTitle>
              {placement.map((p) => (
                <PlacementContainer key={p.id}>
                  <PlacementLabel>{p.identifier}</PlacementLabel>
                  <PlacementInput
                    type="checkbox"
                    onClick={(e) => handlePlacementChange(e, p)}
                  />
                </PlacementContainer>
              ))}

              <SubmitButton onClick={handleClick}>Submit</SubmitButton>
            </WrapperEditForm>
          </WrapperModelEdit>
        </WrapperBody>
      </Wrapper>
    </Container>
  );
};

export default ModelView;

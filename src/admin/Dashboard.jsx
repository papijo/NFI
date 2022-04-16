import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../../src/responsive";

const Container = styled.div`
  margin-top: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  position: relative;
  ${mobile({ flexDirection: "column" })}
`;
const Model = styled.div`
  flex: 1;
  background: url("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60")
    center;
  background-size: cover;
  color: lightgray;
`;

const ModelText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Influencer = styled.div`
  flex: 1;
  background: url("https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60")
    center;
  background-size: cover;
  height: 100%;
`;

const InfluencerText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 50px;
`;

const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <Model>
          <Link className="link" to="/admin/dashboard/models">
            <ModelText>
              <Text>Models</Text>
            </ModelText>
          </Link>
        </Model>

        <Influencer>
          <Link className="link" to="/admin/dashboard/influencers">
            <InfluencerText>
              <Text>Influencers</Text>
            </InfluencerText>
          </Link>
        </Influencer>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;

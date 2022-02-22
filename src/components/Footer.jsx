import {
  DesignServices,
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: black;
  color: lightgray;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 25px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NEW FAME INFLUENCE</Logo>
        <Desc>We are excellence personified....</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>News</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Terms and Conditions</ListItem>
          <ListItem>Privacy Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> No 1, Shinco Road, Behind New
          Government House
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +234 806 000 1111
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> email@email.com
        </ContactItem>
        <ContactItem>
          <DesignServices style={{ marginRight: "10px", fontSize: "15px" }} />{" "}
          Website Made with Love by Papijo
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

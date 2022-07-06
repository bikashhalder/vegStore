import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Container = styled.div`
  display: flex;
  height: 40vh;
  background-color: azure;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
    height: 110vh;
    padding-left: 0;
    position: relative;
  }
`;

const Left = styled.div`
  flex: 1;
  margin-left: 40px;
  @media only screen and (max-width: 380px) {
    margin-left: 0px;
    margin-bottom: -50px;
  }
`;
const Links = styled.div``;
const Title = styled.h2`
  font-weight: 600;
  @media only screen and (max-width: 380px) {
    margin-top: 20px;
  }
`;
const Item = styled.h5`
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  @media only screen and (max-width: 380px) {
    margin-right: 40px;
    margin-bottom: -50px;
  }
`;
const Right = styled.div`
  flex: 1;
  /* @media only screen and (max-width: 380px) {
    flex: none;
  } */
`;
// main function
const Footer = () => {
  return (
    <Container>
      <Logo />
      <Left>
        <Links>
          <Title>Get To Know More Us</Title>
          <Item>About Us</Item>
          <Item>Career</Item>
          <Item>Terms & Conditions</Item>
          <Item>Fill Someone's Stomatch</Item>
        </Links>
      </Left>
      <Center>
        <Links>
          <Title>Connect With Us</Title>
          <Item>Facebook</Item>
          <Item>Instagram</Item>
          <Item>Twitter</Item>
          <Item>LinkedIn</Item>
        </Links>
      </Center>
      <Right>
        <Links>
          <Title>Make Money With Us</Title>
          <Item>Sell on VegBucket</Item>
          <Item>Advertise Your Product</Item>
          <Item>Become A Supply Chain Partner</Item>
          <Item>Contract Farming</Item>
        </Links>
      </Right>
    </Container>
  );
};

export default Footer;

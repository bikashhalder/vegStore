import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: var(--darkPrimaryGreen);
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: var(--lightSecondaryGreen);
  @media only screen and (max-width: 580px) {
    font-size: 50px;
  }
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: var(--lightSecondaryGreen);
  @media only screen and (max-width: 580px) {
    font-size: 17px;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: wheat;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media only screen and (max-width: 580px) {
    justify-content: center;
    width: 80%;
    height: 50px;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 40px;
  font-size: 18px;
  @media only screen and (max-width: 580px) {
    padding-left: 10px;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get Health Tips and Benifit of Eating Vegetables
      </Description>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <FontAwesomeIcon icon={faShare} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

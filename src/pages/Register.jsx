import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: beige;
  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 70vh;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  min-width: 60%;
  margin-bottom: 20px;
  padding: 10px;
  justify-content: center;
  display: flex;
`;
const Agreement = styled.span`
  margin-bottom: 10px;
`;
const Button = styled.button`
  width: 130px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

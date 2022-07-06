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
  @media only screen and (max-width: 580px) {
    width: 100%;
    height: 50vh;
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
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In to Your Account</Title>
        <Form>
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Button>Log In</Button>
          <Link>Forgot Password?</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

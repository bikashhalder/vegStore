import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { mobile } from "../reponsive";
// styled components
const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--darkSecondaryGreen);
  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 130px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    padding: 15px 15px;
  }
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 380px) {
    flex: 0;
  }
`;

const Center = styled.div`
  flex: 2;
  @media only screen and (max-width: 380px) {
    position: absolute;
    top: 70px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchField = styled.div`
  display: flex;
  justify-content: end;
  height: 40px;
  width: 70%;
  align-items: center;
  padding-right: 10px;
  border: 1px solid var(--darkPrimaryGreen);
  border-radius: 15px;
  @media only screen and (max-width: 380px) {
    width: 80%;
  }
`;
const Input = styled.input`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 80%;
  align-items: center;
  padding-left: 10px;
  margin-right: 30px;
  border: none;
  background-color: var(--darkSecondaryGreen);
  outline: none;
  font-size: 20px;
  ${mobile({
    width: "70%",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 380px) {
    justify-content: flex-start;
    margin: 0;
  }
`;
const MenuComponent = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 35px;
  @media only screen and (max-width: 380px) {
    margin-left: 30px;
  }
`;

// main function
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo />
        </Left>
        <Center>
          <SearchContainer>
            <SearchField>
              <Input placeholder='Search' />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ position: "relative", right: "10px" }}
              />
            </SearchField>
          </SearchContainer>
        </Center>
        <Right>
          <MenuComponent>
            <Link
              to='/register'
              style={{
                textDecoration: "None",
                color: "var(--darkPrimaryGreen)",
                fontWeight: 400,
                fontSize: 18,
              }}>
              Register
            </Link>
          </MenuComponent>
          <MenuComponent>
            <Link
              to='/login'
              style={{
                textDecoration: "None",
                color: "var(--darkPrimaryGreen)",
                fontWeight: 400,
                fontSize: 18,
              }}>
              Login
            </Link>
          </MenuComponent>
          <MenuComponent>
            <Link
              to='/cart'
              style={{
                textDecoration: "None",
                color: "var(--darkPrimaryGreen)",
                fontWeight: 400,
                fontSize: 18,
              }}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </MenuComponent>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

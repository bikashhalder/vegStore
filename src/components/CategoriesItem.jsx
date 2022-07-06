import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 25%;
  margin: 5px;
  height: 50vh;
  padding-left: 0;
  padding-top: 0px;
  position: relative;
  @media only screen and (max-width: 580px) {
    margin-bottom: 40px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d1fed40;
`;
const Title = styled.h1`
  color: var(--lightSecondaryGreen);
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: grey;
    color: white;
  }
`;
const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to='/productList'>
          <Button>Shop Now </Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoriesItem;

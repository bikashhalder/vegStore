import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #63c23789;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1ms ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 98%;
  height: 98%;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: aqua;
    transform: scale(1.1);
  }
`;

// main function
const ProductItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </Icon>
        <Icon>
          <Link to='/product'>
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </Icon>
        <Icon>
          <Link to='/wishlist'>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;

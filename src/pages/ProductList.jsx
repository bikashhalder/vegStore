import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import ProductItem from "../components/ProductItem";
// import Products from "../components/Products";
import { productsData } from "../data/productsData";
import { Link } from "react-router-dom";
const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
`;
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 80%;
  @media only screen and (max-width: 380px) {
    grid-template-columns: 100%;
  }
`;
const FilterItem = styled.div`
  @media only screen and (max-width: 380px) {
    margin-bottom: 30px;
  }
`;
const Item = styled.li`
  list-style: none;
  position: relative;
  left: 30px;
  top: 40px;
  margin-bottom: 25px;
  font-weight: 400;
  cursor: pointer;
`;
const Links = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const FilterProduct = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  object-fit: cover;
  column-gap: 70px;
  @media only screen and (max-width: 380px) {
    grid-template-columns: 100%;
  }
`;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <ProductContainer>
        <FilterItem>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Brassica</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Fruit Vegetable</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Gourds and Squashes</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Greens</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Fungi</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Roots and Tubers</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Pods And Seeds</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Stem</Links>
            </Link>
          </Item>
          <Item>
            <Link to='#' style={{ textDecoration: "none" }}>
              <Links>Baby Vegetables</Links>
            </Link>
          </Item>
        </FilterItem>
        <FilterProduct>
          {productsData &&
            productsData.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
        </FilterProduct>
      </ProductContainer>
      <Pagination />
      <Footer />
    </Container>
  );
};

export default ProductList;

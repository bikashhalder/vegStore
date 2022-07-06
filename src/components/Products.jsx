import React from "react";
import styled from "styled-components";
import { productsData } from "../data/productsData";
import ProductItem from "./ProductItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--darkSecondaryGreen);
`;

// main function
const Products = () => {
  return (
    <Container>
      {productsData.map((item) => {
        if (item.id <= 12) {
          return <ProductItem key={item.id} item={item} />;
        }
        return null;
      })}
    </Container>
  );
};

export default Products;

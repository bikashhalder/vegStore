import React from "react";
import styled from "styled-components";
import { categoryData } from "../data/categoryData";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  background-color: var(--lightPrimaryGreen);
  @media only screen and (max-width: 380px) {
    flex-direction: column;
    margin-bottom: 100px;
    min-height: 140vh;
    padding: 10;
    flex-wrap: nowrap;
  }
`;
const Categories = () => {
  return (
    <Container>
      {categoryData.map((item) => {
        if (item.id <= 6) {
          return <CategoriesItem key={item.id} item={item} />;
        }
        return null;
      })}
    </Container>
  );
};

export default Categories;

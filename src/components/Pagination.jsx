import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`;
const PrevButton = styled.button`
  margin: 10px 10px;
  padding: 10px;
  background-color: var(--darkSecondaryGreen);
  color: var(--darkPrimaryGreen);
  font-weight: 400;
  font-size: 15px;
`;
const Page = styled.div`
  display: flex;
  margin: 10px 10px;
`;
const NextButton = styled.button`
  margin: 10px 10px;
  padding: 10px;
  background-color: var(--darkSecondaryGreen);
  color: var(--darkPrimaryGreen);
  font-weight: 400;
  font-size: 15px;
`;
const Pagination = () => {
  const totalpages = 50;
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevButton = () => {
    if (pageNumber >= 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const handleNextButton = () => {
    if (pageNumber <= totalpages) {
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <Container>
      <PrevButton onClick={handlePrevButton}>Prev</PrevButton>
      <Page>
        {pageNumber + 1} of {totalpages}
      </Page>
      <NextButton onClick={handleNextButton}>Next</NextButton>
    </Container>
  );
};

export default Pagination;

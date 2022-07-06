import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  /* display: flex; */
  /* height: 100px;
  justify-content: center;
  align-items: center; */
`;
const Buttons = styled.div`
  display: flex;
`;
const PrevButton = styled.div`
  margin: 10px 10px;
  cursor: pointer;
`;
const Quantity = styled.div`
  margin: 10px 10px;
`;
const NextButton = styled.div`
  margin: 10px 10px;
  cursor: pointer;
`;
const QuantityCaculation = () => {
  const totalquantity = 50;
  const [quantityNumber, setQuantityNumber] = useState(1);

  const handlePrevButton = () => {
    if (quantityNumber >= 1) {
      setQuantityNumber(quantityNumber - 1);
    }
  };
  const handleNextButton = () => {
    if (quantityNumber <= totalquantity) {
      setQuantityNumber(quantityNumber + 1);
    }
  };
  return (
    <Container>
      <Buttons>
        <PrevButton onClick={handlePrevButton}>
          <FontAwesomeIcon icon={faMinus} />
        </PrevButton>
        <Quantity>{quantityNumber + 1} kg</Quantity>
        <NextButton onClick={handleNextButton}>
          <FontAwesomeIcon icon={faAdd} />
        </NextButton>
      </Buttons>
      <Quantity>Available Quatity: {totalquantity} kg</Quantity>
    </Container>
  );
};

export default QuantityCaculation;

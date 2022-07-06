import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QuantityCaculation from "../components/QuantityCaculation";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 30px;
`;
const Description = styled.div`
  margin: 20px 0px;
`;
const Price = styled.div`
  font-weight: 400;
  font-size: 40px;
  margin: 20px 0px;
`;
const Quantity = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
`;
const AmountContainer = styled.div`
  display: flex;
  margin: 10px 15px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src='assets/carrot.jpg' />
        </ImageContainer>
        <InfoContainer>
          <Title>Carrot</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            provident molestiae consequatur quibusdam dolor rerum et odit facere
            esse asperiores? Nostrum obcaecati iure fugiat at aperiam quod,
            error corrupti maiores.
          </Description>
          <Price>₹ 40/kg</Price>
          <Quantity>
            <AmountContainer>
              <QuantityCaculation />
            </AmountContainer>
          </Quantity>
          <Button>Add To Cart</Button>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;

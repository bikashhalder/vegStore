import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QuantityCaculation from "../components/QuantityCaculation";

const Container = styled.div``;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 30px;
  object-fit: cover;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 100%;
  flex: 2;
`;
const ProductName = styled.span`
  margin: 5px 0px;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 85%;
  margin-left: 20px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px;
  background-color: black;
  color: white;
  margin-top: 10px;
`;
const WishList = () => {
  return (
    <Container>
      <Navbar />
      <Product>
        <ProductDetail>
          <Image src='assets/tomato.jpg' />
          <Details>
            <ProductName>
              <b>Product:</b> Tomato
            </ProductName>
            <ProductName>
              <b>Category:</b> Fruit Vegetable
            </ProductName>
            <ProductName>
              <b>Health Benifit:</b>
              Tomatoes are loaded with a substance called lycopene. It gives
              them their bright red color and helps protect them from the
              ultraviolet rays of the sun. In much the same way, it can help
              protect your cells from damage. Tomatoes also have potassium,
              vitamins B and E, and other nutrients.
            </ProductName>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <QuantityCaculation />
          </ProductAmountContainer>
          <ProductPrice>₹ 90</ProductPrice>
          <Button>Buy Now</Button>
        </PriceDetail>
      </Product>
      <Hr />
      <Product>
        <ProductDetail>
          <Image src='assets/corn1.jpg' />
          <Details>
            <ProductName>
              <b>Product:</b> Corn
            </ProductName>
            <ProductName>
              <b>Category:</b> Fruit Vegetable
            </ProductName>
            <ProductName>
              <b>Health Benifit:</b>
              Corn is rich in vitamin C, an antioxidant that helps protect your
              cells from damage and wards off diseases like cancer and heart
              disease. Yellow corn is a good source of the carotenoids lutein
              and zeaxanthin, which are good for eye health and help prevent the
              lens damage that leads to cataracts.
            </ProductName>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <QuantityCaculation />
          </ProductAmountContainer>
          <ProductPrice>₹ 50</ProductPrice>
          <Button>Buy Now</Button>
        </PriceDetail>
      </Product>
      <Footer />
    </Container>
  );
};

export default WishList;

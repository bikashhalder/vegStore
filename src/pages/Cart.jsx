import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuantityCaculation from "../components/QuantityCaculation";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  @media only screen and (max-width: 380px) {
    margin: 20px;
  }
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  @media only screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  @media only screen and (max-width: 380px) {
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
  @media only screen and (max-width: 380px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Shoping Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shoping Bag (2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
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
                    Tomatoes are loaded with a substance called lycopene. It
                    gives them their bright red color and helps protect them
                    from the ultraviolet rays of the sun. In much the same way,
                    it can help protect your cells from damage. Tomatoes also
                    have potassium, vitamins B and E, and other nutrients.
                  </ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  {/* <FontAwesomeIcon icon={faAdd} />
                  <ProductAmount>3 Kg</ProductAmount>
                  <FontAwesomeIcon icon={faRemove} /> */}
                  <QuantityCaculation />
                </ProductAmountContainer>
                <ProductPrice>₹ 90</ProductPrice>
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
                    Corn is rich in vitamin C, an antioxidant that helps protect
                    your cells from damage and wards off diseases like cancer
                    and heart disease. Yellow corn is a good source of the
                    carotenoids lutein and zeaxanthin, which are good for eye
                    health and help prevent the lens damage that leads to
                    cataracts.
                  </ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  {/* <FontAwesomeIcon icon={faAdd} />
                  <ProductAmount>2 Kg</ProductAmount>
                  <FontAwesomeIcon icon={faRemove} /> */}
                  <QuantityCaculation />
                </ProductAmountContainer>
                <ProductPrice>₹ 50</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>₹ 140</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 40</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ 0</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ 180</SummaryItemPrice>
            </SummaryItem>
            <Button>BUY NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

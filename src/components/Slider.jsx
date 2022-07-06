import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #07e249;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  @media only screen and (max-width: 580px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 50px;
  color: black;
  @media only screen and (max-width: 580px) {
    font-size: 40px;
  }
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

// main function
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <ImgContainer>
            <Image src='assets/salad.jpg' />
          </ImgContainer>
          <InfoContainer>
            <Title>Fresh,Healthy And Best Quality Vegetables</Title>
            <Description>
              Get All The Veggies You Want Delivered To Your Door! Buy Now and
              Get A Special Discount
            </Description>
            <Button> Shop Now</Button>
          </InfoContainer>
        </Slide>
        {/* slide 2 */}
        <Slide>
          <InfoContainer>
            <Title>Take Your Veggie Store Online </Title>
            <Description>
              With us, you may profit. We handle the entire supply chain when
              you sell online. All you have to do is sign up as a member.
            </Description>
            <Button>Learn More</Button>
          </InfoContainer>
          <ImgContainer>
            <Image src='assets/vegShop.jpg' />
          </ImgContainer>
        </Slide>
        {/* slide 3 */}
        <Slide>
          <ImgContainer>
            <Image src='assets/mixVeg.jpg' />
          </ImgContainer>
          <InfoContainer>
            <Title>
              A Farmer or A Industry. We'll Take Care Of All Of Your Needs.
            </Title>
            <Description>
              If you are a vegetable producer or customer that grows on a huge
              scale and requires tonnes of veggies on a daily basis, we are here
              to solve your problem and offer you the best deal.
            </Description>
            <Button> Learn More</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Arrow>
    </Container>
  );
};

export default Slider;

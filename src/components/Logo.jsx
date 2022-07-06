import React from "react";
import styled from "styled-components";

const LogoDesign = styled.div`
  cursor: pointer;
  font-family: "Splash", cursive;
  font-size: x-large;
`;
const Logo = () => {
  return (
    <LogoDesign>
      <span style={{ color: "#2cc739" }}>Veg</span>
      <span style={{ color: "#0d480d" }}>Bucket</span>
    </LogoDesign>
  );
};

export default Logo;

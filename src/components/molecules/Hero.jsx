import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "components/atoms/Section";
import Grid from "components/atoms/Grid";
import { BreakpointSizes, breakAt } from "styles/Breakpoints";

const Root = styled.div`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.bgDark},
    ${(props) => props.theme.colors.bgHero},
    ${(props) => props.theme.colors.bgDark}
  );
  padding: 0;
`;

const Content = styled.div`
  margin-top: 5px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 820px;

  li {
    padding: 0 20px 0 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    list-style: none;
    color: ${(props) => props.theme.colors.textOther};

    ${breakAt(BreakpointSizes.md)} {
      padding: 0 100px 0 0;
    }
  }
`;

const StoreButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 444px;
  margin-bottom: 10px;

  ${breakAt(BreakpointSizes.md)} {
    justify-content: space-between;
  }

  div {
    width: calc(50% - 20px);
    padding: 10px 10px;
    cursor: pointer;
    background: linear-gradient(125.7deg, #1f1f1f, #353535);

    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s linear;

    &:hover {
      /* background: #353535; */
      background: linear-gradient(125.7deg, #353535, #474747);
    }
  }
`;

const StyledMedia = styled.div`
  margin-top: 0px;
  display: flex;
  background: url(${(props) => props.image}), rgba(0, 0, 0, 0.5);
  background-position: center center;
  background-size: cover;
  background-blend-mode: overlay;
  height: 190px;
  border-radius: 10px;

  ${breakAt(BreakpointSizes.sm)} {
    height: 280px;
  }
  ${breakAt(BreakpointSizes.md)} {
    margin-top: 100px;
    height: 300px;
  }
`;

const Hero = ({ image, children }) => {
  return (
    <Root>
      <Section>
        <Grid md={2}>
          <Content>
            {children}
            <List>
              <li>
                The Internet has revolutionized the way we interact,
                communicate, and access knowledge. Technology has become an
                integral part of our lives and will continue to shape the
                future.
              </li>
            </List>
            <StoreButtons>
              <div>
                <a href="#/" target="_blank">
                  <img
                    src="https://stunning.so/images/theme3/intro/google.svg"
                    alt="google"
                  />
                </a>
              </div>
              <div>
                <a href="#/" target="_blank">
                  <img
                    src="https://stunning.so/images/theme3/intro/apple.svg"
                    alt="apple"
                  />
                </a>
              </div>
            </StoreButtons>
          </Content>
          <Content>
            <StyledMedia image={image} />
          </Content>
        </Grid>
      </Section>
    </Root>
  );
};
Hero.defaultProps = {
  image: undefined,
  children: undefined,
};

Hero.propTypes = {
  image: PropTypes.node,
  children: PropTypes.node,
};

export default Hero;

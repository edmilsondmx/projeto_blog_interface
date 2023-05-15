import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "components/atoms/Button";
import Section from "components/atoms/Section";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const ImageContainer = styled.div`
  text-align: right;
  svg {
    width: 100%;
    height: auto;
    max-width: 400px;
    color: ${(props) => props.theme.colors.main};
  }
`;

const ErrorTitle = styled.h1`
  margin-top: 0;
`;

const ErrorMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const Error = ({ title, description, image }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <ErrorTitle>{title}</ErrorTitle>
        </Heading>
        <ErrorMessage>{description}</ErrorMessage>
        <div>
          <Button variant="menu" to="/">
            Ir para a página inicial
          </Button>
        </div>
      </div>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);
Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;

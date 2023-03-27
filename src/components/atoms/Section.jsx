import PropTypes from "prop-types";
import styled from "styled-components";

import { BreakpointSizes, breakAt } from "../../styles/Breakpoints";

const Container = styled.div`
  width: 100%;
  padding: 5px;

  ${breakAt(BreakpointSizes.lg)} {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
  }
`;
Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

const Section = ({ children }) => <Container>{children}</Container>;

Section.defaultProps = {
  children: undefined,
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

import React from "react";
import styled from "styled-components";

import { BreakpointSizes, breakAt } from "styles/Breakpoints";

const ToggleWrapper = styled.div`
  position: fixed;
  top: 149px;
  right: 10px;
  color: white;

  @media (min-width: 609px) {
    top: 100px;
  }

  ${breakAt(BreakpointSizes.md)} {
    top: 100px;
  }

  input {
    position: absolute;
    left: -99em;

    &:checked + .toggle {
      background-color: #749dd6;
    }

    &:checked + .toggle:before {
      color: #749ed7;
    }

    &:checked + .toggle:after {
      color: #fff;
    }

    &:checked + .toggle .toggle__handler {
      background-color: #ffe5b5;
      transform: translate3d(35px, 1px, 0) rotate(0);
      margin: 0;
    }

    &:checked + .toggle .toggle__handler .crater {
      opacity: 1;
    }

    &:checked + .toggle .star--1 {
      width: 2px;
      height: 2px;
    }

    &:checked + .toggle .star--2 {
      width: 4px;
      height: 4px;
      transform: translate3d(-5px, 0, 0);
    }

    &:checked + .toggle .star--3 {
      width: 2px;
      height: 2px;
      transform: translate3d(-7px, 0, 0);
    }

    &:checked + .toggle .star--4,
    &:checked + .toggle .star--5,
    &:checked + .toggle .star--6 {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    &:checked + .toggle .star--4 {
      transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    &:checked + .toggle .star--5 {
      transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    &:checked + .toggle .star--6 {
      transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
`;

const Toggle = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 64px;
  height: 30px;
  background-color: #83d8ff;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  .star {
    position: absolute;
    background-color: #fff;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }

  .star--1 {
    top: 4px;
    left: 33px;
    z-index: 0;
    width: 20px;
    height: 3px;
  }

  .star--2 {
    top: 13px;
    left: 25px;
    z-index: 1;
    width: 20px;
    height: 3px;
  }

  .star--3 {
    top: 23px;
    left: 40px;
    z-index: 0;
    width: 20px;
    height: 3px;
  }

  .star--4,
  .star--5,
  .star--6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .star--4 {
    top: 16px;
    left: 11px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }

  .star--5 {
    top: 3px;
    left: 17px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }

  .star--6 {
    top: 26px;
    left: 18px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
`;

const ToggleHandler = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
  margin: 1px;

  .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }

  .crater--1 {
    top: 9px;
    left: 10px;
    width: 4px;
    height: 4px;
  }

  .crater--2 {
    top: 18px;
    left: 10px;
    width: 6px;
    height: 6px;
  }

  .crater--3 {
    top: 10px;
    left: 18px;
    width: 8px;
    height: 8px;
  }
`;

const Switches = (props) => {
  return (
    <ToggleWrapper>
      <input
        onClick={props.toggleTheme}
        type="checkbox"
        className="dn"
        id="dn"
      />
      <Toggle htmlFor="dn" className="toggle">
        <ToggleHandler className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </ToggleHandler>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </Toggle>
    </ToggleWrapper>
  );
};

export default Switches;

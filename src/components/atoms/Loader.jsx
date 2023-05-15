import React from "react";
import styled from "styled-components";

const Root = styled.div`
  color: ${(props) => props.theme.colors.main};
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 100px;
  opacity: 0.8;
  width: 100%;
  text-align: center;

  span {
    display: inline-block;
    animation: pulse_414 0.4s alternate infinite ease-in-out;
  }
  span:nth-child(odd) {
    animation-delay: 0.4s;
  }

  @keyframes pulse_414 {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;

// const Loading = styled.div`
//   --main: ${(props) => props.theme.colors.main};
//   --secondary: ${(props) => props.theme.colors.text};
//   padding-top: 100px;
//   .loader {
//     position: relative;
//     width: 120px;
//     height: 90px;
//     margin: 0 auto;
//   }

//   .loader:before {
//     content: "";
//     position: absolute;
//     bottom: 30px;
//     left: 50px;
//     height: 30px;
//     width: 30px;
//     border-radius: 50%;
//     background: var(--main);
//     animation: loading-bounce 0.5s ease-in-out infinite alternate;
//   }

//   .loader:after {
//     content: "";
//     position: absolute;
//     right: 0;
//     top: 0;
//     height: 7px;
//     width: 45px;
//     border-radius: 4px;
//     box-shadow: 0 5px 0 var(--secondary), -35px 50px 0 var(--secondary),
//       -70px 95px 0 var(--secondary);
//     animation: loading-step 1s ease-in-out infinite;
//   }

//   @keyframes loading-bounce {
//     0% {
//       transform: scale(1, 0.7);
//     }

//     40% {
//       transform: scale(0.8, 1.2);
//     }

//     60% {
//       transform: scale(1, 1);
//     }

//     100% {
//       bottom: 140px;
//     }
//   }

//   @keyframes loading-step {
//     0% {
//       box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 var(--secondary),
//         -35px 50px 0 var(--secondary), -70px 90px 0 var(--secondary);
//     }

//     100% {
//       box-shadow: 0 10px 0 var(--secondary), -35px 50px 0 var(--secondary),
//         -70px 90px 0 var(--secondary), -70px 90px 0 rgba(0, 0, 0, 0);
//     }
//   }
// `;

const Loader = () => {
  return (
    // <Loading>
    //   <div class="loader"></div>
    // </Loading>
    <Root>
      <span>&#x0007B;</span>
      <span>&#x0007D;</span>
    </Root>
  );
};

export default Loader;

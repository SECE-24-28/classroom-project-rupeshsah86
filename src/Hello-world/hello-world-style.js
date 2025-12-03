// import styled from 'styled-components';

// export const WelcomeContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 3rem;
//   background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
//   border-radius: 20px;
//   margin: 1rem;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(45deg, rgba(255, 107, 107, 0.1) 0%, rgba(254, 202, 87, 0.1) 50%, rgba(72, 219, 251, 0.1) 100%);
//     pointer-events: none;
//   }

//   .welcome-title {
//     background: linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     font-size: 2.5rem;
//     font-weight: 800;
//     text-align: center;
//     margin: 0;
//     position: relative;
//     z-index: 1;
//     text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;
import styled from "styled-components";
export const HelloWorldStyle = styled.div`
  .parent {
    display: flex;
    flex-direction: column;
    background-color: green;
    //align-items: flex-start;
    // align-items: center;
    // align-items: flex-start;
    //justify-content: flex-end;
    align-items: flex-top;
    //justify-content: space-evenly;
    //justify-content: space-between;
    //  justify-content: space-around;
    gap: 20px;
    height: 100vh;
  }
  .square__child {
    width: 50px;
    height: 50px;
    background-color: yellow;
  }
`;
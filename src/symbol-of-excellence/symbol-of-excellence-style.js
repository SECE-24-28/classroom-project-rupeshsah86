// import styled from "styled-components";

// export const SymbolOfExcellenceStyle = styled.div`
//   width: 100%;
//   padding: 80px 20px;
//   background: #f8f8f8;
//   box-sizing: border-box;
//   font-family: "Inter", sans-serif;

//   /* TOP HEADING SECTION */
//   .element__one {
//     max-width: 1000px;
//     margin: 0 auto 60px auto;
//     text-align: center;

//     h1 {
//       font-size: 2.8rem;
//       font-weight: 800;
//       margin-bottom: 25px;
//       color: #000;
//     }

//     p {
//       font-size: 1.2rem;
//       line-height: 1.9;
//       color: #5c6880;
//       max-width: 900px;
//       margin: 0 auto;
//     }
//   }

//   /* VISION + MISSION SECTION */
//   .element__two {
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     gap: 50px;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding-top: 40px;
//     border-top: 1px solid #e0e0e0;
//   }

//   .element__two__child {
//     flex: 1;
//     max-width: 500px;

//     h2 {
//       font-size: 1.8rem;
//       font-weight: 700;
//       margin-bottom: 15px;
//       display: flex;
//       align-items: center;
//     }

//     /* LEFT ORANGE BAR (Vision) */
//     &:first-child h2 {
//       color: #f4a640; /* vision orange */
//       position: relative;
//       padding-left: 12px;
//     }

//     &:first-child h2::before {
//       content: "";
//       width: 5px;
//       height: 26px;
//       background: #f4a640;
//       position: absolute;
//       left: 0;
//       border-radius: 3px;
//     }

//     /* RIGHT BLUE BAR (Mission) */
//     &:last-child h2 {
//       color: #27c3ff; /* mission blue */
//       position: relative;
//       padding-left: 12px;
//     }

//     &:last-child h2::before {
//       content: "";
//       width: 5px;
//       height: 26px;
//       background: #27c3ff;
//       position: absolute;
//       left: 0;
//       border-radius: 3px;
//     }

//     p {
//       font-size: 1.1rem;
//       line-height: 1.8;
//       color: #5c6880;
//       margin-top: 10px;
//     }
//   }

//   /* RESPONSIVE */
//   @media (max-width: 900px) {
//     .element__two {
//       flex-direction: column;
//       gap: 60px;
//       padding-top: 30px;
//     }

//     .element__one h1 {
//       font-size: 2.2rem;
//     }
//   }
// `;

import styled from "styled-components";
export const SymbolOfExcellenceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .para {
    max-width: 1500px;
    text-align: center;
  }
  .element__two {
    display: flex;
    gap: 40px;
    max-width: 1280px;
    @media (max-width: 920px) {
      flex-direction: column;
    }
  }
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 48px;
  }
  .para {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    text-align: center;
    color: rgb(86, 102, 131);
  }
  .sub__title {
    color: rgb(243, 176, 79);
    // border-left: 4px solid rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
  }
  .details {
    align-items: left;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    /* border: 10px solid red; */
    color: rgb(86, 102, 131);
  }
`;
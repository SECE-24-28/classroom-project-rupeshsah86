import styled from "styled-components";

export const SymbolOfExcellenceStyle = styled.div`
  width: 100%;
  padding: 60px 20px;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;

  /* FIRST SECTION */
  .element__one {
    max-width: 900px;
    margin: 0 auto 50px auto;
    text-align: center;

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #222;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #555;
    }
  }

  /* SECOND SECTION */
  .element__two {
    display: flex;
    gap: 30px;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;

    .element__two__child {
      background: #efebebff;
      padding: 25px;
      border-radius: 12px;
      flex: 1;
      min-height: 200px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: translateY(-5px);
      }

      h2 {
        font-size: 1.6rem;
        margin-bottom: 15px;
        color: #e9e9e9ff;
      }

      p {
        font-size: 1rem;
        line-height: 1.6;
        color: #dbdfc9ff;
      }
    }
  }

  /* RESPONSIVE DESIGN */
  @media (max-width: 768px) {
    .element__two {
      flex-direction: column;
    }

    .element__one h1 {
      font-size: 2rem;
    }

    .element__two__child h2 {
      font-size: 1.4rem;
    }
  }
`;

import styled from "styled-components";


export const TempStyle = styled.div`
  padding: 40px 80px;
  h1{
    text-align: center;
    color:red;
    font-size: 50px;
    font-weight: 700;
 
  }

  .grid-box {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    border-radius: 20px;
    min-height: 100px;
  }

  .text-section .title {
    font-size: 24px;
    color: #333;
  }

  .text-section h2 {
    font-size: 40px;
    margin-top: 10px;
    font-weight: 700;
  }

  .image-section {
    width: 150px;
    height: 150px;
    background: #ffffff40;
    border-radius: 20px;
  }

  .pink {
    background: #ffe4e7;
  }
  .blue {
    background: #e3f0ff;
  }
  .green {
    background: #e6ffe9;
  }
  .yellow {
    background: #ffeed0;
  }
`;

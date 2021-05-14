import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  .MuiTextField-root {
    width: 100%;
    margin-bottom: 25px;
  }
  .MuiButton-root {
    width: 100%;
    border-radius: 15px;
    background-color: #1da1f2;
    padding: 12px;
    font-weight: bold;
    text-transform: capitalize;
    &:hover {
      background-color: #1886ca;
    }
  }
`;
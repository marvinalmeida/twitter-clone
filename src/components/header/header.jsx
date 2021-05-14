import styled from "styled-components";

const Wrapper = styled.header`
  img {
    width: 58px;
  }
`;

const Header = () => (
  <Wrapper>
    <img src="./passarinho.png" />
    <h1>Entrar no Twitter</h1>
  </Wrapper>
);

export default Header;

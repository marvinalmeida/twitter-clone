import Header from "../header/header";
import Footer from "../footer/footer";
import { Wrapper } from "./layout.styles";

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;

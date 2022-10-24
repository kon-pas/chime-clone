import * as Styled from "./styled";

import Header from "@components/composition/Header";
import Footer from "@components/composition/Footer";
import Loader from "@components/composition/Loader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = props => {
  return (
    <Styled.PageContainer>
      <Loader />

      <Styled.HeaderContainer>
        <Header />
      </Styled.HeaderContainer>

      <main>{props.children}</main>

      <Styled.FooterContainer>
        <Footer />
      </Styled.FooterContainer>
    </Styled.PageContainer>
  );
};

export default Layout;


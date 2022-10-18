import * as S from "./styled";

import Header from "@components/composition/Header";
import Footer from "@components/composition/Footer";
import Loader from "@components/composition/Loader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = props => {
  return (
    <S.PageContainer>
      <Loader />

      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>

      <main>{props.children}</main>

      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </S.PageContainer>
  );
};

export default Layout;


import * as S from "./MainLayout.styled";

import Header from "@components/composition/Header";
import Footer from "@components/composition/Footer";
import Loader from "@components/composition/Loader";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = props => {
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

export default MainLayout;


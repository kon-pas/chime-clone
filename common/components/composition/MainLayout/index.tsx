import * as S from './MainLayout.styled';

import Header from "@components/composition/Header";
import Footer from "@components/composition/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <S.PageContainer>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>

      <main>
        {children}
      </main>

      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </S.PageContainer>
  );
}

export default MainLayout;
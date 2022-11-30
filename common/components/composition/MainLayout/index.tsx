import * as Styled from "./styled";

import type { FC, ReactNode } from "react";

import Header from "@components/composition/Header";
import Footer from "@components/composition/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = props => {
  return (
    <Styled.PageContainer>
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

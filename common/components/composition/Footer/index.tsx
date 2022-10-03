import * as S from './styled';

import NAVIGATION_ITEMS from '@constants';

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.MenuSection>
        menu section
      </S.MenuSection>

      <S.SocialSection>
        social section
      </S.SocialSection>
      
      <S.DisclaimerSection>
        disclaimer section
      </S.DisclaimerSection>
    </S.Footer>
  );
}

export default Footer;
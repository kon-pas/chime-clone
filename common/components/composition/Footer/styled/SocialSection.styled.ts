import styled from "styled-components";

import { MEDIA } from "@constants";

const SocialSection = styled.div`
  width: 170px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0 auto;
  transition: all 0.5s ease-out;

  > a {
    height: 40px;
  }

  ${MEDIA.MD} {
    width: auto;
    height: 40px;
    gap: 1rem;
    justify-content: center;
  }

  ${MEDIA.LG} {
    width: 170px;
    height: 150px;
    justify-content: space-between;
  }
`;

export default SocialSection;

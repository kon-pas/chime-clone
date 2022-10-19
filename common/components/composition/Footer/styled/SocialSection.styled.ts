import styled from "styled-components";

import { getMedia } from "@utils";

import { resizeTransition } from "@utils";

const SocialSection = styled.div`
  width: 170px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0 auto;

  ${resizeTransition("all")}

  > a {
    height: 40px;
  }

  ${getMedia('md')} {
    width: auto;
    height: 40px;
    gap: 1rem;
    justify-content: center;
  }

  ${getMedia('lg')} {
    width: 170px;
    height: 150px;
    justify-content: space-between;
  }
`;

export default SocialSection;

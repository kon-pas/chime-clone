import styled from "styled-components";

import { COLORS } from "@constants";

const SubmenuContainerDesktop = styled.div`
  padding-top: 0.75rem;

  > menu {
    padding: 0.9rem;
    border-radius: 0.3rem;
    border-color: ${COLORS.FONT_GRAY_LIGHT};
    background-color: ${COLORS.WHITE};
    box-shadow: 1px 1px 7px #ccc;
    display: grid;
    gap: 1.1rem;
    user-select: none;

    > li {
      color: ${COLORS.FONT_GRAY_MEDIUM};
      transition: color 0.15s ease-out;
      font-size: 0.85rem;
      font-weight: 600;
      align-self: center;

      &:hover {
        color: ${COLORS.LIME_DARK};
      }
    }
  }
`;

export default SubmenuContainerDesktop;

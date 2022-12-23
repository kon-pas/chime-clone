import styled from "styled-components";

import { h2, p } from "@styles/Tags.styled";

import { COLORS } from "@constants";

import { getMedia, getResizeTransition } from "@utils";

interface ChildrenWrapper {
  isCentered?: boolean;
}

const ChildrenWrapper = styled.div<ChildrenWrapper>`
  height: fit-content;

  ${getResizeTransition("width", "margin")}

  > h2 {
    ${h2}
  }

  > p {
    ${p}
    margin-top: 0.75rem;
    margin-bottom: 1.25rem;

    > small {
    }
  }

  > ul {
    > li {
      list-style-type: disc;
      list-style-position: inside;
      margin: 0.5rem 0;
    }
  }

  ${getMedia("md")} {
    width: 365px;
    margin: auto 0;
  }

  ${getMedia("lg")} {
    width: 400px;
    margin: ${props => (props.isCentered ? "auto auto" : "auto 0")};
  }
`;

export default ChildrenWrapper;

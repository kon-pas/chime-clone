import styled from "styled-components";

import { COLORS, MEDIA } from "@constants";

const ChildrenContainer = styled.div`
  display: grid;
  gap: 1rem;

  h1 {
    font-size: 2.3rem;

    ${MEDIA.MD} {
      font-size: 2.7rem;
    }
  
    ${MEDIA.LG} {
      font-size: 3.3rem;
    }
  }

  p {
    line-height: 2em;
  }

  ul {
    display: grid;
    gap: 0.75rem;
    margin-left: 30px;
    
    li {
      font-weight: 600;
      line-height: 1.5em;

      &::before {
        vertical-align: sub;
        content:"";
        background-image: url('https://www.chime.com/wp-content/uploads/2020/11/check@2x.png');
        display: inline-block;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        width: 20px; 
        height: 20px;
        margin: auto 10px auto -30px;
      }
    }
  }

  small {
    color: ${COLORS.FONT_GRAY_LIGHT};
  }

  ${MEDIA.MD} {
    width: 365px;
  }

  ${MEDIA.LG} {
    width: 485px;
  }
`;

export default ChildrenContainer;
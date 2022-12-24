import styled from "styled-components";
import { COLORS } from "@constants";
import { getMedia } from "@utils";
import { ContentContainer } from "@components/elements";

const Container = styled(ContentContainer)`
  background-color: ${COLORS.GRAY_LIGHT};
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${getMedia("md")} {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default Container;

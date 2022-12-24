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
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default Container;

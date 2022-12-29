import styled from "styled-components";
import { ContentContainer } from "@components/elements";
import { getMedia } from "@utils";

const Container = styled(ContentContainer)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${getMedia("md")} {
    display: grid;
    grid-template-columns: 20% 1fr;
    gap: 5rem;
  }

  ${getMedia("lg")} {
    grid-template-columns: 25% 1fr;
    gap: 5rem;
  }
`;

export default Container;

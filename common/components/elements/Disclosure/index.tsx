import * as Styled from "./styled";

import type { FC, ReactNode } from "react";

import { useState } from "react";
import { IconSVG } from "@components/elements";

interface DisclosureProps {
  label: string;
  children: ReactNode;
  opened?: boolean;
}

const Disclosure: FC<DisclosureProps> = props => {
  const [isOpened, setIsOpened] = useState<boolean>(props.opened ?? false);

  return (
    <Styled.Container>
      <Styled.Tab onClick={() => setIsOpened(isOpened => !isOpened)}>
        <Styled.TextWrapper>{props.label}</Styled.TextWrapper>

        <Styled.ImageWrapper isOpened={isOpened}>
          <IconSVG>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </IconSVG>
        </Styled.ImageWrapper>
      </Styled.Tab>

      {isOpened && (
        <Styled.Modal isOpened={isOpened}>{props.children}</Styled.Modal>
      )}
    </Styled.Container>
  );
};

export default Disclosure;

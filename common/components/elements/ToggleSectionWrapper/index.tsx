import * as Styled from "./styled";

import type { FC, ReactNode } from "react";

import { useEffect, useState } from "react";
import { IconSVG } from "@components/elements";

interface ToggleSectionWrapperProps {
  views: ReactNode[];
}

const ToggleSectionWrapper: FC<ToggleSectionWrapperProps> = props => {
  const [viewIdx, setViewIdx] = useState<number>(0);

  useEffect(() => {
    const intervalDescriptor: NodeJS.Timer = setInterval(() => {
      setViewIdx(current => (current + 1) % props.views.length);
    }, 3000);
    return () => clearInterval(intervalDescriptor);
  }, [props.views.length]);

  return (
    <Styled.Container>
      {props.views.map((view, idx) => (
        <Styled.View key={idx} visible={idx === viewIdx}>
          {view}
        </Styled.View>
      ))}

      <Styled.Arrow side="left">
        <IconSVG strokeWidth={1.25}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </IconSVG>
      </Styled.Arrow>

      <Styled.Arrow side="right">
        <IconSVG strokeWidth={1.25}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </IconSVG>
      </Styled.Arrow>
    </Styled.Container>
  );
};

export default ToggleSectionWrapper;

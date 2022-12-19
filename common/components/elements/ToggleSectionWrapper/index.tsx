import * as Styled from "./styled";

import type { FC, ReactNode } from "react";

import { useEffect, useState } from "react";

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
    </Styled.Container>
  );
};

export default ToggleSectionWrapper;

import type { FC } from "react";

import { Button, IconSVG } from "@components/elements";

const LearnMoreButton: FC = () => (
  <Button style={{ cursor: "not-allowed" }}>
    Learn more
    <IconSVG strokeWidth={3}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </IconSVG>
  </Button>
);

export default LearnMoreButton;

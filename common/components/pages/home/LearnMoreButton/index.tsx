import Button from "@components/elements/Button";
import IconSVG from "@components/elements/IconSVG";

const LearnMoreButton: React.FC = () => (
  <Button>
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

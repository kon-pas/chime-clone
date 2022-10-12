import * as Styled from "./styled";

import Image from "next/image";

import type { HexColor } from "@types";

import { COLORS } from "@constants";

interface DualArticleProps {
  children: React.ReactNode;
  img: {
    src: `https://www.chime.com/${string}`;
    alt: string;
    width: number;
    height: number;
    float?: "left" | "right";
  };
  backgroundColor?: HexColor;
}

const DualArticle: React.FC<DualArticleProps> = props => {
  return (
    <Styled.Wrapper backgroundColor={props.backgroundColor ?? COLORS.WHITE}>
      <Styled.Container imageFloat={props.img.float ?? "left"}>
        <Styled.Header>{props.children}</Styled.Header>

        <Styled.ImageWrapper>
          <Image
            src={props.img.src}
            alt={props.img.alt}
            layout="responsive"
            width={props.img.width}
            height={props.img.height}
          />
        </Styled.ImageWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default DualArticle;

// <DualArticle.Container imageFloat="left" backgroundColor={COLORS.GRAY_MEDIUM}>
//       <DualArticle.Header>
//         <h1>Get paid early</h1>
//         <p>
//           Set up direct deposit and get your paycheck up to 2 days earlier
//           than some of your co-workers!<sup>2</sup>
//         </p>
//         <Button>
//           Learn more
//           <IconSVG strokeWidth={3}>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </IconSVG>
//         </Button>
//       </DualArticle.Header>

//       <DualArticle.ImageWrapper>
//         <Image
//           src="https://www.chime.com/wp-content/uploads/2020/03/paid-early.png"
//           alt="Overdraft fee-free with SpotMe"
//           layout="responsive"
//           width="713"
//           height="202"
//         />
//       </DualArticle.ImageWrapper>
//     </DualArticle.Container>

// <Button>
//             Learn more
//             <IconSVG strokeWidth={3}>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
//               />
//             </IconSVG>
//           </Button>

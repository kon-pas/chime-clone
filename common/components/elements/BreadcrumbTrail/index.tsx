// import * as Styled from "./BreadcrumbTrail.styled";

// import type { FC } from "react"
// import { useRouter } from "next/router";

// import {ContentContainer, IconSVG} from "@components/elements";

// const BreadcrumbTrail: FC = () => {
//   const { pathname } = useRouter();

//   return (
//     <ContentContainer>
//       <Styled.List>
//         {pathname
//           .slice(1)
//           .split("/")
//           .map((label, idx) => (
//             <Styled.Item key={idx}>
//               <Styled.ArrowWrapper>
//                 <IconSVG>
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                   />
//                 </IconSVG>
//               </Styled.ArrowWrapper>

//               <Styled.LabelWrapper>{label}</Styled.LabelWrapper>
//             </Styled.Item>
//           ))}
//       </Styled.List>
//     </ContentContainer>
//   );
// };

// export default BreadcrumbTrail;

// @@@ TODO: Remove null export.
export {};

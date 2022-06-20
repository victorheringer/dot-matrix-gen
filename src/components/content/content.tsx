import { ReactNode } from "react";
import { ContentContainer } from "./styled";

type ContentProps = {
  children: ReactNode;
};

export default function Content({ children }: ContentProps) {
  return <ContentContainer>{children}</ContentContainer>;
}

import { ReactNode, MouseEventHandler, CSSProperties } from "react";
import { CardWrapper } from "./styled";

type CardProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function Card({ children, onClick }: CardProps) {
  return <CardWrapper onClick={onClick}>{children}</CardWrapper>;
}

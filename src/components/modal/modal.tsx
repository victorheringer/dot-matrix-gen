import { ReactNode } from "react";
import { ModalContainer } from "./styled";

type ModalProps = {
  children: ReactNode;
  visible: boolean;
};

export function Modal({ children, visible }: ModalProps) {
  return <ModalContainer visible={visible}>{children}</ModalContainer>;
}

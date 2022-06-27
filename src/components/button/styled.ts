import styled from "styled-components";

const VARIANTS = {
  default: { bg: "#fafafa", border: "#e3e3e3", color: "#212121" },
  danger: { bg: "#ffcdd2", border: "#ef9a9a", color: "#212121" },
  secondary: { bg: "#424242", border: "#616161", color: "#fafafa" },
};

export const Button = styled.button<{
  variant: "default" | "danger" | "secondary";
  full?: boolean;
}>`
  background-color: ${({ variant }) => VARIANTS[variant].bg};
  padding: 5px;
  min-width: 70px;
  border: 1px solid ${({ variant }) => VARIANTS[variant].border};
  border-radius: 4px;
  cursor: pointer;
  color: ${({ variant }) => VARIANTS[variant].color};
  ${({ full }) => (full ? "width: 100%;" : "")}

  :hover {
    opacity: 0.6;
  }
`;

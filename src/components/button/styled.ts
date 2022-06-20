import styled from "styled-components";

const VARIANTS = {
  default: { bg: "#fafafa", border: "#e3e3e3" },
  danger: { bg: "#ffcdd2", border: "#ef9a9a" },
};

export const Button = styled.button<{
  variant: "default" | "danger";
  full?: boolean;
}>`
  background-color: ${({ variant }) => VARIANTS[variant].bg};
  padding: 5px;
  min-width: 70px;
  border: 1px solid ${({ variant }) => VARIANTS[variant].border};
  border-radius: 4px;
  cursor: pointer;
  ${({ full }) => (full ? "width: 100%;" : "")}

  :hover {
    opacity: 0.6;
  }
`;

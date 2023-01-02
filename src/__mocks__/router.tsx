import { MemoryRouter } from "react-router-dom";

export function RouterWrapper({ children }: any) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

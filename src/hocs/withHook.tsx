export const withHook =
  <T2, T1 = unknown>(
    Component: (props: T2) => JSX.Element,
    hook: (params: T1) => T2
  ): ((props: T1) => JSX.Element) =>
  (props) =>
    <Component {...hook(props)} />;

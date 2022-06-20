import { Link } from "react-router-dom";
import { BreadcrumbsContainer } from "./styled";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <BreadcrumbsContainer>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <>
          <Link to={match.pathname}>{breadcrumb}</Link>{" "}
          {breadcrumbs.length > index + 1 && "> "}
        </>
      ))}
    </BreadcrumbsContainer>
  );
}

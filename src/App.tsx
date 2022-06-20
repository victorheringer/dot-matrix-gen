import { Routes, Route } from "react-router-dom";
import * as Screens from "./screens";
import * as Components from "./components";

function App() {
  return (
    <Components.AppContainer>
      <Components.Sidebar />
      <Components.Content>
        <Components.Breadcrumbs />
        <Routes>
          <Route path="/" element={<Screens.Home />} />
          <Route path="projects" element={<Screens.Projects />} />
          <Route
            path="projects/:projectId"
            element={<Screens.ProjectDetails />}
          />
          <Route
            path="projects/:projectId/sprites/:spritesId"
            element={<Screens.Editor />}
          />
          <Route path="editor" element={<Screens.Editor />} />
          <Route path="*" element={<Screens.NotFound />} />
        </Routes>
      </Components.Content>
    </Components.AppContainer>
  );
}

export default App;

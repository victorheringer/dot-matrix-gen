import { Routes, Route } from "react-router-dom";
import { Project, Editor, Dashboard, NotFound, Home } from "./screens";
import * as Components from "./components";

function App() {
  return (
    <Components.AppContainer>
      <Components.Sidebar />
      <Components.Content>
        <Components.Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Dashboard />} />
          <Route path="projects/:projectId" element={<Project />} />
          <Route path="editor" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Components.Content>
    </Components.AppContainer>
  );
}

export default App;

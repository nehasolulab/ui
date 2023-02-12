import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner";
import LayoutWrapper from "./layout/LayoutWrapper";
import { routes } from "./routes";

const App = () => {
  let mainContent = routes.map((route) => (
    <Route
      key={route.name}
      path={route.path}
      exact={route.exact}
      name={route.name}
      element={<route.component />}
    />
  ));
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <LayoutWrapper>
          <Routes>{mainContent}</Routes>
        </LayoutWrapper>
      </Router>
    </Suspense>
  );
};

export default App;

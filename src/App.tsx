import React, { Suspense } from "react";
import { browserName } from "react-device-detect";
import { install } from "resize-observer";
import { AppTokenProvider } from "context/app-token";
import { UserRoleProvider } from "context/user-role";
import Root from "views/Root";

import { BrowserRouter as Router } from "react-router-dom";

if (browserName === "Safari") install(); // Fix Safari ResizeObserver error

function App() {
  return (
    <Suspense fallback={<span>cargando</span>}>
      <AppTokenProvider>
        <UserRoleProvider>
          <Router>
            <Root />
          </Router>
        </UserRoleProvider>
      </AppTokenProvider>
    </Suspense>
  );
}

export default App;

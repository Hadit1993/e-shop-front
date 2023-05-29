import { BrowserRouter, Route, Routes } from "react-router-dom";

import ActivationPage from "./pages/auth/ActivationPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import useApp from "../lib/hooks/pageHooks/useApp";
import ProtectedElement from "./ProtectedRoute";

function App() {
  const { hasUserAuthenticated } = useApp();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="no-auth-sensitive"
            >
              <LoginPage />
            </ProtectedElement>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="no-auth-sensitive"
            >
              <SignupPage />
            </ProtectedElement>
          }
        />
        <Route
          path="/activation/:tokenId"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="no-auth-sensitive"
            >
              <ActivationPage />
            </ProtectedElement>
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

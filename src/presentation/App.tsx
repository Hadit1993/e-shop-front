import { BrowserRouter, Route, Routes } from "react-router-dom";

import ActivationPage from "./pages/auth/ActivationPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import useApp from "../lib/hooks/pageHooks/useApp";
import ProtectedElement from "./ProtectedRoute";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import BestSellingPage from "./pages/bestSelling/BestSellingPage";
import EventsPage from "./pages/events/EventsPage";
import FaqPage from "./pages/faq/FaqPage";

function App() {
  const { authStatus } = useApp();

  const hasUserAuthenticated = authStatus === "Authenticated";

  return authStatus === "unknown" ? (
    <div className="flex justify-center items-center">...Loading</div>
  ) : (
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

        <Route
          path="/"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="auth-sensitive"
            >
              <HomePage />
            </ProtectedElement>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="auth-sensitive"
            >
              <ProductsPage />
            </ProtectedElement>
          }
        />

        <Route
          path="/best-selling"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="auth-sensitive"
            >
              <BestSellingPage />
            </ProtectedElement>
          }
        />

        <Route
          path="/events"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="auth-sensitive"
            >
              <EventsPage />
            </ProtectedElement>
          }
        />

        <Route
          path="/faq"
          element={
            <ProtectedElement
              hasUserAuthenticated={hasUserAuthenticated}
              type="auth-sensitive"
            >
              <FaqPage />
            </ProtectedElement>
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

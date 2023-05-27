import { BrowserRouter, Route, Routes } from "react-router-dom";

import ActivationPage from "./pages/auth/ActivationPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/activation/:tokenId" element={<ActivationPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

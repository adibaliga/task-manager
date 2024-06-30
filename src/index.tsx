import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "@asgardeo/auth-react";
import "./index.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import Layout from "./routes/layout";
import Auth from "./routes/auth";
import RouteValidator from "./RouteValidator";
import ProtectedRoute from "./ProtectedRoute";
const config = {
  signInRedirectURL:
    "https://5c28e7c4-14b2-480e-81b4-1ff860776f9c.e1-us-east-azure.choreoapps.dev/home",
  signOutRedirectURL:
    "https://5c28e7c4-14b2-480e-81b4-1ff860776f9c.e1-us-east-azure.choreoapps.dev/home",
  clientID: "6odRhSMOpfdEfpTXaaZml7xG6Eca",
  baseUrl: "https://api.asgardeo.io/t/org2sdbq",
  scope: ["openid", "profile"],
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider config={config}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RouteValidator />} />
            <Route element={<ProtectedRoute />}>
              <Route path="home" element={<Root />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

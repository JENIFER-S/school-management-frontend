import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
}
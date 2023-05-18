import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// import People from "./pages/People";
// import Office from "./pages/Office";

import MainContent from "./frontend/include/maincontent.js";
import Lobby from "./frontend/include/lobby.js";
import Callback from "./frontend/include/callback.js";


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainContent />} />
          <Route path="/game/Lobby" element={<Lobby />} />
          <Route path="/game/callback/:id" element={<Callback />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();

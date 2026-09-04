import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import NewComplaint from "./pages/NewComplaint";
import ComplaintDetail from "./pages/ComplaintDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/complaints/new" element={<NewComplaint />} />
      <Route path="/complaints/:id" element={<ComplaintDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
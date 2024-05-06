// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NewsDetail from "./components/news/NewsDetail";
import ContactPage from "./components/contact/PageContact";
import PageFields from "./components/fields/PageFields";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/fields" element={<PageFields />} />
      </Routes>
    </Router>
  );
}

export default App;

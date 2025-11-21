import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import ViewBlog from "./components/ViewBlog.tsx";
import { Analytics } from "@vercel/analytics/react";
import BlogEditor from "./components/Create.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post-to-it" element={<BlogEditor />} />
        <Route path="/:id" element={<ViewBlog />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </StrictMode>
);

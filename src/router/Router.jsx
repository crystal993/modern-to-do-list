import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Todo from "../pages/Todo";
import NotFound from "../pages/NotFound";
import Layout from "../components/elements/GlobalLayout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<Layout />}>
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

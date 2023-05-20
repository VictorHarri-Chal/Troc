import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import IngredientForm from "./pages/IngredientForm/IngredientForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/ingredientform" element={<IngredientForm />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import {Navbar} from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route element={<TodosPage />} path="/"></Route>
          <Route element={<AboutPage />} path="/about"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

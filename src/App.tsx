import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header title="" subtitle="" />
      <Outlet />
    </div>
  );
};
export default App;
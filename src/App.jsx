import { Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { getter } from "./services/request";
import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage";
import DataTablePage from "./pages/DataTablePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./router/ProtectedRoute";

export const StoreContext = createContext(null);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    getter("public/data.json").then((response) => {
      setTempData(response);
    });
  }, []);

  return (
    <StoreContext.Provider value={{ tempData, setTempData, isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<MainPage />} />}
            />
          }
        />
        <Route
          path="/data-table"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<DataTablePage />} />}
            />
          }
        />
        <Route
          path="/c"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<MainPage />} />}
            />
          }
        />
        <Route
          path="/d"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<DataTablePage />} />}
            />
          }
        />
        <Route
          path="/e"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<MainPage />} />}
            />
          }
        />
        <Route
          path="/f"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<DataTablePage />} />}
            />
          }
        />
        <Route
          path="/g"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<MainPage />} />}
            />
          }
        />
        <Route
          path="/h"
          element={
            <ProtectedRoute
              children={<Layout pageComponent={<DataTablePage />} />}
            />
          }
        />
      </Routes>
    </StoreContext.Provider>
  );
}

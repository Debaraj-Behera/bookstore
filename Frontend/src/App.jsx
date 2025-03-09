import React from "react";
import Home from "./home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Cources from "./courses/Cources";
import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Cources /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

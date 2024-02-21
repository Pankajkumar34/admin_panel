import React from "react";

import MainComp from "./MainComp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./auth/login";
import AllUser from "./components/dashbord/allUser";
import Products from "./components/dashbord/product";
import SignUp from "./auth/signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<MainComp />}>
          <Route path="alluser" element={<AllUser />} />
          <Route path=" " element={<Products />} />

        </Route>
      </Routes>

    </>
  );
}

export default App;

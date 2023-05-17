import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "./components/Navigation/Navigation";
const Home = lazy(() => import("./components/Home/Home.jsx"));
const Recipes = lazy(() => import("./components/Recipes/Recipes.jsx"));
const UserPage = lazy(() => import("./components/UserPage/UserPage.jsx"));
const Login = lazy(() => import("./components/Login/Login.jsx"));
const SignUp = lazy(() => import("./components/SignUp/SignUp.jsx"));
const Card = lazy(() => import("./components/Recipes/Card.jsx"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId/" element={<Card />}></Route>
          <Route path="/user" element={<UserPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

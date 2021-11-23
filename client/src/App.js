import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyLikes from "./pages/MyLikes";
import MyPosts from "./pages/MyPosts";
import NotFound from "./pages/NotFound";
import PostRegister from "./pages/PostRegister";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<PostRegister />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myPosts" element={<MyPosts />} />
        <Route path="/myLikes" element={<MyLikes />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

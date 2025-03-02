import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./assets/HomePage/HomePage"

import AboutUs from "./assets/AboutUs/AboutUs"

import Posts from "./assets/ListaPosts/PostsList"

import NavBar from "./assets/NavBar/NavBar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/posts" Component={Posts} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

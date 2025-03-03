import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./assets/HomePage/HomePage"

import AboutUs from "./assets/AboutUs/AboutUs"

import Posts from "./assets/ListaPosts/PostsList"

import SinglePost from "./assets/ListaPosts/SinglePost"

import Layout from "./Layout/Layout"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={SinglePost} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

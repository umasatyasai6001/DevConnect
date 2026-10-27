// import { useState } from 'react'
// import './App.css'
// import '../src/index.css'
// import Navbar from "./components/Navbar";
import {Routes,Route } from "react-router-dom";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Provider store={appStore}>
    <Routes>
      <Route path ="/" element={<Body/>}>
      <Route path ="/"  element={<Feed/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="profile" element={<Profile/>}/>
        </Route>
      {/* <Route path ="/" element={<Navbar/>}/> */}
    </Routes>
    </Provider>

    </>
  )
}

export default App;


import React from 'react'
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import OxfordWords from './pages/OxfordWords'
import Conjunctions from './pages/Conjunctions'
import PhrasalVerbs from './pages/PhrasalVerbs'
import Idioms from './pages/Idioms'
import Stories from './pages/Stories'
import Speaking from './pages/Speaking'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <div>
      <Header></Header>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/word' element={<OxfordWords />}></Route>
          <Route path='/conjunctions' element={<Conjunctions />}></Route>
          <Route path='/phrasalverbs' element={<PhrasalVerbs />}></Route>
          <Route path='/idioms' element={<Idioms />}></Route>
          <Route path='/stories' element={<Stories />}></Route>
          <Route path='/speaking' element={<Speaking />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>

    </div>
  )
}

export default App

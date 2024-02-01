import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import PrivateProfile from './components/PrivateProfile'
import About from './pages/About'
import CreateListing from './pages/CreateListing'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Profile from './pages/Profile'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UpdateListing from './pages/UpdateListing'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/listing/:listingId" element={<Listing/>}/>
        <Route element={<PrivateProfile/>}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/create-listing" element={<CreateListing/>}/>
          <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

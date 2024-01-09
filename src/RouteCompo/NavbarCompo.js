import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import HomeCompo from './../MainComponents/HomeCompo';
import BollywoodCompo from './../MainComponents/BollywoodCompo';
import FoodCompo from './../MainComponents/FoodCompo';
import FitnessCompo from './../MainComponents/FitnessCompo';
import HollywoodCompo from './../MainComponents/HollywoodCompo';
import TechnologyCompo from './../MainComponents/TechnologyCompo';
import StoreCompo from '../MainComponents/StoreCompo';
import ArticleCompo from '../DynamicArticle/ArticleCompo';
import ScrollToTop from 'react-scroll-to-top';


const NavbarCompo = ({ menuOpen, OpenMenuFun }) => {
  return (
    <div>
      <BrowserRouter>
        <nav className={menuOpen ? 'open navbar' : 'navbar'}>
          <NavLink onClick={OpenMenuFun} to='/'>Home</NavLink>
          <NavLink onClick={OpenMenuFun} to='/bollywood' >Bollywood</NavLink>
          <NavLink onClick={OpenMenuFun} to='/technology' >Technology</NavLink>
          <NavLink onClick={OpenMenuFun} to='/hollywood' >Hollywood</NavLink>
          <NavLink onClick={OpenMenuFun} to='/fitness' >Fitness</NavLink>
          <NavLink onClick={OpenMenuFun} to='food' >Food</NavLink>
        </nav>
        <hr className="navbar-line" />

        <StoreCompo>
          <Routes>
            <Route path='/' element={<HomeCompo />} />
            <Route path='/bollywood' element={<BollywoodCompo />} />
            <Route path='/technology' element={<TechnologyCompo />} />
            <Route path='/hollywood' element={<HollywoodCompo />} />
            <Route path='/fitness' element={<FitnessCompo />} />
            <Route path='/food' element={<FoodCompo />} />
            <Route path='/article/:id' element={<ArticleCompo />} />
          </Routes>
        </StoreCompo>
        <ScrollToTop smooth/>

      </BrowserRouter>

    </div>
  )
}

export default NavbarCompo
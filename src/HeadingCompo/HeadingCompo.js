import React, { useState } from 'react'
import NavbarCompo from '../RouteCompo/NavbarCompo'

const HeadingCompo = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const OpenMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="heading">
      <header>
        <h1><span className="head">The</span> Siren</h1>
        <div className="menu" onClick={OpenMenu}>
          <span className="burger"></span>
          <span className="burger"></span>
          <span className="burger"></span>
        </div>
      </header>

      <NavbarCompo menuOpen={menuOpen} OpenMenuFun={OpenMenu} />
    </div>
  )
}

export default HeadingCompo
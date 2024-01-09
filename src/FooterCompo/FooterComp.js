import React from 'react'

const FooterComp = () => {
  return (
    <footer>
      <h2>The Siren</h2>
      <ul className="category">
         <h4>Category</h4>
         <li>Home</li>
         <li>Bollywood</li>
         <li>Technology</li>
         <li>Hollywood</li>
         <li>Fitness</li>
         <li>Food</li>
      </ul>
      <ul className="about-us">
         <h4>About Us</h4>
         <li>Contact</li>
         <li>Privacy</li>
         <li>Press</li>
         <li>Career</li>
         <li>Events</li>
      </ul>
      <section className="about-me">
         <h4>Know about me</h4>
         <p>Banothu Akhil</p>
         <p>banothu.akhil2001@gmail.com</p>
           <div className="icons">
              <i className="fa-brands fa-square-facebook common"></i>
              <i className="fa-brands fa-square-twitter common"></i>
              <i className="fa-brands fa-square-instagram common"></i>
              <i className="fa-brands fa-youtube common"></i>
           </div>
      </section>
    </footer>
  )
}

export default FooterComp
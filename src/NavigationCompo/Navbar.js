import Bollywood from "../BollywoodCompo/Bollywood";
import Fitness from "../FitnessCompo/Fitness";
import Food from "../FoodCompo/Food";
import Hollywood from "../HollywoodCompo/Hollywood";
import Technology from "../TechnologyCompo/Technology";
import "./Navbar.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import ArticleStore from "../ArticleCompo/Articles";
import DynamicCompo from "../ArticleCompo/DynamicArticle";


function Navbar() {

   function hideNavBar(){
      let value = true;
      if(value === true) {
         value = false;
      }
      else {
         value = true;
      }
   }

   return (

      <section>
         <BrowserRouter>

            {/* Navigation link when click on the specific category */}
            <nav className="navlink" id="navlink">

               <div className="nav-open" onClick={hideNavBar()}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
               </div>

               <ul>
                  <li>
                     <NavLink className='link' to="/home">Home</NavLink>
                  </li>

                  <li>
                     <NavLink className='link' to="/bollywood">Bollywood</NavLink>
                  </li>

                  <li>
                     <NavLink className='link' to="/technology">Technology</NavLink>
                  </li>

                  <li>
                     <NavLink className='link' to="/hollywood">Hollywood</NavLink>
                  </li>

                  <li>
                     <NavLink className='link' to="/fitness">Fitness</NavLink>
                  </li>

                  <li>
                     <NavLink className='link' to="/food">Food</NavLink>
                  </li>
               </ul>

            </nav>
            <hr className="mainline" />

            {/* Navigation link when directly typed in the url */}
            <ArticleStore>
               <Routes>
                  <Route path="/bollywood" element={<Bollywood />} />
                  <Route path="/technology" element={<Technology />} />
                  <Route path="/hollywood" element={<Hollywood />} />
                  <Route path="/fitness" element={<Fitness />} />
                  <Route path="/food" element={<Food />} />
                  <Route path="/article/:id" element={<DynamicCompo />}/>
               </Routes>
            </ArticleStore>
         </BrowserRouter>
      </section>


   );
}

export default Navbar;
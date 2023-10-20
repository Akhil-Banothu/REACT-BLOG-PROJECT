import { useContext } from "react";
import { store } from "../ArticleCompo/Articles";
import "./category.css"
import { Link } from "react-router-dom";

function Bollywood() {
   const [data] = useContext(store);
   return (
      <section className="category">
         <section className="part1">
            <h1 className="categoryTitle">Bollywood</h1>
            <hr className="sectionline1" />
            {data.filter((data) => data.footer === 'Bollywood').map((item, index) => {
               return (
                  <>
                     <div key={index} >
                        <Link to={`/article/${item.id}`} className="box">
                           <img className="articleimage" src={item.url} />

                           <div className="innerbox">
                              <p className="articleTitle">{item.heading.slice(0, 60)}...</p>
                              <p className="content">{item.description.slice(0, 150)}...</p>
                              <p className="author"><span className="authorName">{item.author}</span> / {item.date}</p>
                           </div>
                        </Link>
                     </div>
                     <hr className=".articleline" />
                  </>
               );
            })}
         </section>

         <section className="part2">
            <h1 className="categoryTitle">Top Posts</h1>
            <hr className="sectionline1" />
            {data.filter((data) => data.content === "Bollywood1").map((item, index) => {
               return (
                  <>
                     <div key={index} >
                        <Link to={`/article/${item.id}`} className="box box2">
                           <img className="articleimage articleimage2" src={item.url} />
                           <div className="innbox2">
                              <div>
                                 <p className="articleTitle">{item.heading.slice(0, 60)}...</p>
                                 <p className="author author2"><span className="authorName">{item.author}</span> / {item.date}</p>
                              </div>
                              <div className="number">{item.number}</div>
                           </div>
                        </Link>
                     </div>
                     <hr className=".articleline" />
                  </>
               )
            })}
            <div className="box3">
               {data.filter((data) => data.footer === "BollywoodTP").map((item, index) => {
                  return (
                     <>
                        <div key={index}>
                           <Link to={`/article/${item.id}`} className="box">
                              <img className="articleimage" src={item.url} />
                              <div className="innerbox">
                                 <p className="articleTitle">{item.heading.slice(0, 30)}...</p>
                                 <p className="author author3"><span className="authorName">{item.author}</span> / {item.date}</p>
                              </div>
                              <div className="number">{item.number}</div>
                           </Link>
                           <hr className=".articleline" />
                        </div>

                     </>
                  );
               })}
            </div>

            <div className="advertisement">
               <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2019/06/mx-player-an-original-series-bollywood-buzzinga-ad-delhi-times-12-05-2019.png" />
            </div>
         </section>
      </section>
   );
}

export default Bollywood;

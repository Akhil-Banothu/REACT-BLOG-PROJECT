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
                     <div key={item.id} >
                        <Link to={`/article/${item.id}`} className="box">
                           <img className="articleimage" src={item.url} />

                           <div className="innerbox">
                              <p className="articleTitle">{item.heading.slice(0, 80)}...</p>
                              <p className="content">{item.description.slice(0, 200)}...</p>
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
            {data.filter((data) => data.content === "1").map((item, index) => {
               return (
                  <>
                     <div key={item.id} >
                        <Link to={`/article/${item.id}`} className="box box2">
                           <img className="articleimage articleimage2" src={item.url} />

                           <div className="innerbox">
                              <p className="articleTitle">{item.heading.slice(0, 60)}...</p>
                              <p className="author author2"><span className="authorName">{item.author}</span> / {item.date}</p>
                           </div>
                           <div className="number">{item.content}</div>

                        </Link>
                     </div>
                     <hr className=".articleline" />
                  </>
               );
            })};

            {data.filter((data) => data.footer === "Bollywood-TP").map((item, index) => {
               return (
                  <>
                     
                  </>
               );
            })}
         </section>
      </section>
   );
}

export default Bollywood;

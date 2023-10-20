import { useContext } from "react";
import { store } from "../ArticleCompo/Articles";
import { Link } from "react-router-dom";

function Food() {
   const [data] = useContext(store);
   return (
      <section className="category">
         <section className="part1">
            <h1 className="categoryTitle">Food</h1>
            <hr className="sectionline1" />
            {data.filter((data) => data.footer === 'Food').map((item, index) => {
               return (
                  <>
                     <div key={item.id} >
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
            {data.filter((data) => data.content === "Food1").map((item, index) => {
               return (
                  <>
                     <div key={item.id} >
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
               {data.filter((data) => data.content === "FoodTP").map((item, index) => {
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
               <img src="https://i.pinimg.com/236x/6d/24/d5/6d24d502de91885938735b74f48872e6.jpg" />
            </div>
         </section>
      </section>
   );
}

export default Food;

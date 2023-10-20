import { useContext } from "react";
import { store } from "../ArticleCompo/Articles";


function Hollywood() {
   const [data] = useContext(store);
   return (
      <section className="category">
         <section className="part1">
            <h1 className="categoryTitle">Hollywood</h1>
            <hr className="sectionline1" />
            {data.filter((data) => data.footer === 'Hollywood').map((item, index) => {
               return (
                  <>
                     <div key={index} className="box">
                        <img className="articleimage" src={item.url} />
                        <div className="innerbox">
                           <p className="articleTitle">{item.heading.slice(0, 80)}...</p>
                           <p className="content">{item.description.slice(0, 200)}...</p>
                           <p className="author"><span className="authorName">{item.author}</span> / {item.date}</p>
                        </div>
                     </div>
                     <hr className=".articleline" />
                  </>
               );
            })}
         </section>

         <section className="part2">
            <h1 className="categoryTitle">Top Posts</h1>
            <hr className="sectionline1" />
         </section>
      </section>
   );
}

export default Hollywood;

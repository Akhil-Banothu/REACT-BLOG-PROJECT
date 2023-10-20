import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { store } from "./Articles";
import "./DynamicStyle.css";

function DynamicCompo() {
   const id = useParams().id;
   const [contextData] = useContext(store);
   const Navigation = useNavigate();
   return (
      <>
         {contextData.filter((data) => data.id === parseInt(id)).map((item, index) => {
            return (
               <div className="dynamic-component">
                  <h1 className="dynamic-heading">{item.heading}.</h1>
                  <img className="dynamic-author" src={item.authorimage}/>
                  <img className="dynamic-image" src={item.url} />
                  <p className="dynamic-description">{item.description}</p>
                  <p className="dynamic-description">{item.description2}</p>
                  <p className="dynamic-description">{item.description3}</p>
               </div>
            );
         })}
         <button onClick={() => Navigation(-1)} className="dynamic-button">Back</button>
      </>
   );
}

export default DynamicCompo;
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { store } from "./Articles";

function DynamicCompo(){
   const id = useParams().id;
   const [contextData] = useContext(store);
   const Navigation = useNavigate();
   return (
      <>
         {contextData.filter((data) => data.id === parseInt(id)).map((item, index) => {
            return (
               <img src={item.url}/>
            );
         })}
         <button onClick={() => Navigation(-1)}>back</button>
      </>
   );
}

export default DynamicCompo;
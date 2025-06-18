import TravailChoisi from "../components/TravailChoisi";
import Pictures from "../data/travaux.json";
import {useParams} from "react-router-dom";




function TravailDetail () {
  const params = useParams()
    return (
      <main className="Main_LogementDetail">
        {Pictures.map((element) => (
          element.id === params.id && < TravailChoisi imgCarousel={element} key = {element.id}/>
          ))}
        
      </main>
    )
  };
  
  export default TravailDetail;
  
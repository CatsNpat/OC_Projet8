import imgFondSlogan from '../assets/imgHome/pageaccueil.png';
import  TravauxData from '../data/travaux.json';
import '../assets/my-sass.scss';
import Banner from '../components/banner.jsx';
import ListeCards from '../components/listeCards.jsx';



const Home = () => {
    return (
      <>
        <Banner 
          element = {imgFondSlogan} 
          alt ="Image d'une codeuse entourée de chats" 
          title = "Image d'une codeuse entourée de chats"
          h2 = "Développement web" />
        <ListeCards 
          travaux = {TravauxData} />
      </>
    )  
  };
  
  export default Home;
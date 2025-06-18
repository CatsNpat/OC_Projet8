import imgFondSlogan from '../assets/imgHome/bannieredaccueil.png';
import '../assets/my-sass.scss';
import Banner from '../components/banner.jsx';
import Liste from '../components/liste.jsx';

const APropos = () => {
    return (
      <>
      <Banner
      element= {imgFondSlogan}
      alt= "Photo d'une jeune femme codant, entourée de chats."
      title = "Photo d'une jeune femme codant, entourée de chats."
      h2 ="Cats and Coffee" />
      <Liste />
      </>
    )
  };

  export default APropos;
  
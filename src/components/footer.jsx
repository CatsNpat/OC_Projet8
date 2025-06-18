import logo from '../assets/imgHome/logo.png';
import '../assets/my-sass.scss';

function Footer () {

    return (
        <div className='footer'>
          <div>
            <img src = {logo} alt = "Logo de Cats and Coffee"/>
          </div>
          <div className='footer_p'>
            <h3>© 2025 Cats and Coffee. </h3>
            <h3>All rights reserved</h3>
          </div>
        </div>
    )
  }

  const FooterNav = () => {
    return (
      <>
        <Footer />
      </>
    )  
  };
  
  export default FooterNav;
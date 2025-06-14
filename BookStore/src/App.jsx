import React from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import Banner from './components/Banner/Banner.jsx'
import AppStore from './components/AppStore/AppStore.jsx'
import Books from './components/BooksSlider/Books.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Footer from './components/Footer/Footer.jsx';
import OrderPopup from './components/OderPopup/OrderPopup.jsx';

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div>
        <NavBar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Services handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <AppStore/>
        <Books/>
        <Testimonial/>
        <Footer/>
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
    </div>
  )
}

export default App
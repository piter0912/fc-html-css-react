import Navigation from './Navigation';
import Top from './Top';
import About from './About';
import Offer from './Offer';
import Footer from './Footer';
import '../style/actions.css';
import '../style/bottom.css';
import '../style/center.css';
import '../style/responsive.css';
import '../style/top.css';

function App() {
  return (
    <>
      <Navigation />
      <Top />
      <About />
      <Offer />
      <Footer />
    </>
  );
}

export default App;

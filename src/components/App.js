import Navigation from './Navigation';
import TopSection from './TopSection';
import AboutSection from './AboutSection';
import OffersSection from './OffersSection';
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
      <TopSection />
      <AboutSection />
      <OffersSection />
      <Footer />
    </>
  );
}

export default App;

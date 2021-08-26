import './App.css';
import ButtonAppBar from './Components/Header';
import Paragraph from './Components/Paragraph';
import PriceComponent from './Components/PriceComponent';
import Blankenese from './Components/Blankenese';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Paragraph />
      <PriceComponent />
      <Blankenese />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

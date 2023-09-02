import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentArtCraft from "./components/Content/content-art-craft";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentArtCraft/>
      <Footer/>
    </div>
  );
}

export default App;

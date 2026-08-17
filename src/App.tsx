import Hero from './components/Hero';
import BrandWords from './components/BrandWords';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <Hero />
      <BrandWords />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

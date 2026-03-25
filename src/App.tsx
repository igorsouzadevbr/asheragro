import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Differentials from './components/Differentials';
import Products from './components/Products';
import Markets from './components/Markets';
import Certifications from './components/Certifications';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Products />
        <Markets />
        <Certifications />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

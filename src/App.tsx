import Hero from './components/Hero';
import Vision from './components/Vision';
import Platforms from './components/Platforms';
import Workflow from './components/Workflow';
import Features from './components/Features';
import Stats from './components/Stats';
import Screenshots from './components/Screenshots';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light-50 font-cairo">
      <Hero />
      <Vision />
      <Platforms />
      <Workflow />
      <Features />
      <Stats />
      <Screenshots />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Certifications from '../components/portfolio/Certifications';
import Contact from '../components/portfolio/Contact';
import AskAbelAI from '../components/ai-assistant/AskAbelAI';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const handleChatStateChange = (state) => setIsChatOpen(state);

  return (
    <div className="app-container">
      <Navbar onOpenChat={openChat} />
      
      <main>
        <Hero onOpenChat={openChat} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      
      <AskAbelAI 
        forceOpen={isChatOpen} 
        onOpenStateChange={handleChatStateChange} 
      />
    </div>
  );
}

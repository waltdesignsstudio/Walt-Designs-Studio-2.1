import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../pages/Services';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Services />
      </main>
      <Footer />
    </div>
  </StrictMode>,
);

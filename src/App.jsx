import { useEffect, useState } from 'react';
import galleries from './data/galleries.json';
import Gallery from './components/Gallery.jsx';
import HomePage from './components/HomePage.jsx';
import PricingPage from './components/PricingPage.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';

const pageTitles = {
  artistica: 'Artística',
  bodas: 'Bodas y Parejas',
  comuniones: 'Comuniones',
  'eventos-espectaculos': 'Eventos y Espectáculos',
  retrato: 'Retratos',
  'viajes-street': 'Viajes y Street',
};

export default function App({ page }) {
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => document.body.classList.remove('is-preload'), 100);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('content-active', aboutOpen);
    return () => document.body.classList.remove('content-active');
  }, [aboutOpen]);

  const handleAboutClick = (event) => {
    event.preventDefault();
    setAboutOpen((isOpen) => !isOpen);
  };

  let content;
  if (page === 'index') {
    content = <HomePage />;
  } else if (page === 'tarifas') {
    content = <PricingPage />;
  } else if (pageTitles[page] && galleries[page]) {
    content = (
      <Gallery
        items={galleries[page]}
        title={pageTitles[page]}
        showPricingLink={page === 'retrato'}
      />
    );
  } else {
    content = <main className="text-page"><h1>Página no encontrada</h1></main>;
  }

  return (
    <div id="wrapper" onClick={() => aboutOpen && setAboutOpen(false)}>
      <SiteHeader onAboutClick={handleAboutClick} aboutOpen={aboutOpen} />
      {content}
      <SiteFooter isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  );
}

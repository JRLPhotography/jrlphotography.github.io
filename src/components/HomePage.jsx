const categories = [
  { title: 'Retrato', href: 'retrato.html', image: 'https://photogallery.jrl-nas.tech/thumbnails/retratos/Alba_SerLaOtra-1.jpg' },
  { title: 'Viajes y Street', href: 'viajes-street.html', image: 'https://photogallery.jrl-nas.tech/thumbnails/viajes/Amsterdam-2.jpg' },
  { title: 'Eventos y Espectáculos', href: 'eventos-espectaculos.html', image: 'https://photogallery.jrl-nas.tech/thumbnails/eventos/FiestaHalloweenAmorevo2021-1.jpg' },
  { title: 'Artística', href: 'artistica.html', image: 'https://photogallery.jrl-nas.tech/thumbnails/artistica/Granada_EstanqueConventoAlbaicin.jpg' },
];

export default function HomePage() {
  return (
    <main id="main" aria-label="Categorías de fotografía">
      {categories.map((category) => (
        <article className="thumb" key={category.href}>
          <a href={category.href} className="page" aria-label={category.title}>
            <img src={category.image} alt="" />
          </a>
          <h2>{category.title}</h2>
          <p />
        </article>
      ))}
    </main>
  );
}

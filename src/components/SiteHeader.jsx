export default function SiteHeader({ onAboutClick, aboutOpen }) {
  return (
    <header id="header">
      <h1><a href="index.html"><strong>Javier Rodríguez</strong> Fotografía</a></h1>
      <nav aria-label="Navegación principal">
        <ul>
          <li>
            <a
              href="#footer"
              className={`icon solid fa-info-circle${aboutOpen ? ' active' : ''}`}
              onClick={onAboutClick}
            >
              Sobre mí
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

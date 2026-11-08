import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Gallery({ items, title, showPricingLink = false }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add('modal-active');
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index - 1 + items.length) % items.length);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.focus();
    return () => {
      document.body.classList.remove('modal-active');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, items.length]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <h1 className="page-title">{title}</h1>
      <main id="main" aria-label={`Galería: ${title}`}>
        {items.map((item, index) => (
          <article className="thumb" key={`${item.full}-${index}`}>
            <a
              href={item.full}
              className="image"
              style={{ backgroundImage: `url("${item.thumbnail}")` }}
              aria-label={`Ver fotografía ${index + 1}${item.caption ? `: ${item.caption}` : ''}`}
              onClick={(event) => {
                event.preventDefault();
                setActiveIndex(index);
              }}
            />
            <h2>{item.title}</h2>
            <p>{item.caption}</p>
          </article>
        ))}
      </main>
      {showPricingLink && (
        <p className="gallery-cta">
          Si te has quedado con las ganas de tener fotos como estas, ¿a qué estás esperando?<br />
          Consulta mis <a href="tarifas.html">tarifas</a> y contacta conmigo a través del formulario
          que encontrarás en la sección "Sobre mí" o a través de mi Instagram, WhatsApp o correo electrónico
          (también los encontrarás en "Sobre mí").
        </p>
      )}
      {activeItem && createPortal(
        <div className="lightbox" onClick={() => setActiveIndex(null)}>
          <div
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${title}, fotografía ${activeIndex + 1} de ${items.length}`}
            tabIndex="-1"
            ref={dialogRef}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Cerrar">×</button>
            <button
              type="button"
              className="lightbox-previous"
              onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
              aria-label="Fotografía anterior"
            >
              ‹
            </button>
            <figure>
              <img src={activeItem.full} alt={activeItem.caption || activeItem.title || `Fotografía ${activeIndex + 1}`} />
              {(activeItem.title || activeItem.caption) && (
                <figcaption>
                  {activeItem.title && <h2>{activeItem.title}</h2>}
                  {activeItem.caption && <p>{activeItem.caption}</p>}
                </figcaption>
              )}
            </figure>
            <button
              type="button"
              className="lightbox-next"
              onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
              aria-label="Fotografía siguiente"
            >
              ›
            </button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

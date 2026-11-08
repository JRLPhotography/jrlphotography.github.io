export default function PricingPage() {
  return (
    <main className="text-page">
      <h1 className="page-title">Tarifas</h1>
      <h2>Sesiones de retrato</h2>
      <p>(Mira mis fotos <a href="retrato.html">aquí</a>).</p>
      <section className="price-package">
        <h3>Minisesión</h3>
        <p>¡Piérdele el miedo a la cámara!</p>
        <ul>
          <li>Duración aproximada 45 minutos.</li>
          <li>Localización: Alcalá de Henares o Torrejón de Ardoz.</li>
          <li>Te guiaré durante la sesión para que te sientas a gusto.</li>
          <li>Preselección con todas las fotos correctas.</li>
          <li>5 fotos retocadas a fondo.</li>
          <li>Envío de los archivos en alta calidad y sin marca de agua.</li>
          <li>PRECIO <b>70€</b></li>
        </ul>
      </section>
      <section className="price-package">
        <h3>Sesión normal</h3>
        <p>¡Siéntete modelo por una tarde!</p>
        <ul>
          <li>Duración aproximada 60-90 minutos.</li>
          <li>Localización a elegir <a href="#observaciones" className="subtle-link">*</a>.</li>
          <li>Moodboard con ideas de poses.</li>
          <li>Preselección con todas las fotos correctas.</li>
          <li>10 fotos retocadas a fondo.</li>
          <li>Envío de los archivos en máxima calidad y sin marca de agua.</li>
          <li>PRECIO <b>100€</b></li>
        </ul>
      </section>
      <section className="price-package">
        <h3>Sesión premium</h3>
        <p>La experiencia completa</p>
        <ul>
          <li>Duración de 2 horas.</li>
          <li>En estudio.</li>
          <li>Moodboard con ideas de poses y estilo.</li>
          <li>Preselección con todas las fotos correctas.</li>
          <li>10 fotos retocadas a fondo.</li>
          <li>Envío de los archivos en máxima calidad y sin marca de agua.</li>
          <li>PRECIO <b>130€</b></li>
        </ul>
      </section>
      <section className="price-package">
        <h3>Extras</h3>
        <ul><li>Fotos extra retocadas <b>5€/foto</b></li></ul>
      </section>
      <section className="price-note">
        <h2>Otros trabajos</h2>
        <p>Consúltame y te daré un presupuesto de acuerdo con tus necesidades.</p>
      </section>
      <section className="price-note" id="observaciones">
        <h2>A tener en cuenta</h2>
        <p>
          * Si se hace la sesión por el Corredor del Henares o Madrid capital no se cobrará por desplazamiento.
          En caso contrario, el recargo será de 10€ para cualquier otra parte de la Comunidad de Madrid.
        </p>
      </section>
      <section className="price-note">
        <h2>¿Alguna otra cosa?</h2>
        <p>¡Pregúntame! Puedes contactar conmigo en el formulario que encontrarás en la sección “Sobre mí” o en mi Instagram.</p>
      </section>
    </main>
  );
}

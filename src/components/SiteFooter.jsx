export default function SiteFooter({ isOpen, onClose }) {
  return (
    <footer
      id="footer"
      className={`panel${isOpen ? ' active' : ''}`}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="inner split">
        <div>
          <section>
            <h2>Sobre mí</h2>
            <p>
              Desde bien pequeño disfrutaba el tener una cámara entre las manos para poder inmortalizar
              todo aquello que se me pasase por delante. Con el tiempo se ha terminado convirtiendo en mi
              gran pasión, dedicándole todo el tiempo que puedo y siempre tratando de superarme, pero sin
              olvidarme de disfrutar.
            </p>
          </section>
          <section>
            <h2>Sígueme en</h2>
            <ul className="icons">
              <li>
                <a href="https://www.instagram.com/jrlphotos_/" className="icon brands fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
            </ul>
          </section>
          <p className="copyright">
            &copy; JRL 2026. Plantilla: <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </div>
        <div>
          <section>
            <h2>Contacta conmigo</h2>
            <p>Correo electrónico: <b>jrlphoto16@gmail.com</b><br />Teléfono: <b>+34 684 70 28 20</b></p>
            <form method="post" action="https://formspree.io/f/xdkjrgoj">
              <div className="fields">
                <div className="field half">
                  <input type="text" name="name" id="name" placeholder="Nombre" required />
                </div>
                <div className="field half">
                  <input type="email" name="email" id="email" placeholder="Correo electrónico" required />
                </div>
                <div className="field">
                  <textarea name="message" id="message" rows="4" placeholder="Mensaje" required />
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Enviar" className="primary" /></li>
                <li><input type="reset" value="Borrar" /></li>
              </ul>
            </form>
          </section>
        </div>
      </div>
      <button type="button" className="closer" aria-label="Cerrar sobre mí y contacto" onClick={onClose} />
    </footer>
  );
}

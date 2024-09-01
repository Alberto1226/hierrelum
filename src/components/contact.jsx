import React from "react";

export const Contact = (props) => {
  const whatsappUrl = "https://wa.me/7721633114";

  return (
    <div>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.2033536119498!2d-98.99860380000001!3d20.250399400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d17107f6519f07%3A0x66c37df5ffb52e74!2sHIERROLUM%20Vidrio%20y%20Aluminio!5e0!3m2!1ses!2smx!4v1725155656152!5m2!1ses!2smx"
          width={"100%"}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Contacto</h2>
                <p>
                  Si tienes alguna pregunta o necesitas asistencia, no dudes en
                  contactarnos a través de WhatsApp o consulta nuestros datos de
                  contacto a continuación.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Direcció
                  </span>
                  Av. Reforma S/N, La 27, 42650 San Antonio Zaragoza, Hgo.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Teléfono
                  </span>{" "}
                  7721633114
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <a
                  href={whatsappUrl}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <i className="fa fa-whatsapp"></i> Contáctanos por WhatsApp
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Hierrolum. Diseño por AAM
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

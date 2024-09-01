import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>
            Explore nuestra galería de proyectos destacando el trabajo de
            Hierrolum en el área de vidrio y acero inoxidable. Aquí podrá ver
            algunos de nuestros proyectos más representativos, que incluyen
            barandales de acero inoxidable, canceles de baño con vidrio
            templado, puertas de vidrio curvado y mucho más. Cada proyecto
            muestra la calidad y precisión que ofrecemos en nuestros servicios.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

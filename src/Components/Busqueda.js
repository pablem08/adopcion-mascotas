import React, { useState } from "react";
import button from "../Img/Botón - Volver - Desactivado.png";
import button2 from "../Img/Botón - Volver - Activo.png";
import Bebota from "../Img/Bebota.jpeg";
import Mesti from "../Img/Mesti.jpeg";
import Togui from "../Img/Togui.jpg";
import HijoBebota from "../Img/HijoBebota.png";
import Otro from "../Img/Otro.jpeg";

export default function Busqueda() {
  const [hovered, setHovered] = useState(false);

  return (
    <body className="body">
      {/* MAIN */}
      <main className="main">
        {/* HERO */}
        <section id="hero">
          <div className="hero-conteiner"></div>
          <div className="hero-info">
            <a href="*">
              <img
                src={hovered ? button2 : button}
                alt="button"
                className="button-volver"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              />
            </a>
            <h2>BUSQUEDA DE MASCOTAS</h2>
            <h3 className="titulo-h3">
              Si querés adoptar una mascota, contactá a su dueño actual
            </h3>
            <input
              className="search-mascota"
              type="search"
              placeholder="🔎 Ingrese criterio de busqueda"
            ></input>
          </div>
        </section>

        {/* CARDS */}
        <section id="cards">
          <div class="cards-conteiner">
            <div class="card-1">
              <a href="*">
                <img src={Bebota} alt="Totacio" />
                <h3>Totacio</h3>
              </a>
            </div>
            <div class="card-2">
              <a href="*">
                <img src={Mesti} alt="Totino" />
                <h3>Totino</h3>
              </a>
            </div>
            <div class="card-3">
              <a href="*">
                <img src={Togui} alt="Toluca" />
                <h3>Toluca</h3>
              </a>
            </div>
            <div class="card-4">
              <a href="*">
                <img src={HijoBebota} alt="Topson" />
                <h3>Topson</h3>
              </a>
            </div>
            <div class="card-5">
              <a href="*">
                <img src={Otro} alt="Toranzo" />
                <h3>Toranzo</h3>
              </a>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

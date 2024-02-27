import botonAgregar from "../Img/Agregar_Mascota.png";
import botonBuscar from "../Img/Buscar_Mascota.png";

export default function Home(props) {
  const { agregarMascota, accionAgregar } = props;
  return (
    <>
      <div className="home">
        <div className="container-home">
          <div className="button-agregar">
            <img
              src={botonAgregar}
              alt="Imagen agregar mascotas"
              // onClick={agregarMascota}
            />
          </div>
          <div className="button-buscar">
            <img src={botonBuscar} alt="Imagen buscar mascotas" />
          </div>
        </div>
      </div>
    </>
  );
}

import icono from "../Img/buscar.png";

export default function Busqueda() {
  return (
    <body className="body">
      <main className="main">
        <h2 className="titulo-main">BUSQUEDA DE MASCOTAS</h2>
        <h3>Si querés adoptar una mascota, contactá a su dueño actual</h3>
        <img src={icono} alt="icono" className="icono-lupa" />
        <input
          className="search-mascota"
          type="search"
          placeholder="Ingrese criterio de busqueda"
        ></input>
      </main>
    </body>
  );
}

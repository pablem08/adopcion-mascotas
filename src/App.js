import { Fragment, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AgregarMacotas from "./Components/AgregarMacotas";

function App() {
  const [agregarMascota, setAgregarMascota] = useState(false);

  const accionAgregar = () => {
    setAgregarMascota(!AgregarMacotas);
  };

  return (
    <Fragment>
      <Navbar />
      <Home agregarMascota={agregarMascota} accionAgregar={accionAgregar} />
      <AgregarMacotas />
    </Fragment>
  );
}

export default App;

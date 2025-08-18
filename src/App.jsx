import Bienvenidos from "./components/Bienvenidos";
import TeoriaComponente from "./components/TeoriaComponente";

function App() {
  //Aqui agrego la logica de un componente
  const modulo = 2;
  return(
    //Aqui puedo agregar mas logica
    <main className="container my-5">
<h1>Hola Mundo</h1>
<Bienvenidos/>
<TeoriaComponente comision='Web 13' modulo={modulo}/>

  </main>
  );

}

export default App

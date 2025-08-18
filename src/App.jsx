import Bienvenidos from "./components/Bienvenidos";
import TeoriaComponente from "./components/TeoriaComponente";

function App() {
  //Aqui agrego la logica de un componente
  return(
    //Aqui puedo agregar mas logica
    <main className="container my-5">
<h1>Hola Mundo</h1>
<Bienvenidos/>
<TeoriaComponente/>

  </main>
  );

}

export default App

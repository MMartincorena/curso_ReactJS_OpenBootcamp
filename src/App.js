import logo from "./logo.svg";
import "./App.css";
/*  import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF'; 
import TaskListComponent from './components/container/task_list'; 
import ContactComponent from "./components/pure/forms/ContactComponent"; 
import ComponenteB from "./components/pure/forms/ComponenteB";
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'*/
import Ejemplo4 from './hooks/Ejemplo4';
import Clock from './components/pure/clock'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*   Componente propio Greeting.jsx 
        <Greeting name={"Martín"}></Greeting>
        Componente de ejemplo funcional 
        <Greetingf name="Martín"></Greetingf> 
        Componente de Listado de Tareas  
        <TaskListComponent></TaskListComponent>
        <ContactComponent
          name="Martin"
          lastName="Martin2"
          email="martin@gmail.com"
          isConnected={true}
        />
        <ComponenteB
          name="Martin"
          lastName="Martin2"
          email="martin@gmail.com"
          isConnected={true}
            <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Martín"> */}
        {/* Todo loq ue hay aquí, es tratado como props.children */}
        {/* <h3>
          Contenido del props.children
        </h3>
      </Ejemplo4> */}

        <Clock />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
/*  import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF'; 
import TaskListComponent from './components/container/task_list'; */
import ContactComponent from './components/pure/forms/ContactComponent';

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
        <TaskListComponent></TaskListComponent>*/}
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;

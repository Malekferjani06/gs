import './App.css';
import AddTask from './Components/AddTask';
import Edit from './Components/Edit';
import ListTasks from './Components/ListTasks';
import Task from './Components/Task';

function App() {
  return (
    <div className="App">
     <h1> TO DO LIST  </h1>
     <AddTask/>
     <Edit/>
     <ListTasks/>
     <Task/>
    </div>
  );
}

export default App;

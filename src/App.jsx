
import './App.css';
//COMPONENTS
import Logo from './components/Logo';
// import Task from './components/Task';
import Footer from './components/Footer';
import TaskForm from './components/Form';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="task-list-main">
        <h1>My Tasks</h1>
        {/* <Task text= "example task"/> */}
        <TaskForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;

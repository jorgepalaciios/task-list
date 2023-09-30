
import './App.css'
//COMPONENTS
import Logo from './components/Logo'
import Footer from './components/Footer'
import TasksList from './components/TasksList'

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="task-list-main">
        <h1>My Tasks</h1>
        {/* <Task text= "example task"/> */}
        <TasksList />
      </div>
      <Footer />
    </div>
  );
}

export default App;

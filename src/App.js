import './App.css';
import FirstTask from './first_task/FirstTask'
import info_obj from './first_task/info_obj';

function App() {
  return (
    <div className="App">
      <FirstTask data={info_obj}/>
    </div>
  );
}

export default App;

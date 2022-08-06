import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Clock from './clock';
import './App.css';


function App() {

  const handle = useFullScreenHandle();

  return (
    
  <div className="App">
    <div className="clock">
      <button className=" d-none d-sm-block" onClick={handle.enter}>
      Full Screen MODE
      </button>

      <FullScreen handle={handle}>
      <div className="clock">
      <Clock />
      </div>
      </FullScreen>
  </div>
  </div>
  );
}

export default App;

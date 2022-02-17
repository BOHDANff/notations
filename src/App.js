import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Edit from "./components/Edit";

function App() {
  return (
      <div className="App">
          <div className="main">
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/edit/:id" element={<Edit/>}/>
              </Routes>
          </div>
      </div>
  );
}

export default App;

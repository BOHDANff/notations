import './App.css';
import Count from "./components/Count";
import { Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/edit" element={<Edit/>} />
        </Routes>
    </div>
  );
}

export default App;

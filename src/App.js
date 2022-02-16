import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {minus, plus} from "./store/reducers/TestReducer";

function App() {
    const {count} = useSelector(state => state.test)
    const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(plus(1))}>Plus</button>
      <button onClick={() => dispatch(minus(1))}>Minus</button>
    </div>
  );
}

export default App;

import "./App.css";
import UseReducerExp1 from "./components/useReducer/UseReducerExp1";
import UseReducerToDo from "./components/useReducer/UseReducerToDo";
import UseRef from "./components/useRef/UseRef";
import UseRefExp2 from "./components/useRef/UseRefExp2";
import TimerCounter from "./Projects/TimerCounter";

function App() {
  return (
    <div className="App">
      {/*  <UseRef /> */}
      <TimerCounter />
    </div>
  );
}

export default App;

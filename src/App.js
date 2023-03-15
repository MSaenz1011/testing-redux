import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { INCREMENT, DECREMENT, MULTIPLIER, DIVIDER } from "./store";

function App() {
  return (
    <div className="App">
      <Counter />
      <Button typeAction={INCREMENT}>INCREMENT</Button>
      <Button typeAction={DECREMENT}>DECREMENT</Button>
      <Button typeAction={MULTIPLIER}>MULTIPLIER</Button>
      <Button typeAction={DIVIDER}>DIVIDER</Button>
    </div>
  );
}

export default App;

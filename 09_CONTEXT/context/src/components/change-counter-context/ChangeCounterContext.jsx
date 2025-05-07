import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext"; 

const ChangeCounterContext = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add </button>
    </div>
  );
};

export default ChangeCounterContext;

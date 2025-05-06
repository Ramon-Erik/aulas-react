import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      Home
      <p>value: {counter}</p>
    </div>
  );
};

export default Home;

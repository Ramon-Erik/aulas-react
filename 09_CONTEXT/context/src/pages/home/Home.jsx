import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import ChangeCounterContext from "../../components/change-counter-context/ChangeCounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      Home
      <p>value: {counter}</p>
      <ChangeCounterContext />
    </div>
  );
};

export default Home;

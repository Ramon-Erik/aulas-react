import { useCounterContext } from "../../hook/useCounterContext";
import ChangeCounterContext  from "../../components/change-counter-context/ChangeCounterContext";

const About = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <p>About</p>
      <p>count {counter}</p>
      <ChangeCounterContext />
    </div>
  );
};

export default About;

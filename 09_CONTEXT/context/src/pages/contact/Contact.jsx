import { useTitleColorContext } from "../../hook/useTitleColorContext";

const Contact = () => {
  const { color, dispatch } = useTitleColorContext();
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  return (
    <>
      <h2 style={{ color }}>Contact</h2>
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
      </div>
    </>
  );
};

export default Contact;

import "./EndScreen.css";

const EndScreen = ({ retrytGame, score }) => {
  return (
    <div className="End">
      <h1>Secret word</h1>
      <h2>Você perdeu!</h2>
      <p>Sua pontuação final: <span>{score}</span></p>
      <button type="button" onClick={retrytGame}>Jogar de novo</button>
    </div>
  );
};

export default EndScreen;

import "./StartScreen.css";
import "./GameScreen.css";
import { useState, useRef } from "react";

const PlayGame = ({
  endGame,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  verifyLetter
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica da palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index} className="blankSquare">
              {letter}
            </span>
          ) : (
            <span key={index} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar a letra da palavra</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            ref={letterInputRef}
            value={letter}
            autoComplete="off"
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default PlayGame;

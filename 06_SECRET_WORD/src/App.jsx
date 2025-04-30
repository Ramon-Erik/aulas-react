import { useState, useCallback, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";
import { wordsList } from "./data/words";
import "./App.css";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const guessesNumber = 3;
  const initialScore = 0;
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState("");
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesNumber);
  const [score, setScore] = useState(initialScore);

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === stages[1].name
    ) {
      setScore((prev) => (prev += 100));
      startGame();
      console.log("oi");
    }
    // console.log('gl ul', guessedLetters.length === uniqueLetters.length)
    // console.log('gl ul', guessedLetters.length === uniqueLetters.length)
  }, [guessedLetters]);

  const verifyLetter = (letter) => {
    const nomalizedLetter = letter.toLowerCase();
    if (
      guessedLetters.includes(nomalizedLetter) ||
      wrongLetters.includes(nomalizedLetter)
    ) {
      return;
    }
    if (letters.includes(nomalizedLetter)) {
      setGuessedLetters((prev) => [...prev, nomalizedLetter]);
    } else {
      setWrongLetters((prev) => [...prev, nomalizedLetter]);
      setGuesses((prev) => prev - 1);
    }
  };

  const pickWordandCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(words).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    console.log(category, word);
    return [category, word];
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();

    const [tip, word] = pickWordandCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(tip);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
    setGuessedLetters("");
  }, [pickWordandCategory]);

  const endGame = () => {
    setGameStage(stages[2].name);
  };
  const retrytGame = () => {
    setScore(0);
    setGuesses(guessesNumber);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          endGame={endGame}
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && (
        <EndScreen retrytGame={retrytGame} score={score} />
      )}
    </div>
  );
}

export default App;

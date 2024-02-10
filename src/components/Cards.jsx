/** @format */
import { useState, useEffect } from "react";
import coverPicture from "../assets/CoverPicture.png";
import RickAndMortyTitle from "../assets/RickandMortyTitle.png";
import useSound from "use-sound";
import cardFlipSound from "../assets/cardFlip.wav";
import LoseDialog from "./LoseDialog";
import WinDialog from "./WinDialog";

function GetCards({ difficulty }) {
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(score);
  const [clickedCharacterArray, setClickedCharacterArray] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const [open, setOpen] = useState(false);
  const [win, setWin] = useState(false);

  const [play] = useSound(cardFlipSound, { volume: 0.2 });

  useEffect(() => {
    fetchCharacters();
  }, [difficulty]); /* call only on mount and when button pressed */

  useEffect(() => {
    play();
  }, [isRotated]);

  useEffect(() => {
    checkForWin();
    checkHighestScore();
  }, [clickedCharacterArray]);

  const generateRandomNumbers = (count) => {
    const randomNumbers = Array.from({ length: count }, (_, index) => index + 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

    return randomNumbers;
  };

  const fetchCharacters = () => {
    let numberOfCharacters;
    if (difficulty === "easy") {
      numberOfCharacters = 3;
    } else if (difficulty === "medium") {
      numberOfCharacters = 6;
    } else if (difficulty === "hard") {
      numberOfCharacters = 8;
    } else if (difficulty === "stupid") {
      numberOfCharacters = 100;
    }
    const randomNumbers = generateRandomNumbers(numberOfCharacters);
    const urls = randomNumbers.map(
      (number) => `https://rickandmortyapi.com/api/character/${number}`
    );

    Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    )
      .then((characters) => {
        setCharacters(characters);
      })
      .catch((error) => console.error("error fetching characters", error));
  };

  const handleButtonClick = (clickedCharacter) => {
    setIsRotated(true);
    setTimeout(() => {
      setIsRotated(false);
    }, 1200);
    setTimeout(() => {
      if (clickedCharacterArray.includes(clickedCharacter)) {
        setIsRotated(true);
        setOpen(true); /* Open loss dialog which will trigger loss */
      } else {
        setClickedCharacterArray([...clickedCharacterArray, clickedCharacter]);
        setScore((prevScore) => prevScore + 1);
        checkHighestScore();
        checkForWin();
      }
      fetchCharacters();
    }, 1200);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setIsRotated(false);
    setScore(0);
    setWin(false);
    setClickedCharacterArray([]);
  };

  const checkHighestScore = () => {
    if (score != 0 && score > highestScore) {
      setHighestScore((prevScore) => prevScore + 1);
    }
  };

  const checkForWin = () => {
    if (score !== 0 && score == characters.length) {
      setWin(true);
    }
  };

  return (
    <div className="gameContainer">
      <div className="pageHeader">
        <div className="titleContainer">
          <img className="titleImage" src={RickAndMortyTitle}></img>
          <h2 className="titleHeader">Memory Card Game</h2>
        </div>
        <div className="scoreContainer">
          <p className="scoreHeader">
            Current Score: {score} / {characters.length}
          </p>
          <p className="scoreHeader">Highest Score: {highestScore}</p>
        </div>
      </div>

      <div>
        <div className="cardsContainer">
          {characters.map((character, index) => (
            <>
              <div
                className="card"
                key={index}
                style={{
                  transform: isRotated ? "rotateY(-180deg)" : "rotateY(0deg)",
                }}
              >
                <div className="cardFront">
                  <button
                    className="cardButton"
                    onClick={() => handleButtonClick(character.name)}
                    key={index}
                    value={character.name}
                  >
                    <img
                      src={character.image}
                      value={character.name}
                      alt={character.name}
                      className="cardImage"
                    />
                    {character.name}
                  </button>
                </div>
                <div
                  className="cardBack"
                  style={{ backgroundImage: `url(${coverPicture})` }}
                ></div>
              </div>
            </>
          ))}
        </div>
      </div>

      {<LoseDialog open={open} handleCloseDialog={handleCloseDialog} />}
      {<WinDialog open={win} handleCloseDialog={handleCloseDialog} />}
    </div>
  );
}

export default GetCards;

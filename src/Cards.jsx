/** @format */
import { useState, useEffect } from "react";
import cardBack from "./assets/cardBack.png";

/* Iclude difficulty options

Easy: 10 cards
Medium: 20 cards
Hard: 30 cards

Use the variable to adjust number of cards in array to choose from

*/

function GetCards() {
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(score);
  const [clickedCharacterArray, setClickedCharacterArray] = useState("");
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, [clickedCharacterArray]); /* call only on mount and when button pressed */

  useEffect(() => {
    console.log(clickedCharacterArray);
  }, [clickedCharacterArray]); /* Updated when array changes */

  const generateRandomNumbers = (count) => {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      /* I need to change to ensure these are unique */
      randomNumbers.push(Math.floor(Math.random() * 20) + 1); // Generate random numbers from 1 to 861 & push count of those into the random array
    }
    return randomNumbers;
  };

  const fetchCharacters = () => {
    const randomNumbers = generateRandomNumbers(6);
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
        setClickedCharacterArray([]);
        setScore(0);
        alert(
          "Aww Jeez Rick, we've really screwed up!"
        ); /* Replace alert with a popup */
      } else {
        setClickedCharacterArray([...clickedCharacterArray, clickedCharacter]);
        setScore((prevScore) => prevScore + 1);
        checkHighestScore();
        console.log(clickedCharacterArray);
        console.log("logging", clickedCharacter);
      }
      fetchCharacters();
    }, 1200);
  };

  const checkHighestScore = () => {
    if (score === highestScore) {
      setHighestScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      <h1>Rick and Morty Memory Game</h1>
      <div>
        <p className="scoreHeader">Current Score: {score}</p>
        <p className="scoreHeader">Highest Score: {highestScore}</p>

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
                  style={{ backgroundImage: `url(${cardBack})` }}
                ></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetCards;

/** @format */
import { useState, useEffect } from "react";

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

  useEffect(() => {
    fetchCharacters();
  }, []); /* No dependency, call only on mount and when button pressed */

  useEffect(() => {
    console.log(clickedCharacterArray);
  }, [clickedCharacterArray]);

  const generateRandomNumbers = (count) => {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      randomNumbers.push(Math.floor(Math.random() * 10) + 1); // Generate random numbers from 1 to 861 & push count of those into the random array
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
    if (clickedCharacterArray.includes(clickedCharacter)) {
      setClickedCharacterArray([]);
      setScore(0);
      alert("You suck");
    } else {
      setClickedCharacterArray([...clickedCharacterArray, clickedCharacter]);
      setScore((prevScore) => prevScore + 1);
      checkHighestScore();
      console.log(clickedCharacterArray);
      console.log("logging", clickedCharacter);
    }

    fetchCharacters();
  };

  const checkHighestScore = () => {
    if (score === highestScore) {
      setHighestScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      <p>Current Score{score}</p>
      <p>Highest Score{highestScore}</p>
      <div className="cardsContainer">
        {characters.map((character, index) => (
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
        ))}
      </div>
    </>
  );
}

export default GetCards;

import { useState } from "react"
import "./index.css";
import { languages } from "./languages"
import clsx from "clsx"
import { getFarewellText, getRandomWord } from "./utils"
import Confetti from "react-confetti"


export default function Assembly_Endgame() {
    const [currentWord, setCurrentWord] = useState(getRandomWord())

    const [guessedLetters, setGuessedLetters] = useState([])
    //console.log(guessedLetters)

    const wrongGuessArray = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const wrongGuessCount = wrongGuessArray

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    //console.log(isGameWon)
    const GuessLeft = languages.length-1
    const isGameLost = wrongGuessCount >= (languages.length - 1)
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length-1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
   
    function addGuessedLetters(letter){
        setGuessedLetters(prevLetters => 
           prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
            //const letterSet = new Set(prevLetter)
            //letterSet.add(letter)
            //return Array.from(lettersSet)
        )
    }

    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
    }
    const className = clsx("chip", isLanguageLost && "lost")
        return(
            <span  className={className}
                style={styles}
                key={lang.name}> {lang.name} </span>
        )
    })
    
    const letterElements = currentWord.split("").map((letter, index) => {
        const revealLetter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return(
            <span key={index} className={letterClassName}>
                {revealLetter ? letter.toUpperCase() : ""}</span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const classname = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        return(
            <button className={classname} 
                key={letter} 
                disabled = {isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                onClick={() => addGuessedLetters(letter)}
                
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("game-status",{
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return <p className="farewell-msg"> 
            {getFarewellText(languages[wrongGuessCount-1].name)} </p>}
        
        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>)
        } else{
            return null
        }       }

    function startNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    return ( 
        <main>
            <header>
                <h1>Assembly Endgame</h1>
                <p> Guess the word within 8 attempts to keep the programming world safe from Assembly! </p>
            </header>


            <section className={gameStatusClass}>
                {renderGameStatus()}
            </section>

            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>

            <section 
                className="sr-only" 
                aria-live="polite" 
                role="status"
            >
                <p>
                    {currentWord.includes(lastGuessedLetter) ? 
                        `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {GuessLeft} guesses Left before game is over.
                </p>
            </section>
             <section className="keyboard">
                {keyboardElements}
            </section>      
           
           
            {isGameOver && <button className="new-game"
                onClick={startNewGame}>New Game</button>}      

               {isGameWon && <Confetti 
                    recycle = {false}
                    number of Pieces = {100000} />} 
        </main>
    )
}
import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import './GameOver.css'
import WellDone from '../img/welldone.svg'
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
        <h2>Fim De jogo</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Voce acertou {quizState.score}de  {quizState.questions.lenght} {" "}perguntas </p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button onClick={()=> dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        
    </div>
  )
}

export default GameOver
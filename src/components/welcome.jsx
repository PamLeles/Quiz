import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./welcome.css";

const welcome = () => {
  //dispatch altera os valores
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id="welcome">
      <h2> Seja Bem-vindo</h2>
      <p> Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default welcome;

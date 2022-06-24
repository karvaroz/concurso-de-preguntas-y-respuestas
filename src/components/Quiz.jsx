import React, { useEffect, useState } from "react";
import { Questions } from "../data/Questions";

const Quiz = () => {
  const [questions, setQuestions] = useState(Questions);
  const [showResults, setShowResults] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const name = localStorage.getItem("name");
  console.log(name);

  useEffect(() => {
    setQuestions(Questions);
  }, []);

  console.log(questions);

  const handleOptClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
        setShowResults(true)
    }
  };

  return (
    <>
      {showResults ? (
        <div className="flex h-screen flex-col items-center justify-center space-y-6 bg-gray-200 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mt-8 h-16 w-16 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
              Puntaje
            </h1>
            <p className="my-4 text-center text-sm text-gray-500">
              {score} de {questions.length} correctas
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="container">
            <div className="text-center mt-2">
              <h1 className="text-2xl text-slate-700 font-bold leading-normal mb-1 uppercase">
                Hola, {name ? name : "Amig@"}
              </h1>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {questionNumber + 1} - {questions?.length}
                  </span>
                  <span className="text-sm text-slate-400">Pregunta N°</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {score}
                  </span>
                  <span className="text-sm text-slate-400">Puntaje</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block tracking-wide text-slate-700">
                    {questions[questionNumber]?.difficulty}
                  </span>
                  <span className="text-sm text-slate-400">Dificultad</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block tracking-wide text-slate-700">
                    {questions[questionNumber]?.category}
                  </span>
                  <span className="text-sm text-slate-400">Categoria</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-4 mb-10">
              <h1 className="text-xl text-dark-500">
                {questions[questionNumber]?.question}
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="bg-white shadow-xl rounded-lg w-1/2">
                <ul className="divide-y divide-gray-300">
                  {questions[questionNumber].options?.map((opt) => {
                    return (
                      <li
                        key={opt.id}
                        className="p-4 hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleOptClicked(opt.isCorrect)}
                      >
                        {opt.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button className="flex px-3 py-2 bg-red-500 mr-1 text-white font-semibold rounded">
                <span className="ml-1">Finalizar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;

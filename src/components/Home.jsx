import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("name", name);
    navigate("/quiz");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-8 sm:p-12">
      <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14">
        <div className="flex flex-col items-center">
          <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
            Concurso de Preguntas y Respuestas
          </h3>
          <form
            action=""
            className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <input
              type="text"
              name="text"
              id="text"
              className="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
              placeholder="¿Cuál es tu nombre?"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
              onClick={handleSubmit}
            >
              Ir al Quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

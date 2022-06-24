import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../components/Home'
import Quiz from '../components/Quiz';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
import React, { createContext, useState } from "react";

export const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (word) => {
    setWords((prevWords) => [...prevWords, word]);
  };

  const updateWord = (id, updatedWord) => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === id ? { ...word, ...updatedWord } : word
      )
    );
  };

  const deleteWord = (id) => {
    setWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  return (
    <WordsContext.Provider value={{ words, addWord, updateWord, deleteWord }}>
      {children}
    </WordsContext.Provider>
  );
};

// Table.jsx
import React, { useState } from "react";
import TableRow from "../TableRow/TableRow";
import { data as wordsArray } from "../../data/data";
import styles from "../Table/Table.module.css";

const Table = () => {
  const [stWord, stateStWord] = useState(wordsArray);
  function updateWords(id, word) {
    const copyStWord = [...stWord];
    const resultArray = copyStWord.map((item) => {
      if (item.id === id) {
        return word;
      }
      return item;
    });
    stateStWord(resultArray);
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {stWord.map((word) => (
          <TableRow key={word.id} word={word} updateWords={updateWords} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

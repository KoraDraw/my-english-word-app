import React from "react";
import TableRow from "../TableRow/TableRow";
import styles from "./Table.module.css";

const Table = ({ words, updateWords }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(words)
          ? words.map((word) => (
              <TableRow key={word.id} word={word} updateWords={updateWords} />
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Table;

import React from "react";
import TableRow from "../components/TableRow";
import { wordsArray } from "./data";
import styles from "../Table.module.css";

const Table = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Картинка</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {wordsArray.map((word) => (
          <TableRow key={word.id} word={word} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

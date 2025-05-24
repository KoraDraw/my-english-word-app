// Table.jsx
import React from "react";
import TableRow from "../TableRow/TableRow";
import { data as wordsArray } from "../../data/data";
import styles from "../Table/Table.module.css";

const Table = () => {
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
        {wordsArray.map((word) => (
          <TableRow key={word.id} word={word} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

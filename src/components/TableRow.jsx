import Button from "./Button";
import styles from "./Table.module.css";
const TableRow = ({ word }) => {
  return (
    <tr>
      <td>{word.word}</td>
      <td>{word.transcription}</td>
      <td>{word.translation}</td>
      <td>{word.imageUrl}</td>
      <td classNames={styles.actionButton}>
        <Button text="Редактировать" />
        <Button text="Удалить" />
        <Button text="Сохранить" />
      </td>
    </tr>
  );
};
export default TableRow;

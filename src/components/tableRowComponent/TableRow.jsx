import React, { useState } from "react";
import Button from "../buttonComponent/Button";
import styles from "../tableComponent/Table.module.css";

const TableRow = ({ word }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedWord, setEditedWord] = useState(word.word);
  const [editedTranscription, setEditedTranscription] = useState(
    word.transcription
  );
  const [editedTranslation, setEditedTranslation] = useState(word.translation);

  const initialValues = {
    word: word.word,
    transcription: word.transcription,
    translation: word.translation,
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setEditedWord(initialValues.word);
    setEditedTranscription(initialValues.transcription);
    setEditedTranslation(initialValues.translation);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            value={editedWord}
            onChange={(e) => setEditedWord(e.target.value)}
          />
        ) : (
          word.word
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={editedTranscription}
            onChange={(e) => setEditedTranscription(e.target.value)}
          />
        ) : (
          word.transcription
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={editedTranslation}
            onChange={(e) => setEditedTranslation(e.target.value)}
          />
        ) : (
          word.translation
        )}
      </td>
      <td className={styles.actionButton}>
        {isEditing ? (
          <>
            <Button text="Сохранить" onClick={handleSaveClick} />
            <Button text="Отмена" onClick={handleCancelClick} />
          </>
        ) : (
          <>
            <Button text="Редактировать" onClick={handleEditClick} />
            <Button text="Удалить" />
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;

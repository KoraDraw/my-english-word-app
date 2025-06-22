import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "../Table/Table.module.css";

const TableRow = ({ word, updateWords }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...word });
  const [hasEmptyFields, setHasEmptyFields] = useState(false);
  const initialValues = { ...word };
  useEffect(() => {
    const emptyFieldsExist = ["word", "transcription", "translation"].some(
      (key) => formData[key].trim() === ""
    );
    setHasEmptyFields(emptyFieldsExist);
  }, [formData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setFormData(initialValues);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    if (
      ["word", "transcription", "translation"].some(
        (key) => formData[key].trim() === ""
      )
    ) {
      alert("Ошибка: Пожалуйста, заполните все поля перед сохранением.");
      return;
    }
    console.log("Сохранённые параметры:", {
      id: word.id,
      word: formData.word,
      transcription: formData.transcription,
      translation: formData.translation,
      tags: word.tags,
      tags_json: word.tags_json,
    });
    updateWords(word.id, {
      id: word.id,
      word: formData.word,
      transcription: formData.transcription,
      translation: formData.translation,
      tags: word.tags,
      tags_json: word.tags_json,
    });

    setIsEditing(false);
  };

  return (
    <tr>
      {["word", "transcription", "translation"].map((key) => (
        <td key={key}>
          {isEditing ? (
            <input
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
              style={{
                borderColor: formData[key].trim() === "" ? "red" : undefined,
              }}
            />
          ) : (
            word[key]
          )}
        </td>
      ))}

      <td className={styles.actionButton}>
        {isEditing ? (
          <>
            <Button
              text="Сохранить"
              onClick={handleSaveClick}
              type="save"
              disabled={hasEmptyFields}
            />
            <Button text="Отмена" onClick={handleCancelClick} type="cancel" />
          </>
        ) : (
          <>
            <Button
              text="Редактировать"
              onClick={handleEditClick}
              type="edit"
            />
            <Button
              text="Удалить"
              onClick={() => console.log("Удалить")}
              type="delete"
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;

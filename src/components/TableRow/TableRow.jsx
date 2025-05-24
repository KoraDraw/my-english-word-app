import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "../Table/Table.module.css";

const TableRow = ({ word }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...word });

  const initialValues = { ...word };

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
            />
          ) : (
            word[key]
          )}
        </td>
      ))}

      <td className={styles.actionButton}>
        {isEditing ? (
          <>
            <Button text="Сохранить" onClick={handleSaveClick} type="save" />
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

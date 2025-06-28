export const validateWord = (word) => {
  const errors = [];

  if (!word.word || word.word.trim() === "") {
    errors.push("Слово обязательно для заполнения");
  }

  if (!word.transcription || word.transcription.trim() === "") {
    errors.push("Транскрипция обязательна для заполнения");
  }

  if (!word.translation || word.translation.trim() === "") {
    errors.push("Перевод обязателен для заполнения");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateTranscription = (transcription) => {
  const hasBrackets =
    transcription.includes("[") || transcription.includes("/");
  return hasBrackets || transcription.length > 0;
};

export const sanitizeWord = (word) => {
  return {
    word: word.word.trim(),
    transcription: word.transcription.trim(),
    translation: word.translation.trim(),
    tags: word.tags.filter((tag) => tag.trim() !== ""),
  };
};

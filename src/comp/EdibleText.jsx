import React, { useState, useEffect } from 'react';

const EditableText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Save the changes or perform any required actions here
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default EditableText;

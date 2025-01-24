import  { useState } from 'react';

const TextEditor = () => {
  const [text, setText] = useState('');

  // Apply bold formatting in textarea content
  const handleBold = () => {
    setText((prevText) => {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        const boldText = `**${selectedText}**`; // Wrap with markdown-style bold syntax
        return prevText.replace(selectedText, boldText);
      }
      return prevText;
    });
  };

  // Apply underline formatting in textarea content
  const handleUnderline = () => {
    setText((prevText) => {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        const underlinedText = `__${selectedText}__`; // Use markdown-style underline
        return prevText.replace(selectedText, underlinedText);
      }
      return prevText;
    });
  };

  // Format text as ordered list (simply adds list markers in textarea)
  const handleOrderedList = () => {
    setText((prevText) => {
      const listItems = prevText
        .split('\n')
        .map((item, index) => `${index + 1}. ${item}`)
        .join('\n');
      return listItems;
    });
  };

  // Format text as unordered list
  const handleUnorderedList = () => {
    setText((prevText) => {
      const listItems = prevText
        .split('\n')
        .map((item) => `▪️ ${item}`)
        .join('\n');
      return listItems;
    });
  };

  // Handle changes in the textarea
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleUnderline}>Underline</button>
        <button onClick={handleOrderedList}>Ordered List</button>
        <button onClick={handleUnorderedList}>Unordered List</button>
      </div>
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Write here..."
      />
    </div>
  );
};

export default TextEditor;

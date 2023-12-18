import React, { useState } from "react";

const FileReadWriteComponent = () => {
  const [fileContent, setFileContent] = useState("");

  const saveFile = () => {
    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt"; // Set the filename here
    document.body.appendChild(element);
    element.click();
  };

  const readFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <h3>File Read/Write Component</h3>

      <textarea
        value={fileContent}
        onChange={(e) => setFileContent(e.target.value)}
        rows={10}
        cols={50}
      />

      <button onClick={saveFile}>Save File</button>

      <input type="file" onChange={readFile} />
    </div>
  );
};

export default FileReadWriteComponent;
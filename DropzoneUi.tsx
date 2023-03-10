import { StrictMode, useEffect } from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileItem } from "@dropzone-ui/react";
function App() {
  const [files, setFiles] = useState([]);
  const [imageArr, setImageArr] = useState([])

  const updateFiles = (incommingFiles) => {
    const filesArr = files.map((item) => item.file.name)
    incommingFiles.map((item) => !filesArr.includes(item.file.name) &&
      setFiles([...files, item])
    );
  }
  
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  useEffect(() => {
    files.map((item) => {
        return getBase64(item.file, (img) => {
          const fileObj = {
            id: item.id,
            name: item.file.name,
            size: item.file.size,
            type: item.file.type,
            thumbnailUrl: img,
          }
          setImageArr([...imageArr, fileObj]) 
        })
    })
     
  }, [files])

  console.log(imageArr)
  return (
    <Dropzone
      style={{ minWidth: "505px" }}
      onChange={updateFiles}
      value={files}
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileItem preview {...file} onDelete={removeFile} key={file.id} info />
        ))}
    </Dropzone>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

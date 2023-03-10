import { StrictMode, useEffect } from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileItem } from "@dropzone-ui/react";
function App() {
  const [files, setFiles] = useState([]);
  const [imageArr, setImageArr] = useState([])
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const getBase64 = (file, cb) => { //eslint-disable-line
    const reader = new FileReader()
    if (!!file) {
      reader.readAsDataURL(file)
      reader.onload = function () {
        cb(reader.result)
      }
      reader.onerror = function (error) {
        console.log('Error: ', error) //eslint-disable-line
      }
    }
  }
  useEffect(() => {
    files.map((item) => {
      return getBase64(item.file, (img) => {
        const fileObj = {
          name: item.file.name,
          size: item.file.size,
          type: item.file.type,
          thumbnailUrl: img,
        }
        setImageArr((prevImages) => [...prevImages, fileObj])
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
          <FileItem {...file} onDelete={removeFile} key={file.id} info />
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

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const presetFiles = [{fileName: "Project:NOTES"}, {fileName: "Personal Website (This Website!)"}, {fileName: "About Elijah"}]

  return (
    <div className="App-body">

        {presetFiles.map((file, index) => {
          const posOffset = index * 12;
          let offsetLeft = `calc(40% + ${posOffset}px)`;
          return(
            <div 
              key={index}
              className="file"
              style={{left: offsetLeft}}
            >
              <p style={{fontSize: "15px"}}>{file.fileName}</p>
            </div>
          )
        })}
    </div>
  );
}

export default App;

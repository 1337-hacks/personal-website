import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, createRef} from 'react';
import File from './File';

function App() {

  const presetFiles = [
    {section: "project-notes", fileName: "Project:NOTES"}, 
    {section: "personal-website", fileName: "Personal Website (This Website!)"}, 
    {section: "about", fileName: "About Elijah"}
  ]

  const [fileSelect, setFileSelect] = useState("");

  const scrollRef = createRef(null);

  function sectionSelected(sectionName) {
    setFileSelect(sectionName);
    console.log(fileSelect);
  }

  useEffect(()=> {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [fileSelect]);

  return (
    <>
      <div className="App-body">

          {presetFiles.map((file, index) => {
            const posOffset = index * 12;
            let offsetLeft = `calc(40% + ${posOffset}px)`;
            return(
              <File
                key={index}
                section={file.section}
                sectionSelected={sectionSelected}
                offset={offsetLeft}
              />
            )
          })}
      </div>

      { 
        fileSelect === "project-notes" ?
          <div ref={scrollRef}>Project:NOTES</div> 
          : fileSelect === "personal-website" ?
          <div ref={scrollRef}>Personal Website</div>
          : fileSelect === "about" ?
          <div ref={scrollRef}>About</div> 
          : <div ref={scrollRef}></div> 
      }

      
      
    </>
    
  );
}

export default App;

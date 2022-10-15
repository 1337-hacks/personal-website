import './App.css';
import React, {useState, useEffect, createRef} from 'react';
import Desktop from './Desktop';
import LoadingScreen from './LoadingScreen';

function App() {

  const presetFiles = [
    {section: "project-notes", fileName: "Project:NOTES"}, 
    {section: "personal-website", fileName: "Personal Website"}, 
    {section: "comfort-ai", fileName: "Comfort.AI"}, 
    {section: "about", fileName: "About Elijah"}
  ] 

  return (
    <>
      <Desktop files={presetFiles}/>
    </>
    
  );
}

export default App;

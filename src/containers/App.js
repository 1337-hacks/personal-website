import './App.css';
import React, {useState, useEffect, createRef} from 'react';
import { Fade, Button } from 'react-bootstrap';
import Desktop from './Desktop';
import LoadingScreen from './LoadingScreen';

function App() {

  const presetFiles = [
    {section: "project-notes", fileName: "Project:NOTES"}, 
    {section: "personal-website", fileName: "Personal Website"}, 
    {section: "comfort-ai", fileName: "Comfort.AI"}, 
    {section: "about", fileName: "About Elijah"}
  ]

  const [loadState, setLoadState] = useState(false);

  useEffect(()=> {
    if(!loadState) {
      const timer = setTimeout(()=> setLoadState(true), 4000);
      return (()=> clearTimeout(timer));
    }
  }, [loadState])

  // Loading screen will perform some actions within it, and once it is finished
  // it will send a request above here to App.js to set laod state to true and
  // remove the loading screen.

  return (
    <>
      <Fade in={!loadState} unmountOnExit={true}>
        <LoadingScreen/>
      </Fade>

      {loadState && <Desktop files={presetFiles}/>}
    </>
    
  );
}

export default App;

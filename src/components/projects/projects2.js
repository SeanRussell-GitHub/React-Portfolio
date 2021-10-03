import React, { useState } from 'react';

const Projects2= () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
          <div>
        <h1>Note Taker</h1>
        <p><a href="https://postit-app11.herokuapp.com/notes.HTML" target="_blank" rel="noopener noreferrer">
        <div>
          <div className="projects2"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            </div></div></a></p>
      {isShown && (
        <div className="popuptext">
          <div><font color="white">
          A Note Taking App
          </font></div>
        </div>
      )}
            <p><a href="https://github.com/SeanRussell-GitHub/Note-Taker-App.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
          </div></div>
          )};

          export default Projects2;
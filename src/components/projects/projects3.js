import React, { useState } from 'react';
const Projects3= () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
          <div>
        <h1>Klettersteig</h1>
        <p><a href="https://sheltered-badlands-95600.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <div>
          <div className="projects3"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            </div></div></a></p>
      {isShown && (
        <div className="popuptext">
          <div><font color="white">
          A Hiking Helper App
          </font></div>
        </div>
      )}
        <p><a href="https://github.com/SeanRussell-GitHub/Hiking-App-Klettersteig.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
          </div></div>
          )};

          export default Projects3;
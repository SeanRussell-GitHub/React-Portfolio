import React, { useState } from 'react';

const Projects1= () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
          <div>
        <h1>Pokemon</h1>
        <p><a href="https://seanrussell-github.github.io/pokemonTeamProject/" target="_blank" rel="noopener noreferrer">
        <div >
          <div className="projects1"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            </div></div></a></p>
      {isShown && (
        <div className="popuptext">
          <div><font color="white">
          Pokemon Search
          </font></div>
        </div>
      )}
      <p><a href="https://github.com/SeanRussell-GitHub/pokemonTeamProject.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
          </div></div>
          )};

          export default Projects1;
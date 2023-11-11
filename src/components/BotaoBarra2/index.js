import React, { useState } from 'react';
import {Button, div, StyledLink, Button2,StyledLink2} from './styles';
import { FaCat } from 'react-icons/fa';

const BotaoComBarra2 = () => {
  const [barraVisivel, setBarraVisivel] = useState(false);

  const toggleBarra = () => {
    setBarraVisivel(!barraVisivel);
  };


  return (
    <div>

      <Button2 onClick={toggleBarra}>Adote um gatinho  <FaCat  size={25}/></Button2>
      {barraVisivel && ( 
        <div>
          <StyledLink2 to="/adoteGato">Adote</StyledLink2><br/>

        </div>
      )}
    </div>
  );
};

export default BotaoComBarra2;
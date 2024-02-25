import React, { useState, useEffect } from 'react';
import scenes from '../data/data.json';
import CardPresenter from './CardPresenter';


function JsonReader() {
  const [cardPile, setCardPile] = useState([]);

  useEffect(() => {
    // Load data from JSON when the component mounts
    if (scenes.scenes) {
      setCardPile(scenes.scenes);
    }
  }, []);

  return (
    <>
      {CardPresenter({ cardPile })}
    </>
  );
}

export default JsonReader;

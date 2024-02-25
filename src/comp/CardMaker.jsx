import React, { useState } from 'react';
import CardPresenter from './CardPresenter';
import HandleNewCard from './HandleNewCard';


function CardTemplate() {
  const [sceneData, setSceneData] = useState({
    title: '',
    info: '',
    chara: '',
  });

  const [cardPile, setCardPile] = useState([]);  // Add state for cardPile

  return (
    <>
      <div className="card">
        <form onSubmit={(e) => HandleNewCard(e, sceneData, setSceneData, cardPile, setCardPile)}>
          <label>Scene Title:</label>
          <input
            className="add-scene-input"
            type="text"
            value={sceneData.title}
            onChange={(e) => setSceneData({ ...sceneData, title: e.target.value })}
          />
          <label>Scene Info:</label>
          <input
            className="add-scene-input"
            type="text"
            value={sceneData.info}
            onChange={(e) => setSceneData({ ...sceneData, info: e.target.value })}
          />
          <label>Characters:</label>
          <input
            className="add-scene-input"
            type="text"
            value={sceneData.chara}
            onChange={(e) => setSceneData({ ...sceneData, chara: e.target.value })}
          />          <button className="add-scene-button" type="submit">
          Add
        </button>
      </form>
    </div>
    {CardPresenter({ cardPile })}
  </>
);
}

export default CardTemplate;
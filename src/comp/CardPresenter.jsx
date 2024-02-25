import React, { useState, useRef } from 'react';
import EditableText from './EdibleText';

function CardPresenter({ cardPile, deleteCard, displayJsonScenes }) {



  return (
    <>
<div id="SaveTextDiv">
      {cardPile.slice().reverse().map((card, index) => (
        <div className="card" key={index}>

            <h1 className="card-title"><EditableText initialText={card.title} /></h1>
            <p className="card-text"><EditableText initialText={card.info} /></p>
            <p className="card-characters"><EditableText initialText={card.chara} /></p>
            <p className="card-number">{index + 1}/{cardPile.length}</p>

          <button className="delete-scene-button" onClick={() => deleteCard(index)}>Delete</button>
          </div>)

      )
      
}
</div>
    </>
  );
}

export default CardPresenter;

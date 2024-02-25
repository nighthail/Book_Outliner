import React, { useState } from 'react';

function HandleNewCard(event, sceneData, setSceneData, cardPile, setCardPile) {
  event.preventDefault();

  let updatedTitle = sceneData.title || 'Title';
  let updatedInfo = sceneData.info || 'Lorem Ipsum text';
  let updatedChara = sceneData.chara || 'Mr. Place Holder';

  const newCard = {
    title: updatedTitle,
    info: updatedInfo,
    chara: updatedChara,
  };

  setCardPile((prevCardPile) => [...prevCardPile, newCard]);

  setSceneData({
    title: '',
    info: '',
    chara: '',
  });
  
}

export default HandleNewCard;

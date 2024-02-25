import React from 'react';
import jsonFile from '../data/data.json';
import { useState } from 'react';

function saveJsonButton(CardPile) {

    const [jsonData, setJsonData] = useState({jsonFile});

    function HandleSaveJson(event){
        // Maybe use form data wrapped around all cards, to read them and save to json?
        alert("I need to get all info first")

/*         const updateJsonData = (newData) => {
            setJsonData(newData);
            // You can also save the data to a file here if needed
          }; */

    }
    return (
<></>
    );
};

export default saveJsonButton;



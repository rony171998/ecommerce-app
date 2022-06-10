import axios from 'axios';
import React, { useState,useMemo, useEffect } from 'react';

const Memo = () => {
    const [inputValue,setInputValue]=useState("");
    const [pokemon,setPokemon]=useState("");
    
    useEffect((url) => {
        axios.get(url).then(res => setPokemon(res.data))
    })
    const randomNumber = Math.floor(Math.random() * 100)
    return (
        <div>
            <input type="text" onChange={e => setInputValue(e.target.value)}></input>
            <button onClick={( )=> alert("me ejecute")}>Buscar</button>
            
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`} alt="" />
            
        </div>
    );
};

export default Memo;

import './pokemonCard.css';
//import React, { useState } from "react";
import {
   Link
 } from "react-router-dom";
//import { useState } from 'react';
 
const PokemonCard=({ id,
   name,sprites,types

  })=>{
   


return (

    <div className="pokemon-card">
     <Link to={`/details/${id}`}  style={{textDecoration:"none"}}>
      <img className="pokemon-img"src={sprites?.other?.dream_world?.front_default}  alt="img"/>
      
     <div className="pokemon-info">
   <p>
    <span>#{id}</span>
   </p>
   <h5> {name.toUpperCase()}</h5>
<div className="abilities">
       {types.map((item)=>{
                 return <span className='type'> {item?.type?.name}</span>
       })}
     </div>
     </div>
     </Link>
     </div>

)

}
export default PokemonCard;

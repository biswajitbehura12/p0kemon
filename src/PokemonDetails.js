import React from 'react';
import { useGlobalContext } from './Context';
import { useParams } from 'react-router-dom';
import'./pokemonDetails.css';
const PokemonDetails = () => {
       const {allPokemons} =useGlobalContext();
       const id1 = useParams();
const data = allPokemons.filter((item)=>   item.id  == id1.name )


  return (
    <div className='Details-container'>
      <section className='Img-Star-container'>
        <img  className="img-poke" src={data[0]?.sprites?.other?.dream_world?.front_default} alt='pokemon img' />


        <div className='section-star'>
            <div className='poke-star'>
              <p>{data[0]?.stats[0]?.base_stat} </p>
              <h1>{data[0]?.stats[0]?.stat?.name }</h1>
            </div>
            <div className='poke-star'>
            <p>{data[0]?.stats[1]?.base_stat} </p>
              <h1>{data[0]?.stats[1]?.stat?.name }</h1>
            </div>

            <div className='poke-star'>
            <p>{data[0]?.stats[2]?.base_stat} </p>
              <h1>{data[0]?.stats[2]?.stat?.name }</h1>
            </div>

            <div className='poke-star'>
            <p>{data[0]?.stats[3]?.base_stat} </p>
              <h1>{data[0]?.stats[3]?.stat?.name }</h1>
            </div>

            <div className='poke-star'>
            <p>{data[0]?.stats[4]?.base_stat} </p>
              <h1>{data[0]?.stats[4]?.stat?.name }</h1>
            </div>
            <div className='poke-star'>

            <p>{data[0]?.stats[5].base_stat} </p>
              <h1>{data[0]?.stats[5]?.stat?.name }</h1>
            </div>

        </div>

      </section>
      <section className='section-2-container'>
        <div className='specific-info'>
        <p>
        <b>Height</b> is <b>{data[0]?.height} cm.</b>
      </p>
  
      <p>
        <b>Weight</b> is <b>{data[0]?.weight * 0.1} kg</b>
      </p>
      <p><b>Category:</b>{}</p>
      <p><b>Abilities:</b>{data[0]?.abilities[0]?.ability?.name}     {data[0]?.abilities[1]?.ability?.name}</p>
      <h1> Gender: Male</h1>
        </div>
        <div className='type-container'>
          <h1>Type:</h1>
          <div>
          <button className='type-btn'>{ data[0]?.types[0]?.type?.name}</button>
          </div>
        </div>
        <div className='weaknesses-container'>
          <h1>Weakness :</h1>
          <div className='weaknesses-btn-container'>  
           <button className='weakness-btn'>water</button>
           <button className='weakness-btn'>water</button>
           <button className='weakness-btn'>water</button>
          </div>

        </div>


      </section>
    </div>
  )
}

export default PokemonDetails;

import { useState } from "react";
import { Link } from "react-router-dom";


function ListeCards ({travaux}) {

  return (
    <main className='mainMain'>
      <div className='main'>
        {travaux.map((element) => (
          <div className="logement" key = {element.id}>
            <Link to={`/TravailDetail/${element.id}`}>
              <img src = {element.cover} title = {element.title} alt = {element.title}/>
              <h2 className="titreH">{element.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ListeCards;
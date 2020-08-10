import React from 'react'

export const Informacion = ({informacion}) => {
  
  // Object.keys se usa para saber si un objeto viene vacio o no

  if (Object.keys(informacion).length===0) {
    return null
  } 
  
  const {strArtistThumb, strGenre, strBiographyES}=informacion

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información del artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Género{strGenre}</p>
        <p className="h2 card-text">Biografía:</p>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a href={`https://${informacion.strFacebook}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
          </a>
          <a href={`https://${informacion.strTwitter}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
          </a>
          <a href={`${informacion.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  )
}

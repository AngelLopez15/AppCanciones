import React from 'react'

export const Cancion = ({letra}) => {

  // para prevenir que el componenete  se renderice al iniciar
  // sin que hayamos buscado una cancion
  if (letra.length===0) {
    return null
  }

  return (
    <>
      <h2>Letra de la canción</h2>
      <p className="letra">{letra}</p>
    </>
  )
}

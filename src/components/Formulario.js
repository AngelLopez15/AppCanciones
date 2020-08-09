import React, { useState } from 'react'

export const Formulario = ({setBusquedaLetra}) => {
  
  // State para manejar los input del formulario
  const [busqueda, setBusqueda] = useState({
    // el name de los input debe tener el valor de los nombres de las
    // propiedades de los objetos para que funcione la tecnica que usamos
    artista:'',
    cancion:''
  })

  // desestructurando el objeto para enviarlo como los value
  const {artista, cancion} = busqueda

  // State para manejar el error
  const [error, setError] = useState(false)

  // funcion a cada input para leer su contenido
  const actualizarState = (e) =>{
    setBusqueda({
      ...busqueda,
      [e.target.name]:e.target.value
    })
  }

  // funcion para buscar información en las APIS
  const buscarInformacion = (e) =>{
    e.preventDefault()

    if(artista.trim()==='' || cancion.trim()===''){
      setError(true)
      return
    }
    setError(false)
    // Si todo sale bien pasar al componenete principal
    setBusquedaLetra(busqueda)
  }

  return (
    <div className="bg-info">
      {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>:null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                Buscador de letras de canciones
              </legend> 

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre del artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la canción"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary float-right"
              >Buscar</button>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

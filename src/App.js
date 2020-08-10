import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Formulario } from './components/Formulario';
import { Cancion } from './components/Cancion';
import { Informacion } from './components/Informacion';


function App() {

  // definiendo el State para buscar la letra
  const [busquedaLetra, setBusquedaLetra] = useState({}) 

  // state para renderizar la letra
  const [letra, setLetra] = useState('')

  // state para la informacion del artista
  const [informacion, setInformacion] = useState({})

  useEffect(() => {
    
    if(Object.keys(busquedaLetra).length===0){
      return
    }
    
    // consultar la API para la letra de la canción
    const consultarAPILetra = async()=>{

      const {artista, cancion} = busquedaLetra

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      // esta la forma correcta de hacer una peticion a dos APIs. Hacerlo me diante una
      // Promesa por que si se hace con dos await lo que va a hacer es esperar que se 
      // resuelva la primer petición para despues hacer la segunda. Con la promesa hacemos
      // Que las dos se ejecuten al mismo tiempo y no tenemos que esperar a que un termene
      // Para que el otro empiece
      const [letra, informacion]= await Promise.all([axios(url),axios(url2)])

      setLetra(letra.data.lyrics)
      setInformacion(informacion.data.artists[0])
    } 
    consultarAPILetra()

  }, [busquedaLetra])

  return (
    <>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion 
              informacion={informacion}
            />
          </div>

          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;

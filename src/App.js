import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Formulario } from './components/Formulario';
import { Cancion } from './components/Cancion';


function App() {

  // definiendo el State para buscar la letra
  const [busquedaLetra, setBusquedaLetra] = useState({}) 

  // state para renderizar la letra
  const [letra, setLetra] = useState('')

  useEffect(() => {
    
    if(Object.keys(busquedaLetra).length===0){
      return
    }
    
    // consultar la API para la letra de la canción
    const consultarAPILetra = async()=>{

      const {artista, cancion} = busquedaLetra

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const resultado = await axios(url)
      setLetra(resultado.data.lyrics)
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

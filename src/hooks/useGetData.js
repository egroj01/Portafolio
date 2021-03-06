import {useState, useEffect } from 'react';
// la API que voy a consumir
const api = 'https://raw.githubusercontent.com/egroj01/Portafolio/master/src/utils/db.json'

const useGetData = () => {
  /* Establezco mi useState
  1) myData: valor del estado - 2)setData: funcion que se encarga de actualizar el estado.*/

  const [mydata, setData] = useState([]); // el estado es un arreglo [] vacio

/* Establezco mi useEfect se encarga de hacer la peticion */
//hace el llamado a la api con fetch
  useEffect(() => {
    fetch(api)
      .then(response => response.json()) // la respuesta sera un objeto .json
      .then(data => setData(data)) // luego mi data va a pasar a esa funcion que actualiza
  }, []) // aqui se podria poner a escuchar para cambios,pero como no entonces arreglo vaci solo para el render

  return mydata; // la expongo por aqui el nuevo estado
}

export default useGetData;
import { useState, useEffect } from "react";
import "../rickMortyimg/rickymorty.css";
import { getCharacters } from "../../service";
import Pj from "./pj";


const Rickymorty = () => {
  const [charList , setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imagen , setImagen] = useState('');


  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);


  return (
    <>
      <img alt="Aun no seleccionaste una imagen"  src={imagen}/>
      {isLoading && <h1>Loading</h1>}
      <div>

        
        {
         charList.map( pj => 
           <Pj name={pj.name} img={pj.image}  id={pj.id} imagenSeleccionada={setImagen}/>
           )
        }
      </div>
    </>


  );
  
}

  

  export default Rickymorty;
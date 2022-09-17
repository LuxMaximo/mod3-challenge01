const pj = ({name, img, id, imagenSeleccionada} ) => {


    return (
      <div className="color-square" onClick={() => imagenSeleccionada(img)}>
        <img src={img} alt=""/>
        <h2>Id: {id} y Nombre: {name}</h2>
      </div>
  
    );
  }
  
  export default pj;
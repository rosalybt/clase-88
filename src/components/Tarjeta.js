import './Tarjeta.scss';

const Tarjeta = ({ price, title }) => {
  console.log('props de Tarjeta', price, title);

  const mostrarTitulo = false;

  return (
    <article className="tarjeta"> 

    {mostrarTitulo && <h4>{title}</h4>}

      <h5>{price}</h5>

      {/* TAREA:
      El objeto "producto" en App.js tiene una propiedad "free_shipping"
       que se refiere al envio gratuito
       Hacer en el componente Tarjeta.js una condicion tal que:
       - Si free_shipping es true, se muestre la imagen de un camioncito (la que quieran)
       - Si free_shipping es false, no se muestre nada.  */}
    </article>
  );
};

export default Tarjeta;

// Renderizado condicional: mostrar JSX de acuerdo a condiciones
// 1) If o if/else: Meter todo el retorno del componente en un if // No muy habitual
// 2) Operador ternario: dentro del JSX
// 3) Evaluacion de cortocircuito (&&)
// 4) Switch  // No muy habitual

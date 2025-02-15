import PropTypes from "prop-types";

const Product = ({
  pid,
  marca,
  model,
  imatge,
  processador,
  ram,
  emmagatzematge,
  polzades,
  preu,
  handleClick
}) => {
  return (
    <div className="product-wrapper">
      <div className="prod-title">
        <h2>{marca}</h2>
        <h3>{model}</h3>
      </div>
      <img src={`../../src/pccomp/${imatge}`} alt={model} />
      <p>
        {processador}/{ram}/{emmagatzematge}/{polzades}
      </p>
      <a href="#">See Details</a>
      <p>Price: {preu} €</p>
      <button data-id={pid} className="buy-button" onClick={handleClick}>Buy</button>
    </div>
  );
};

// Validar que las props que se pasen al componente sean del tipo correcto ( opcional )
// Product.propTypes = {
//   pid: PropTypes.number.isRequired,
//   marca: PropTypes.string.isRequired,
//   model: PropTypes.string.isRequired,
//   imatge: PropTypes.string.isRequired,
//   processador: PropTypes.string.isRequired,
//   ram: PropTypes.string.isRequired,
//   emmagatzematge: PropTypes.string.isRequired,
//   polzades: PropTypes.string.isRequired,
//   preu: PropTypes.number.isRequired,
// };

export default Product;

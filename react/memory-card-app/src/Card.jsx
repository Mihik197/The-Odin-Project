import PropTypes from 'prop-types';

function Card ({ pokemon, onClick }) {
    return (
        <div className="Card" onClick={() => onClick(pokemon.id)} style={style.card}>
            <img src={pokemon.image} style={style.image}/>
            <p>{pokemon.name}</p>
        </div>
    );
}

Card.proptypes = {
    name: PropTypes.string.isRequired, 
}

Card.defaultProps = {
    name: 'pikachu',
}

export default Card;

const style = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      textAlign: 'center',
      cursor: 'pointer',
    },
    image: {
      width: '100px',
      height: '100px',
    },
  };
  
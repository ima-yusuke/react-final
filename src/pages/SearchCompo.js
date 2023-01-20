// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const SearchCompo = ({ word }) => {
  return (
    <>{word.map((name, idx) =>
      // <div key={idx}>{name.title}</div>

      <div key={idx} className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={name.img} alt="Card image cap" />
        <div className="card-body">
          <h5>{name.title}</h5>
          <p className="card-text">{name.contents}</p>
        </div>        
      </div>

    )}
    </>
  )
}

export default SearchCompo
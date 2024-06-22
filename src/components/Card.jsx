const Card = ({name, description, image, characters, action}) => {
    return(
        <div className="card">
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>Main Characters:</h3>
            {characters.map((character) => <p>{character}</p>)}
            <div className="img-box">
                <img src={image} alt={name} />
            </div>
            <button className="btn" onClick={() => action(name, characters)}>Button</button>
        </div>
    )
}

export default Card
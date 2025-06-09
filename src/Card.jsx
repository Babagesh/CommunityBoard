const Card = (props) => {
    return (
        <div className = "card">
            <div className = "card-img-top">
                <img class = "truck-image" src = {props.image}/>
            </div>
            <div className = "card-body">
                <h2 className = "card-title"> {props.name}</h2>
                <h3 className = "card-text"> {props.style}</h3>
                <button className = "btn btn-primary">View Menu</button>
            </div>
            
        </div>
    );
}

export default Card;
const Card = (props) => {
    return (
        <div className = "card">
            <div className = "card-img-top">
                <img class = "truck-image" src = {props.image}/>
            </div>
            <div className = "card-body">
                <h3 className = "card-title"> {props.name}</h3>
                <h5 className = "card-text"> {props.style}</h5>
                <button className = "btn btn-primary">View Menu</button>
            </div>
            
        </div>
    );
}

export default Card;
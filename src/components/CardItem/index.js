import './index.css'

const CardItem = props => {
    { cardsList } = props
    {title,description,imgUrl,className} = cardsList
    return (
        <div className={className}>
            <h1 className="heading">{title}</h1>
            <p className="description">{description}</p>
            <img src="{imgUrl}" alt="image" />
        </div>
    )
}

export default CardItem;

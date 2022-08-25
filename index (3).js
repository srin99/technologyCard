// Write your code here.
import './index.css'

const CardItem = props => {
  const {title, description, imgUrl, className} = props
  return (
    <li className={className}>
      <div className="card-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem

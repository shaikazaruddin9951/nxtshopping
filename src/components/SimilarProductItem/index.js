// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props

  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-product-item"
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-product-brand">{brand}</p>
      <div className="similar-product-price-rating-contianer">
        <p className="similar-product-price"> Rs {price}</p>
        <div className="similar-product-rating-contianer">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            className="similar-product-star"
            alt="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem

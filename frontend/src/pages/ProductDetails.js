import { useParams } from "react-router-dom"
import { useContext } from 'react'
import Context from '../components/Context'

export default function ProductDetails() {
    const userData = useContext(Context)
    const params = useParams()
    let productData = null

    switch (params.id) {
        case "143":
            productData = {
                name: 'Hoodie',
                price: 50.00,
                image: require('../assets/images/good-day-to-code.jpg')
            }
            break
        
        case "486":
            productData = {
                name: 'Coffee Mug',
                price: 25.00,
                image: require('../assets/images/eat-sleep-code-repeat.jpg')
            }
            break

        case "505":
            productData = {
                name: 'Coding Stickers Pack',
                price: 10.00,
                image: require('../assets/images/stickers.jpg')
            }
            break

        case "606":
            productData = {
                name: 'Coding Mouse Pad',
                price: 20.00,
                image: require('../assets/images/coding-mouse-pad.jpg')
            }
            break

        case "707":
            productData = {
                name: 'Code Pen',
                price: 5.00,
                image: require('../assets/images/code-pen.jpg')
            }
            break

        case "808":
            productData = {
                name: 'Keep Calm Notebook',
                price: 15.00,
                image: require('../assets/images/keep-calm-notebook.jpg')
            }
            break

        case "909":
            productData = {
                name: 'Coding Backpack',
                price: 60.00,
                image: require('../assets/images/bagpack.jpg')
            }
            break

        case "1010":
            productData = {
                name: 'Coding Tote Bag',
                price: 30.00,
                image: require('../assets/images/coding-tote-bag.jpg')
            }
            break
        
        default:
            break
    }

    return (
        <>
            <h1 className="product-details">Product Details</h1>
            <p className="product-details">The product ID is {params.id}</p>
            <p className="product-details">Cart Items: {userData.cartItems}</p>
            {
                productData != null ?
                <>
                    <img src={productData.image} alt={productData.name} width="400" />
                    <h2 className="product-details">{productData.name} - ${productData.price}</h2>
                </>
                : ''
            }
        </>
    )
}

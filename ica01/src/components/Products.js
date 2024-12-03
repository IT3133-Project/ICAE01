
import '../assets/CSS/layout.css';
import Product from './Product'
import Cart from './Cart'
import { flowers } from '../components/FlowerDB'
import { useState } from 'react';


export default function Products() {
    const [Item, SetItem] = useState([]);
    const addCart = (flower, quantity) => {
        if (quantity > 0) {
            const newItem = {
                id: flower.id,
                name: flower.name,
                quantity: quantity,
                price: flower.price,
                totalPrice: flower.price * quantity,
            }
            SetItem((prevItems) => {
                return [...prevItems, newItem]
            });
        }
    }

    return (
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map((prod) => (
                            <Product product={prod} key={prod.id} addCart={addCart} />
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                    //cart
                    <Cart Item={Item} />
                }
            </div>
        </>
    );

}
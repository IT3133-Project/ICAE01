import '../assets/CSS/layout.css';
import {useState} from 'react';
export default function Product({product,addCart}){
    const [quantity, setQuantity] = useState(0);

    const addItem=()=>{
        addCart(product,quantity);
        setQuantity(0);
    }
    
    return(
        <div className="grid-item">

            <div class="card">
                <img  src={require('../assets/image/'+product.img) } alt= {product.name}/>
                <div class="card-body">
                    <h5 class="card-title">{product.name} Price:${product.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                    </div>
                    <button class="card-button" onClick={addItem}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
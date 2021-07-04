import React from 'react'
import '../component/Product.css'
import {useStateValue} from './StateProvider'
function Product({id,title,img,price,rating}) {

    const [{basket},dispatch]=useStateValue();
    console.log(basket)
    const addTobasket=()=>{
        console.log('press>>')
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                img:img,
                price:price,
                rating:rating
            }
        });
    }
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                         <p>⭐</p>
                    ))}
                   
                </div>
            </div>
            <img src={img} alt="" className="product__img" />
            <button onClick={addTobasket}>Add to basket</button>
        </div>
    )
}

export default Product

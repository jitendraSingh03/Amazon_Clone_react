import React from 'react'
import '../component/BasketItem.css'
import { useStateValue } from './StateProvider'
function BasketItem({id,img,title,price,rating}) {

    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
            dispatch({
                type:'REMOVE_FROM_BASKET',
                id:id
            })
    }
    return (
       
        <div className='basketItem'>
            <img className='basketItem__image' src={img} alt="" />
            <div className='basketItem__info'>
                <p className="basketItem__title">{title}</p>
                <p className="basketItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="basketItem__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem;
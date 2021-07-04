import React from 'react'
import '../component/Checkout.css';
import Subtotal from './Subtotal';
import BasketItem from './BasketItem';
import {useStateValue} from '../component/StateProvider'
function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png" alt="" className="checkout__ad" />
                <div>
                    <h3>Hello,{user?.email}</h3>  
                    <h2 className="checkout__title">Your shopping basket</h2>
                   
                   {basket.map(item=>(
                       <BasketItem
                       id={item.id} title={item.title}
                       img={item.img} price={item.price} rating={item.rating}
                       />
                   ))}
                    {/* basket item */}
                    {/* basket item */}
                    {/* basket item */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

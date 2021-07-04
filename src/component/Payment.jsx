import React from 'react'
import "../component/Payment.css";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import BasketItem from './BasketItem';
function Payment() {

    const [{user,basket}]=useStateValue();
    return (

        <div className='payment'>
               <div className="payment__container">
                    <h1>
                        Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
                    </h1>
            
                    {/* payment address */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>Lorem ipsum sit  </p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review items and address</h3>        
                        </div>
                        <div className="payment__items">
                            {basket.map((item =>(
                                <BasketItem id={item.id} title={item.title} img={item.img} price={item.price} rating={item.rating}/>
                            )))}
                        </div>
                        </div>
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                                {/* strip */}
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Payment

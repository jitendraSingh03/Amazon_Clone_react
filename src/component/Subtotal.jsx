import React from 'react';
import '../component/Subtotal.css';
import {useHistory} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
function Subtotal() {
    const history=useHistory()
    const [{basket},dispatch]=useStateValue();
    let len=0;
    let sum=0;
    while(len<basket.length){
        sum=sum+basket[len].price;
        len++;
    }
    return (
        <div class='subtotal'>
            <CurrencyFormat 
            renderText={(value) =>(
                <>
                    <p>
                        Subtotal({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal-gift">
                        <input type="checkbox" /> this order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={sum}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}/>
            <button onClick={e=> history.push('/payment')}>Proceed to checkout</button>
        </div>  
    )
}

export default Subtotal

import React from 'react'
import '../component/Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className="home__container">
            
                <img className="home__banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Jewellery/June/BrandDay/GW/GW_PC_BUNK1500x600_ziva._CB666269202_.jpg" alt="" />
                <div className="home__row">
                    <Product id='1' title='white color earphone with greate base' img='https://source.unsplash.com/300x200?earphone' price={9.9} rating={5}/>
                    <Product  id='2' title='white color earphone with greate base' img='https://source.unsplash.com/300x200?phonecover' price={9.9} rating={4}/> 
                </div>
                <div className="home__row">
                    <Product id='3' title='best cloth' img='https://source.unsplash.com/300x200?jeans' price={9.9} rating={2}/>
                    
                    <Product id='4' title='amazing T-shirt' img='https://source.unsplash.com/300x200?tshirt' price={9.9} rating={2}/>
                    
                    <Product id='5' title='cloth for kid' img='https://source.unsplash.com/300x200?kid' price={9.9} rating={5}/>
                    
                </div>
                <div className="home__row">
                    <Product id='6' title='white color earphone with greate base' img='https://source.unsplash.com/300x200?rice' price={9.9} rating={4}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home

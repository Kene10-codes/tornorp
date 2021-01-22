import React from 'react'
import Navbar from '..//../components/navbar/Navbar'
import AppStoreImage from './assets/app-store.png'
import GooglePlayImage from './assets/google-play.png'
import PhoneImage from './assets/phone.png'
import ChatImage from './assets/chat.png'

const  Home = () => {
    return (
        <div>
         <Navbar />
            <div className="container">
             <div>
                 <h3>Keep track of your team's attendance, the easy way</h3>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      In repellat doloribus eius sit nihil ratione, officiis ad rerum mollitia aspernatur!
                  </p>

                  <button>Download App</button>
             </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-md-6">
                        <h4> Want to access all the features? <br/>
                             Download our mobile app
                        </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit. Ipsam quas odio nam eligendi labore ipsum blanditiis neque quod dolores adipisci! Qui deleniti fugit praesentium optio facere rem nisi similique ea vero officia error necessitatibus rerum, a iure repudiandae.</p>   
                        <div className="d-flex flex-row justify-content-center">
                         <img src={AppStoreImage} alt="App store"/>
                         <img src={GooglePlayImage} alt="Google play store" className="ml-3" />
                     </div>
                    </div>  
                    <div className="col">
                        <img src={PhoneImage} alt="Phone"/>
                    </div>
                    <div className="col align-self-end">
                        <img src={ChatImage} alt="Phone"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home

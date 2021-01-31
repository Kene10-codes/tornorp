import React from 'react'
import BgColor from '../common/BgColor'
import Navbar from '..//../components/navbar/Navbar'
import Footer from '..//../components/footer/Footer'
import AppStoreImage from './assets/app-store.png'
import GooglePlayImage from './assets/google-play.png'
import PhoneImage from './assets/phone.png'
import ChatImage from './assets/chat.png'
import styles from './home.module.css'

const  Home = () => {
    return (
        <div>
        <BgColor />
         <Navbar />
            <div className="container mt-5 mb-5">
             <div className='row'>
                 <div className="col-sm-5">
                 <h3 className={styles.h3}>Keep track of your team's attendance, the easy way</h3>
                 <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      In repellat doloribus eius sit nihil ratione, officiis ad rerum mollitia aspernatur!
                  </p>
                  <button className={styles.button}>Download App</button>
                   </div>
                 </div>  
            </div>

            <div className="container-fluid mt-5" className={styles.wrapper}>
                <div className="row">
                    <div className="col col-sm-5 p-5">
                        <h4 className={styles.h4}> Want to access all the features? <br/>
                             Download our mobile app
                        </h4>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                             lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.</p>   
                        <div className="d-flex flex-row justify-content-center">
                         <img src={AppStoreImage} alt="App store"/>
                         <img src={GooglePlayImage} alt="Google play store" className="ml-3" />
                     </div>
                    </div>  
                    <div className="col-sm-3">
                        <img src={PhoneImage} alt="Phone"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={ChatImage} alt="Phone"/>
                    </div>
                </div>
            </div>
          <Footer />
        </div>
    )
}

export default Home

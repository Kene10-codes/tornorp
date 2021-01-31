import React from 'react'
import {Link} from 'react-router-dom'
import TonorpImage from './assets/Vector.svg'

import styles from './footer.module.css'

const  Footer = () => {
    return (
        <div>
            <div className="container-fluid" className={styles.wrapper}>
                <div className="row pt-5">
                    <div className="col-sm-12">
                        <div className="d-flex justify-content-center align-items-center mb-5">
                        <img 
                        src={TonorpImage}
                         alt="Tonorp"
                         />
                        <span>Tonorp</span>
                        </div>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center flex-row align-items-center mb-3">
                            <li className="nav-item pr-3" className={styles.li}><Link className={styles.Link} to="#">Features</Link></li>
                            <li className="nav-item pr-3"><Link className={styles.Link} to="#">Help</Link></li>
                            <li className="nav-item pr-3"><Link className={styles.Link} to="#">Privacy Policy</Link></li>
                            <li className="nav-item"><Link className={styles.Link} to="#">Terms & Conditions</Link></li>
                        </ul>
                      
                        <p className={styles.p}>&copy; 2020 Tonorp Incorporated. All rights reserved</p>
                        </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Footer

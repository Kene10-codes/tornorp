import React from 'react'
import { Link } from 'react-router-dom'
import tonorpLogo from  './tonorp.png'
import styles from './navbar.module.css'

const  Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to='/'>
                <img src={tonorpLogo} alt="Tonorp logo" />
                  <span className={styles.span}>Tonorp</span>
                </Link>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={styles.Link} to="#">Log in</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={styles.createLink} to="#">Sign Up</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </div>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import tonorpLogo from  './tonorp.png'
import Home from '..//../pages/home/Home'

const  Navbar = () => {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link class="navbar-brand" to={Home}>
                <img src={tonorpLogo} alt="" />
                  Tonorp
                </Link>
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link" href="#">Log in</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" href="#">Sign Up</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </div>
    )
}

export default Navbar

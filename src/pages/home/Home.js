import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-light bg-light navbar-expand-lg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top" />
                    Tonorp
                    </Link>
                    <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbar'
                    arial-controls='navbarNav'
                    arial-expanded='false'
                    arial-label='Navbar Toggle'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNAv'>
                        <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'><Link className='nav-link'>Login</Link></li>
                                <li className='nav-item'><Link className='nav-link'>Create Accountt</Link></li>
                        </ul>
                    </div>  
                </div>
            </nav>

            {/* header */}
            <div className="container">
                <h2>Easily keep track of your team's attendance. <br/>
                   Anytime, anywhere...
                </h2> 
                <p></p>
                <button>Get Started</button>
            </div>
        </React.Fragment>
    )
}

export default Home

import React from 'react';
import '../../styles/thankyou.css';

import { Link, useNavigate } from 'react-router-dom';

function Thankyou() {
    return (
        // <div>
        //     <div className="Header">
        //         <h1>

        //         </h1>
        //         <label className="switch">
        //             <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox" />
        //             <span className="slider round"></span>
        //         </label>
        //     </div>
        // </div>
        <div className="thankyou-container">
            <h1 className="thankyou-title">Thank You!</h1>
            <p className="thankyou-message">
            Your submission has been received. I will contact you soon!
            </p>
            <Link to='/' className='go-to-home-btn'>
                Go to Home
            </Link>
        </div>
    )
}

export default Thankyou
import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = (e) =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not-dark2').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
            x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div>
            <div className="Header">
                {/* <h1>{ `Hi` }</h1> */}
                <h1>{ `HI I'm ${header.name}` }</h1>
                <p className="line-1 anim-typewriter">Full Stack Developer...</p>
                <label className="switch">
                    <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <HeaderButton/>
            </div>
            {/* <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img> */}
            <FontAwesomeIcon  className="gtp" id="not-dark" onClick={scrollTo} icon={faIdCardClip} />
            {/* <button className="gtp" onClick={scrollTo}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </button> */}
        </div>
    )
    
}

export default Header;
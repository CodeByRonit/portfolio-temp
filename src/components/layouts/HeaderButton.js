import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';


const HeaderButton = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 1100,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="mx-auto">
                <a onClick={scrollTo}>
                    <button className="see">
                        <FontAwesomeIcon icon={faCircleChevronDown} />
                    </button>
                </a>
            </div>
        </>
    )
}

export default HeaderButton

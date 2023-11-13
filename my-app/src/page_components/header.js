import React, {useState} from 'react'
import '../Styling.css';

function Header() {
    const [buttonText, setButtonText] = useState('E-Mail');

    const handleClick = () => {
        navigator.clipboard.writeText('MeabhReal@gmail.com');
        setButtonText('Copied!');
        setTimeout(function() {
            setButtonText('E-Mail');
        }, 1000);
    };


    return (
        <div className="Header-dark">
            <h1 className="Header-text">Méabh McFadden</h1>

            <h3 className="Header-text Header-links"><a className="App-link" href="https://github.com/MeabhReal" target="_blank"
            rel="noopener noreferrer">[Github]</a></h3>

            <h3 className="Header-text Header-links"><a className="App-link" href="https://www.linkedin.com/in/méabh-mcfadden-794492241" target="_blank"
            rel="noopener noreferrer">[LinkedIn]</a></h3>

            <h3 className="Header-text Header-links" onClick={handleClick}>
            [{buttonText}]
            </h3>
        </div>
    )
}

export default Header
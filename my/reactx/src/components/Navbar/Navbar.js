import React, {useState, useEffect} from 'react';
import "./Navbar.css"

export default function Navbar() 
{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        
        // 2) on update le state
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            // si on repasse au dessu de 500 ferme auto le menu
            if(window.innerWidth > 500){
                setToggleMenu(false);
            }
        }
        // 1) quand on resize l'écran 
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <nav>
            {(toggleMenu || largeur > 500 ) && (

                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Services</li>
                    <li className="items">Contact</li>
                </ul>
            )}
                <button onClick={toggleNavSmallScreen} className="btn">Btn</button>
        </nav>
    )
    
}

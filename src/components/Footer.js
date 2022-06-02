import React, { useEffect, useState } from 'react';
import { FaHome, FaPhoneAlt, FaEnvelope, FaAngleUp } from "react-icons/fa";

function Footer() {

    // ______________________    USE STATES
    const [visible, setVisible] = useState(false)

    // Control the visibility of the 'return to the top of the page' button
    // visibility on when the user scroll down on the page
    const toggleVisibility = () => window.pageYOffset > 200 ? setVisible(true) : setVisible(false)
    
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])
    
    // function to return to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // COMPANY EMAIL
    const email = "contact@email.com"

    // function to copy the email on the user clipboard and let him know with an alert
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(email);
        alert('Email copié');
      }

    return (
        <>
            <div className='row footer_container'>
                <div className='col-md-6 footer_about'>
                    <p className='footer_title'>DIVERS</p>
                    <p className='footer_links'>Demander un devis</p>
                    <p className='footer_links'>Offres spéciales</p>
                    <p className='footer_links'>Carte cadeau</p>
                    <p className='footer_links'>Emplois</p>
                    <p className='footer_links'>Nous contacter</p>
                </div>
                <div className='col-md-6 footer_about'>
                    <p className='footer_title'>CONTACT</p>
                    <p className='footer_contacts'>The Bike Shop</p>
                    <p className='footer_contacts'><FaHome className='icons' /> 2, route de l'adresse - 69000 Lyon</p>
                    <p className='footer_contacts'><FaPhoneAlt className='icons' /> 00 00 00 00 00</p>
                    <p onClick={copyToClipboard} className='footer_links'><FaEnvelope className='icons' /> {email}</p>
                </div>
            </div>

            <div className='footer_credits'>
                The Bike Shop © 2022
            </div>

            {visible ?  
                <FaAngleUp 
                size={35} 
                className='scrollToTop'
                onClick={scrollToTop}
                />:
                <></>}
        </>
    );
}

export default Footer;
import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Ex Hacienda San Buenaventura.</h3>
                    <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=100028672083141">
                        <FaFacebook className='icon' />
                        </a>
                        {/* <FaFacebook className='icon' /> */}
                        {/* <FaInstagram className='icon' /> */}
                        <a href="https://www.instagram.com/buenaventurahaciendasan/">
                        <FaInstagram className='icon' />
                        </a>
                        {/* <FaTwitter className='icon' /> */}
                        {/* <FaPinterest className='icon' /> */}
                        <a href="https://www.youtube.com/watch?v=FBzfLPAm0dQ">
                        <FaYoutube className='icon' />
                        </a>
                        {/* <FaYoutube className='icon' /> */}
                    </div>
                </div>
                <div className="bottom">
                    {/* <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer

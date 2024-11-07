import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <footer className='footer_layout'>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-3'>
                        <img src="/image/logo.png" alt="logo" className='footer_logo' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                    </div>
                    <div className='col-lg-3 footer_quick_link pt-3'>
                        <h4>Quick Links</h4>
                        <ul className='text-muted'>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <h4>Contact Details</h4>
                        <ul className='text-muted'>
                            <li>Email: info@example.com</li>
                            <li>Phone: +123456789</li>
                            <li>Address: 123, Main Street</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <h4>Popular Categories</h4>
                        <ul className='text-muted'>
                            <li>Electronics</li>
                            <li>Fashion</li>
                            <li>Home & Garden</li>
                            <li>Sports</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

 

export default Footer;

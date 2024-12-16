import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className="container-1">
             <div className="heading"><h2>Bandage</h2></div> 
            <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            </div>
            
            </div>
            
        <div className="container">
            <div className="col-2">
            <h3>Company Info</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div className="col-2">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div className="col-3">
                <h3>Features</h3>
                <ul>
                    <li><a href="#">Business Marketing</a></li>
                    <li><a href="#">User Analytic</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Unlimited Support</a></li>
                </ul>
            </div>
            <div className="col-3">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">IOS & Android</a></li>
                    <li><a href="#">Watch a demo</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">API</a></li>
                </ul>
            </div>
            <div className="col-4">
                <h3>Get in Touch</h3>
                <form>
                    <input type="email" placeholder="Your Email" required />
                    
                    <button className="btn">Subscribe</button>
                </form>
      
            </div>
        </div>
        <div className="footer-2">
            <p>Made with Love by Finland All Rights Reserved.</p>
        </div>
    </footer>
  );
}

export default Footer
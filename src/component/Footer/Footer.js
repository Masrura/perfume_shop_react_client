import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div class="social"><i class="icon ion-social-instagram"></i><i class="icon ion-social-snapchat"></i><i class="icon ion-social-twitter"></i><i class="icon ion-social-facebook"></i></div>
            <ul class="list-inline">
                <li class="list-inline-item">Home</li>
                <li class="list-inline-item">Services</li>
                <li class="list-inline-item">About</li>
                <li class="list-inline-item">Terms</li>
                <li class="list-inline-item">Privacy Policy</li>
            </ul>
            <p class="copyright">FRagrance For You © 2021</p>
        </div>
    );
};

export default Footer;
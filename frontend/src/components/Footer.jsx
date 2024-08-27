import React from 'react'
import {Link} from 'react-router-dom';
import { FaInstagram, FaTwitter , FaTiktok } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
const Footer = () => {
  return (
       <footer class="flex flex-col bg-neutral-300 space-y-10 justify-center py-7">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a class="hover:text-gray-900" href="#">Home</a>
        <a class="hover:text-gray-900" href="#">Turf</a>
        <a class="hover:text-gray-900" href="#">Log In</a>
        <a class="hover:text-gray-900" href="#">Sign Up</a>
        <a class="hover:text-gray-900" href="#"> Host A Facility</a>
    </nav>

    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-gray-700 font-medium">&copy; 2024. All rights reservered.</p>
</footer>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className='flex items-center gap-2 mb-4'>
              <svg id="logo-64" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 hover:rotate-180">
                <path className="ccustom" d="M27.5308 40.1395C27.5757 35.5502 26.4122 31.8182 24.9322 31.8037C23.4521 31.7893 22.2159 35.4979 22.1711 40.0871C22.1262 44.6764 23.2897 48.4085 24.7697 48.4229C26.2498 48.4374 27.486 44.7288 27.5308 40.1395Z" fill="white"></path>
                <path className="ccustom" d="M18.947 39.0972C21.4661 35.2608 22.5052 31.4922 21.268 30.6798C20.0307 29.8674 16.9856 32.3188 14.4666 36.1552C11.9475 39.9916 10.9084 43.7601 12.1456 44.5726C13.3829 45.385 16.4279 42.9336 18.947 39.0972Z" fill="white"></path>
                <path className="ccustom" d="M12.2792 33.593C16.4726 31.7278 19.3843 29.1194 18.7827 27.767C18.1812 26.4146 14.2942 26.8304 10.1008 28.6957C5.90744 30.5609 2.99571 33.1693 3.59726 34.5217C4.1988 35.8741 8.08584 35.4583 12.2792 33.593Z" fill="white"></path>
                <path className="ccustom" d="M18.2794 23.9745C18.5046 22.5116 15.0099 20.7597 10.4739 20.0615C5.93778 19.3633 2.07804 19.9833 1.85288 21.4462C1.62772 22.9091 5.1224 24.6609 9.65848 25.3591C14.1945 26.0573 18.0543 25.4373 18.2794 23.9745Z" fill="white"></path>
                <path className="ccustom" d="M19.908 20.4895C20.8882 19.3805 18.895 16.0176 15.4561 12.9783C12.0172 9.93902 8.43482 8.37426 7.45464 9.48332C6.47446 10.5924 8.46766 13.9553 11.9066 16.9946C15.3455 20.0339 18.9279 21.5986 19.908 20.4895Z" fill="white"></path>
                <path className="ccustom" d="M23.1514 18.4528C24.5756 18.0498 24.7171 14.1431 23.4675 9.72704C22.2179 5.31095 20.0503 2.05771 18.6261 2.46072C17.2019 2.86373 17.0604 6.77037 18.31 11.1865C19.5596 15.6025 21.7272 18.8558 23.1514 18.4528Z" fill="white"></path>
                <path className="ccustom" d="M31.9584 11.3239C33.2949 6.9333 33.2305 3.02462 31.8145 2.59361C30.3985 2.16259 28.1672 5.37245 26.8307 9.76304C25.4943 14.1536 25.5587 18.0623 26.9747 18.4933C28.3907 18.9243 30.622 15.7145 31.9584 11.3239Z" fill="white"></path>
                <path className="ccustom" d="M38.2514 17.2565C41.7491 14.285 43.8077 10.9617 42.8493 9.83373C41.891 8.70573 38.2787 10.2002 34.7811 13.1716C31.2834 16.1431 29.2249 19.4664 30.1832 20.5944C31.1415 21.7224 34.7538 20.228 38.2514 17.2565Z" fill="white"></path>
                <path className="ccustom" d="M40.3322 25.6519C44.8812 25.0433 48.4097 23.3607 48.2134 21.8936C48.0172 20.4266 44.1704 19.7307 39.6214 20.3392C35.0725 20.9478 31.5439 22.6304 31.7402 24.0975C31.9365 25.5645 35.7832 26.2605 40.3322 25.6519Z" fill="white"></path>
                <path className="ccustom" d="M46.2004 34.941C46.8285 33.6008 43.9688 30.9355 39.813 28.9879C35.6573 27.0403 31.7792 26.548 31.1511 27.8882C30.523 29.2285 33.3827 31.8938 37.5385 33.8414C41.6942 35.7889 45.5723 36.2813 46.2004 34.941Z" fill="white"></path>
                <path className="ccustom" d="M37.4589 44.8299C38.7119 44.0421 37.7473 40.2537 35.3044 36.3684C32.8615 32.4831 29.8653 29.9722 28.6123 30.76C27.3593 31.5478 28.3239 35.3362 30.7668 39.2215C33.2097 43.1068 36.2059 45.6178 37.4589 44.8299Z" fill="white"></path>
              </svg>
              <h2 className="text-2xl font-bold">CommonUnion</h2>
            </div>
            <p className="text-gray-300 mb-4">Join us to be part of a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before!</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CommonUnion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
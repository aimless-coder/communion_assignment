import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Button } from '@/components/ui/button'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting people through memorable events and shared experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We're dedicated to bringing people together through diverse and engaging events. 
              Our platform makes it easy to discover, create, and participate in events that 
              matter to you - from tech conferences to music festivals, from food fairs to 
              sporting events.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Easy event creation and management</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Diverse range of event categories</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Seamless calendar integration</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-black mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Location-based event discovery</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
              <p className="text-gray-600">Building connections through shared interests and experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Trusted platform for organizing and managing events</p>
            </div>
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple and intuitive event management tools</p>
            </div>
          </div>
        </div>

        <div className="grid place-items-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Host Your Event?</h2>
          <Button 
            onClick={() => navigate('/events')}
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
          >
            Explore Events <FaArrowRightLong />
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
import React from 'react'
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from 'react-icons/fa'

const EventCard = ({ event }) => {
  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={event.image} 
          alt={event.eventTitle}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center mb-2">
          <FaTag className="text-amber-500 mr-2" />
          <span className="text-sm font-medium text-amber-500">{event.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {event.eventTitle}
        </h3>

        {/* Location & Date */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaCalendarAlt className="mr-2" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Button */}
        <button className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300">
          Add to Calender
        </button>
      </div>
    </div>
  )
}

export default EventCard
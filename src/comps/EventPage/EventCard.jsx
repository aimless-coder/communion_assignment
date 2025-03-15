import React from 'react'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'

const EventCard = ({ event }) => {
  const formattedDate = format(new Date(event.date), 'MMMM dd, yyyy')

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.eventTitle}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-0 right-0 m-4">
          <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">
            {event.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.eventTitle}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{event.seats === 'free' ? 'Free Entry' : `${event.seats} seats`}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-600 line-clamp-2">{event.description}</p>

        <Button className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-duration-300">
          Add to Calender
        </Button>
      </div>
    </div>
  )
}

export default EventCard
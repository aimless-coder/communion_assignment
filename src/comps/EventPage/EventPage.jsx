import React, { useState, useEffect } from 'react'
import EventCard from './EventCard'
import eventsData from '../../../events.json'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CreateEvent from '../CreateEvent/CreateEvent'

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredEvents, setFilteredEvents] = useState(eventsData)

  const categories = ['All', ...new Set(eventsData.map(event => event.category))]

  // Filter events when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredEvents(eventsData)
    } else {
      setFilteredEvents(eventsData.filter(event => event.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <>
      <Header />
      <div className='w-[100%]'>
      <CreateEvent/>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover and join our upcoming events. From tech talks to cultural gatherings, find the perfect event for you.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                  ${selectedCategory === category 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            <p>No events found in this category.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default EventPage
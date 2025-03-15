import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io"
import { addEvent, getAllEvents } from '../../events'

const CreateEvent = ({ onEventAdded }) => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState({
    eventTitle: '',
    location: '',
    date: '',
    category: '',
    seats: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Add the new event
    const newEvent = addEvent(formData)
    console.log('New event added:', newEvent)
    
    // Reset form
    setFormData({
      eventTitle: '',
      location: '',
      date: '',
      category: '',
      seats: '',
      description: '',
      image: ''
    })
    setIsFormVisible(false)

    // Notify parent component to update events list
    if (onEventAdded) {
      const updatedEvents = getAllEvents()
      onEventAdded(updatedEvents)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full md:w-64 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors mb-4 flex items-center justify-center gap-2"
      >
        <IoMdAdd 
          className={`text-xl transition-transform duration-300 ${isFormVisible ? 'rotate-45' : 'rotate-0'}`}
        />
        <span>{isFormVisible ? 'Close' : 'Create Event'}</span>
      </button>

      {isFormVisible && (
        <div className="mt-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event Title - Full width on all screens */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Event Title</label>
              <input
                type="text"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Location - Half width on medium screens */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Date - Half width on medium screens */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Category - Half width on medium screens */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              >
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Music">Music</option>
                <option value="Food">Food</option>
                <option value="Sports">Sports</option>
                <option value="Art">Art</option>
              </select>
            </div>

            {/* Seats Selection - Half width on medium screens */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Number of Seats</label>
              <select
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              >
                <option value="">Select seats capacity</option>
                <option value="free">Free Entry</option>
                <option value="100">100 seats</option>
                <option value="150">150 seats</option>
                <option value="200">200 seats</option>
                <option value="250">250 seats</option>
                <option value="500">500 seats</option>
                <option value="500+">Above 500 seats</option>
              </select>
            </div>

            {/* Description - Full width on all screens */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all h-32"
                required
              ></textarea>
            </div>

            {/* Submit Button - Full width on all screens */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out font-semibold"
              >
                Submit Event
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default CreateEvent
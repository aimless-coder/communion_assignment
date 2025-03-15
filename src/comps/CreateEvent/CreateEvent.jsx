import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io"
import { addEvent, getAllEvents } from '../../events'
import { Button } from '@/components/ui/button'
import GooglePlacesAutocomplete from "react-google-places-autocomplete"

const CreateEvent = ({ onEventAdded }) => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)
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

  const handleLocationChange = (value) => {
    setSelectedLocation(value)
    setFormData(prevState => ({
      ...prevState,
      location: value.label
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
    setSelectedLocation(null)
    setIsFormVisible(false)

    // Notify parent component to update events list
    if (onEventAdded) {
      const updatedEvents = getAllEvents()
      onEventAdded(updatedEvents)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className='w-full flex justify-between items-center py-3 border-b-1 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1)]'>
        <h2 className='text-3xl md:text-4xl font-semibold '>Host Your Event</h2>
        <Button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="w-32 md:w-64 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
        >
          <IoMdAdd 
            className={`text-xl transition-transform duration-300 ${isFormVisible ? 'rotate-45' : 'rotate-0'}`}
          />
          <span>{isFormVisible ? 'Close' : 'Create Event'}</span>
        </Button>
      </div>

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
              <div className="w-full">
                <GooglePlacesAutocomplete
                  apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                  selectProps={{
                    value: selectedLocation,
                    onChange: handleLocationChange,
                    placeholder: "Enter location",
                    styles: {
                      control: (provided, state) => ({
                        ...provided,
                        padding: '4px',
                        borderRadius: '0.375rem',
                        boxShadow: state.isFocused ? '0 0 0 1px black' : 'none',
                        borderColor: state.isFocused ? 'transparent' : '#D1D5DB',
                        '&:hover': {
                          borderColor: '#000000'
                        }
                      }),
                      input: (provided) => ({
                        ...provided,
                        padding: '4px'
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? '#f3f4f6' : 'white',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: '#f3f4f6'
                        }
                      })
                    }
                  }}
                />
              </div>
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all h-32 resize-none"
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
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io"

const CreateEvent = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formData, setFormData] = useState({
    eventTitle: '',
    location: '',
    date: '',
    category: '',
    image: null,
    description: ''
  })
  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = React.useRef(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      const file = files[0]
      setFormData(prevState => ({
        ...prevState,
        [name]: file
      }))
      setImagePreview(file ? true : null)
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleRemoveImage = (e) => {
    e.stopPropagation()
    setFormData(prevState => ({
      ...prevState,
      image: null
    }))
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      eventTitle: '',
      location: '',
      date: '',
      category: '',
      image: null,
      description: ''
    })
    setImagePreview(null)
    setIsFormVisible(false)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full md:w-64 bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 transition-colors mb-4 flex items-center justify-center gap-2"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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

            {/* Image Upload - Half width on medium screens */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Event Image</label>
              <div 
                onClick={handleImageClick}
                className={`relative w-full p-3 border-2 border-dashed rounded-md cursor-pointer transition-all
                  ${imagePreview ? 'border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-amber-500 bg-gray-50 hover:bg-amber-50'}`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {imagePreview ? 'Image Uploaded' : 'Click to upload image'}
                    </span>
                  </div>
                  {imagePreview && (
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Description - Full width on all screens */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all h-32"
                required
              ></textarea>
            </div>

            {/* Submit Button - Full width on all screens */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 px-4 rounded-md hover:bg-amber-600 transition-all duration-300 ease-in-out font-semibold"
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
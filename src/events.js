export const events = {
  event_001: {
    id: "event_001",
    eventTitle: "Tech Innovation Summit 2025",
    location: "San Francisco, CA",
    date: "2025-06-15",
    description: "A gathering of top tech leaders to discuss the future of AI, blockchain, and emerging technologies.",
    category: "Technology",
    seats: "500",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
  },
  event_002: {
    id: "event_002",
    eventTitle: "Rock Fusion Music Fest",
    location: "Los Angeles, CA",
    date: "2025-07-22",
    description: "An electrifying night of rock and fusion music featuring top bands and artists.",
    category: "Music",
    seats: "1000",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop"
  },
  event_003: {
    id: "event_003",
    eventTitle: "International Food Carnival",
    location: "New York City, NY",
    date: "2025-09-10",
    description: "Explore a world of flavors at the annual food carnival, featuring cuisines from 30+ countries.",
    category: "Food",
    seats: "free",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop"
  }
}

export const getEventById = (id) => {
  return events[id] || null;
}

export const getAllEvents = () => {
  return Object.values(events);
}

export const addEvent = (eventData) => {
  const id = `event_${Object.keys(events).length + 1}`.padStart(7, '0');
  // Add a default image if none is provided
  const defaultImages = {
    Technology: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    Music: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop",
    Food: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
    Sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop",
    Art: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop"
  };

  events[id] = {
    id,
    ...eventData,
    image: defaultImages[eventData.category] || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop"
  };
  return events[id];
}; 
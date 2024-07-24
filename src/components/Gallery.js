// src/components/Gallery.js
import React, { useState } from 'react';

const photos = [
  { src: 'https://i.pinimg.com/originals/7b/06/60/7b0660aee4e1a7d6c634ff4cdb7b8e02.jpg', alt: 'Sports Day', caption: 'Students participating in various sports events.', type: 'photo' },
  { src: 'https://th.bing.com/th/id/OIP.0scBKq8c_1OMruanTiKWMgHaJQ?rs=1&pid=ImgDetMain', alt: 'Science Exhibition', caption: 'Students presenting their science projects.', type: 'photo' },
  { src: 'https://4.bp.blogspot.com/-W1XpVh003NU/UIItoeB_foI/AAAAAAAAHjo/N8UJi37JBuA/s1600/55.jpg', alt: 'Cultural Fest', caption: 'Students performing in the cultural fest.', type: 'photo' },
  { src: 'https://www.viewsonic.com/library/wp-content/uploads/2019/04/LB0041-1-c-1024x576.jpg', alt: 'Classroom', caption: 'A glimpse of our interactive classrooms.', type: 'photo' },
  { src: 'https://th.bing.com/th/id/OIP._OcpzIVHNVp12S6enLEYqAHaEZ?rs=1&pid=ImgDetMain', alt: 'Library', caption: 'Students reading and studying in the school library.', type: 'photo' },
];

const videos = [
  { src: 'https://www.youtube.com/watch?v=5u05qE-hziM', thumbnail: 'https://th.bing.com/th/id/OIP.2ngITcbiQTzM1nyxgYQcagAAAA?w=302&h=111&c=7&r=0&o=5&dpr=1.3&pid=1.7', caption: 'Virtual tour of Springdale Public School.', type: 'video' },
  { src: 'https://www.facebook.com/SPS.Ismailabad/videos/-reliving-the-magical-moments-of-fest-in-beats-annual-function-at-springdale-pub/671344665182731/', thumbnail: 'https://th.bing.com/th/id/OIP.VdKJfYJd_XZDu_qWjQs7PgHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7', caption: 'Highlights from the Annual Function 2023.', type: 'video' },
];

function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredItems = [...photos, ...videos].filter(item => filter === 'all' || item.type === filter);

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Gallery</h1>
      
      <div className="mb-8 text-center">
        <button onClick={() => setFilter('all')} className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">All</button>
        <button onClick={() => setFilter('photo')} className="mx-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Photos</button>
        <button onClick={() => setFilter('video')} className="mx-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Videos</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="relative group">
            {item.type === 'photo' ? (
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-3 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </div>
              </>
            ) : (
              <>
                <img
                  src={item.thumbnail}
                  alt={item.caption}
                  className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
                  onClick={() => window.open(item.src, '_blank')}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-3 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

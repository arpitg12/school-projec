// src/pages/GalleryPage.js
import React from 'react';
import Gallery from '../components/Gallery';

function GalleryPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Gallery</h1>
      <Gallery />
    </div>
  );
}

export default GalleryPage;

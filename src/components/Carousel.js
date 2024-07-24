import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./CustomCarousel.css";

function CustomCarousel() {
  return (
    <div className="carousel-container max-w-4xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        swipeable
      >
        <div className="relative">
          <img
            src="https://i.pinimg.com/originals/7b/06/60/7b0660aee4e1a7d6c634ff4cdb7b8e02.jpg"
            alt="Annual Sports Day"
            className="carousel-image"
          style={{objectFit:'fill'}}/>
          <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
        </div>
        <div className="relative">
          <img
            src="https://th.bing.com/th/id/OIP.X-Xt3KW4eJy-Oi3kQOZCiQHaE8?rs=1&pid=ImgDetMain"
            alt="Science Exhibition"
            className="carousel-image"
            style={{objectFit:'fill'}}
          />
          <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
        </div>
        <div className="relative">
          <img
            src="https://4.bp.blogspot.com/-W1XpVh003NU/UIItoeB_foI/AAAAAAAAHjo/N8UJi37JBuA/s1600/55.jpg"
            alt="Cultural Fest"
            className="carousel-image"
            style={{objectFit:'fill'}}
          />
          <p className="legend">Cultural Fest - Embracing Diversity and Creativity</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;

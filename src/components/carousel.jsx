// Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Mock data (replace with actual database integration)
const menuItems = [
  {
    title: 'Item 1',
    price: 10,
    subcategory: 'subcategory1',
    description: 'Description of Item 1.',
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
  },
  {
    title: 'Item 2',
    price: 15,
    subcategory: 'subcategory2',
    description: 'Description of Item 2.',
    image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/yummy-and-tasty-salami-pizza-diavola-close-up-free-photo.jpg?w=600&quality=80',
  },
  {
    title: 'Item 3',
    price: 12,
    subcategory: 'subcategory3',
    description: 'Description of Item 3.',
    image: 'https://media.istockphoto.com/id/835271096/photo/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-vegetables-delicious-tasty.webp?b=1&s=170667a&w=0&k=20&c=uweNCcZRaUjByzbqk7P9VwU9iN5Wy16KDJrnDP3uKX8=',
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {menuItems.map((item, index) => (
        <div key={index} className="relative h-80">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-xl">Special Offer</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 p-4 text-white">
            <h3 className="text-xl font-semibold">Details:</h3>
            <p>{item.description}</p>
            <p className="text-lg font-bold">${item.price}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;

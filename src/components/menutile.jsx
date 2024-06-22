// MenuTiles.js

import React from 'react';

const Menutiles = () => {
  // Mock data for menu items (replace with actual database integration)
  const menuItems = [
    {
      title: 'Margherita Pizza',
      price: 10,
      subcategory: 'pizza',
      description: 'Classic pizza topped with tomatoes, mozzarella, and basil.',
      image: '/margherita.jpg',
    },
    {
      title: 'Alfredo Pasta',
      price: 12,
      subcategory: 'pasta',
      description: 'Creamy pasta with Alfredo sauce, chicken, and Parmesan cheese.',
      image: '/alfredo.jpg',
    },
    {
      title: 'Cheeseburger',
      price: 8,
      subcategory: 'burgers',
      description: 'Juicy beef patty topped with cheddar cheese and fresh vegetables.',
      image: '/burger.jpg',
    },
    {
      title: 'Greek Salad',
      price: 6,
      subcategory: 'salads',
      description: 'Fresh salad with mixed greens, feta cheese, olives, and Greek dressing.',
      image: '/salad.jpg',
    },
    {
      title: 'Garlic Bread',
      price: 4,
      subcategory: 'appetizers',
      description: 'Toasted bread with garlic butter and herbs.',
      image: '/garlicbread.jpg',
    },
    {
      title: 'Chocolate Cake',
      price: 5,
      subcategory: 'desserts',
      description: 'Rich chocolate cake with layers of ganache and chocolate frosting.',
      image: '/cake.jpg',
    },
    {
      title: 'Lemonade',
      price: 3,
      subcategory: 'drinks',
      description: 'Refreshing lemonade made with freshly squeezed lemons.',
      image: '/lemonade.jpg',
    },
    // Add more menu items as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
          >
            <div className="bg-gray-200 h-40 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="flex items-center justify-center h-full">
                <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">${item.price}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menutiles;

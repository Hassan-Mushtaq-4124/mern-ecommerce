const products = [

  {
    name: "Gaming Mouse",
    price: 2500,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description: "RGB gaming mouse with high precision sensor",
  },

  {
    name: "Mechanical Keyboard",
    price: 4500,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    description: "Mechanical keyboard with RGB backlight",
  },

  {
    name: "Wireless Headphones",
    price: 5500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Noise cancelling wireless headphones",
  },

  {
    name: "Gaming Laptop",
    price: 185000,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "High-performance gaming laptop",
  },

  {
    name: "Smart Watch",
    price: 8500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Fitness tracking smartwatch",
  },

  {
    name: "Bluetooth Speaker",
    price: 3200,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    description: "Portable wireless speaker",
  },

  {
    name: "iPhone 15",
    price: 280000,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Latest Apple smartphone",
  },

  {
    name: "Samsung Galaxy S24",
    price: 240000,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    description: "Flagship Samsung smartphone",
  },

  {
    name: "Gaming Chair",
    price: 22000,
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description: "Comfortable ergonomic gaming chair",
  },

  {
    name: "4K Monitor",
    price: 45000,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    description: "Ultra HD 4K display monitor",
  },

  {
    name: "USB Microphone",
    price: 6800,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    description: "Professional condenser microphone",
  },

  {
    name: "External SSD",
    price: 12000,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704",
    description: "Fast portable SSD drive",
  },

  {
    name: "Webcam HD",
    price: 3500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    description: "1080p HD webcam",
  },

  {
    name: "Wireless Earbuds",
    price: 4900,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
    description: "True wireless earbuds",
  },

  {
    name: "Power Bank",
    price: 2800,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126",
    description: "10000mAh fast charging power bank",
  },

  {
    name: "Graphic Tablet",
    price: 15500,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description: "Digital drawing graphic tablet",
  },

  {
    name: "Office Desk",
    price: 18000,
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description: "Minimalist office desk",
  },

  {
    name: "DSLR Camera",
    price: 95000,
    category: "Cameras",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Professional DSLR camera",
  },

  {
    name: "Tripod Stand",
    price: 4500,
    category: "Cameras",
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c",
    description: "Adjustable camera tripod",
  },

  {
    name: "LED Ring Light",
    price: 3200,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    description: "Professional ring light for streaming",
  },

  {
    name: "MacBook Pro",
    price: 350000,
    category: "Laptops",
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M3_Max/IMG_1008.JPG",
    description: "Apple MacBook Pro M3",
  },

  {
    name: "Dell XPS 15",
    price: 295000,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "Premium Dell ultrabook",
  },

  {
    name: "Gaming Console",
    price: 145000,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    description: "Next generation gaming console",
  },

  {
    name: "VR Headset",
    price: 85000,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac",
    description: "Immersive VR gaming headset",
  },

  {
    name: "Fitness Band",
    price: 3800,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
    description: "Smart fitness tracking band",
  },

  {
    name: "Portable Projector",
    price: 28000,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description: "Mini HD projector",
  },

  {
    name: "Gaming Desk",
    price: 26000,
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description: "RGB gaming desk setup",
  },

  {
    name: "Router WiFi 6",
    price: 7800,
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82",
    description: "High speed WiFi 6 router",
  },

  {
    name: "Smart TV 55 Inch",
    price: 125000,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    description: "4K UHD Smart Television",
  },

  {
    name: "Streaming Keyboard",
    price: 6200,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    description: "RGB keyboard for streamers",
  },
];

module.exports = products;
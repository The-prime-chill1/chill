// Mamana Cakes & Pastries - Exact Data from Screenshots & Live Site

export const BAKERY_INFO = {
  name: "Chill Cakes & Pastries",
  shortName: "Chill",
  tagline: "PREMIUM CAKES & SNACKS",
  headlineMain: "Beautiful Bakes &",
  headlineHighlight: "Delicious Bites",
  subheadline: "From celebrations to corporate orders, we deliver custom cakes, cupcakes, and event small chops on time, every time.",
  phone: "+44 7350 171974",
  whatsapp: "447350171974",
  email: "goodnessgodwin169@gmail.com",
  address: "Whitecross Garden, DE1 3PQ, Derby, United Kingdom",
  city: "Derby",
  postcode: "DE1 3PQ",
  hours: [
    { days: "Tuesday – Friday", time: "6:30 AM – 3:00 PM" },
    { days: "Saturday – Sunday", time: "7:30 AM – 4:00 PM" },
    { days: "Monday", time: "Closed (Bake Kitchen Prep)" }
  ]
};

// Daily Board / Featured Bakes & Small Chops (from Screenshot 2)
export const FEATURED_BOARD_ITEMS = [
  {
    id: "board-1",
    name: "Rosemary Focaccia",
    description: "Olive oil and sea salt flatbread.",
    statusBadge: "SOLD OUT",
    statusType: "sold-out",
    price: 4.50,
    priceNgn: 4500
  },
  {
    id: "board-2",
    name: "Seasonal Fruit Tart",
    description: "Vanilla bean custard topped with fresh berries.",
    statusBadge: "ONLY 3 LEFT!",
    statusType: "urgent",
    price: 5.50,
    priceNgn: 5500
  },
  {
    id: "board-3",
    name: "Almond Double-Bake Croissant",
    description: "Stuffed with rich almond frangipane and toasted almond flakes.",
    statusBadge: "FRESHLY BAKED",
    statusType: "fresh",
    price: 4.50,
    priceNgn: 4500
  },
  {
    id: "board-4",
    name: "Cinnamon Morning Bun",
    description: "Coated in cinnamon sugar with a soft, buttery center.",
    statusBadge: "FRESHLY BAKED",
    statusType: "fresh",
    price: 5.00,
    priceNgn: 5000
  },
  {
    id: "board-5",
    name: "Executive Small Chops Platter",
    description: "Crispy beef spring rolls, spicy samosas, and golden puff-puff bites.",
    statusBadge: "POPULAR",
    statusType: "fresh",
    price: 35.00,
    priceNgn: 35000
  }
];

// Express Order Menu Items (Screenshot 5 + Signature Cakes & Chops)
export const EXPRESS_MENU_ITEMS = [
  {
    id: "exp-1",
    name: "Artisan Espresso",
    category: "Beverages & Treats",
    price: 3.50,
    priceNgn: 3500,
    description: "Double shot of our house espresso blend.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-2",
    name: "Cinnamon Morning Bun",
    category: "Morning Bakes",
    price: 5.00,
    priceNgn: 5000,
    description: "Coated in cinnamon sugar with a soft, buttery center.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-3",
    name: "Sourdough Loaf",
    category: "Morning Bakes",
    price: 8.00,
    priceNgn: 8000,
    description: "Naturally leavened with a dark, crusty exterior.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-4",
    name: "Butter Croissant",
    category: "Morning Bakes",
    price: 4.50,
    priceNgn: 4500,
    description: "Classic French pastry, baked fresh this morning.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-5",
    name: "Signature Red Velvet Dream Cake",
    category: "Cakes",
    price: 45.00,
    priceNgn: 45000,
    description: "Moist cocoa red velvet sponge filled with whipped cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-6",
    name: "Belgian Chocolate Truffle Cake",
    category: "Cakes",
    price: 48.00,
    priceNgn: 48000,
    description: "Rich dark chocolate cake layered with 70% silk ganache and gold leaf accents.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-7",
    name: "Luxury Assorted Cupcake Box (12 pcs)",
    category: "Cupcakes",
    price: 26.00,
    priceNgn: 26000,
    description: "Four Red Velvet, four Belgian Chocolate Fudge, and four Vanilla Bean cupcakes.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-8",
    name: "Executive Small Chops Platter (15 Servings)",
    category: "Small Chops",
    price: 35.00,
    priceNgn: 35000,
    description: "Crispy spring rolls, spicy meat samosas, sweet golden puff-puff, and peppered chicken.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-9",
    name: "Crispy Samosa & Spring Roll Box (40 pcs)",
    category: "Small Chops",
    price: 28.00,
    priceNgn: 28000,
    description: "20 hand-rolled meat samosas & 20 extra-crispy vegetable spring rolls.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-10",
    name: "Sweet Golden Puff-Puff Bucket (80 pcs)",
    category: "Small Chops",
    price: 20.00,
    priceNgn: 20000,
    description: "Freshly fried, pillowy sweet golden puff-puff with aromatic nutmeg warmth.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "exp-11",
    name: "Flaky Traditional Meat Pies (Box of 8)",
    category: "Small Chops",
    price: 22.00,
    priceNgn: 22000,
    description: "Melt-in-mouth buttery shortcrust pastry filled with spiced minced beef and potatoes.",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=700&q=80"
  }
];

// Gallery / Our Past Work (from Screenshot 3 & 4)
export const PAST_WORK_ITEMS = [
  {
    id: "pw-1",
    title: "Artisanal Drip Candle Cake",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    description: "White chocolate drip finish with signature Mamana branding."
  },
  {
    id: "pw-2",
    title: "Cocomelon 3D Themed Cake",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80",
    description: "Vibrant layered ribbed buttercream cake with Cocomelon character toppers."
  },
  {
    id: "pw-3",
    title: "Paw Patrol Celebration Cake",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    description: "Two-tone blue and white textured cake with custom Paw Patrol topper set."
  },
  {
    id: "pw-4",
    title: "Child Birthday Spider-Man Cake Tier",
    category: "Cakes",
    tag: "CAKES",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
    description: "Custom sculpted Spider-Man themed celebration tier with red fondant."
  },
  {
    id: "pw-5",
    title: "Teal Ribbed Birthday Cake with Gold Spheres",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80",
    description: "Deep teal ribbed buttercream cake accented with mirror gold chocolate spheres."
  },
  {
    id: "pw-6",
    title: "Executive Event Small Chops Platter",
    category: "Small Chops",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    description: "Appetizer buffet with skewers, spring rolls, and bruschetta."
  },
  {
    id: "pw-7",
    title: "Fresh Baked Flaky Savory Meat Pie",
    category: "Small Chops",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80",
    description: "Deep golden shortcrust pie packed with spiced savory filling."
  },
  {
    id: "pw-8",
    title: "Gourmet Savory Wraps & Rolls Tray",
    category: "Small Chops",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description: "Finger food rolls garnished with fresh garden greens."
  },
  {
    id: "pw-9",
    title: "Red Velvet Swirl Cupcakes with Berry Crumb",
    category: "Cupcakes",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80",
    description: "Cream cheese frosted cupcakes in festive red wrappers."
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Dr. Kemi & James",
    role: "Bride & Groom, Derby",
    comment: "Mamana created our wedding cake and catered small chops for our guests. The Red Velvet was beyond moist, and guests could not stop talking about the samosas and puff-puff. Arrived right on time!",
    rating: 5,
    avatar: "KJ"
  },
  {
    id: "test-2",
    name: "Funke Ogundipe",
    role: "Corporate Event Host, East Midlands",
    comment: "We regularly order executive small chops boxes and treats for our meetings. Immaculate hygiene, authentic taste, and warm professional service every single time.",
    rating: 5,
    avatar: "FO"
  },
  {
    id: "test-3",
    name: "Sarah M.",
    role: "Birthday Celebrant, DE1 Whitecross Garden",
    comment: "I sent an inspiration photo just 4 days before my birthday dinner. What Mamana delivered looked even more exquisite than the picture, and tasted divine. Highly recommend!",
    rating: 5,
    avatar: "SM"
  }
];

export const FAQS = [
  {
    question: "How far in advance should I order custom cakes?",
    answer: "For celebration cakes (1-tier), we recommend 48-72 hours notice. For multi-tier wedding cakes and large event small chops catering, 1 to 2 weeks notice is preferred to secure your date."
  },
  {
    question: "Do you deliver to Whitecross Garden and across Derby?",
    answer: "Yes! We offer local delivery across Derby, Nottingham, and the wider East Midlands, as well as studio pickup at Whitecross Garden (DE1 3PQ)."
  },
  {
    question: "Can I customize the cake flavors and dietary requirements?",
    answer: "Absolutely! You can customize sponge flavors, fillings, frostings, and design themes. We also cater to specific dietary preferences upon request."
  },
  {
    question: "How are the event small chops packaged?",
    answer: "Our small chops come in insulated thermal packaging to ensure they arrive fresh, warm, and delightfully crispy for your guests."
  }
];

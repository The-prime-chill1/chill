import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DailyBoard from './components/DailyBoard';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import CustomQuote from './components/CustomQuote';
import CrumbClub from './components/CrumbClub';
import LocationHours from './components/LocationHours';
import CartModal from './components/CartModal';
import CheckoutScreen from './components/CheckoutScreen';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('mamana_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);
  const [currency, setCurrency] = useState('NGN'); // default matching screenshots: ₦

  useEffect(() => {
    try {
      localStorage.setItem('mamana_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'NGN' ? 'GBP' : 'NGN'));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // If user proceeded to final checkout screen
  if (checkoutData) {
    return (
      <CheckoutScreen
        orderData={checkoutData}
        currency={currency}
        onReturnToSite={() => setCheckoutData(null)}
        onClearCart={handleClearCart}
      />
    );
  }

  return (
    <div className="app-root">
      {/* Site Header matching Screenshot */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
      />

      <main>
        {/* Hero Section matching Screenshot 1 */}
        <Hero />

        {/* Featured Bakes & Small Chops matching Screenshot 2 */}
        <DailyBoard />

        {/* Our Past Work Gallery matching Screenshot 3 & 4 */}
        <Gallery />

        {/* Express Order Menu matching Screenshot 5 */}
        <Menu
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
          currency={currency}
        />

        {/* Request a Custom Quote matching Screenshot 6 */}
        <CustomQuote />

        {/* Join the Crumb Club matching Screenshot 7 */}
        <CrumbClub />

        {/* Find Us matching Screenshot 8 */}
        <LocationHours />
      </main>

      {/* Footer matching Screenshot 9 */}
      <Footer />

      {/* Basket Modal matching Screenshots 1 & 2 */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        currency={currency}
        onProceedToPayment={(data) => {
          setIsCartOpen(false);
          setCheckoutData(data);
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

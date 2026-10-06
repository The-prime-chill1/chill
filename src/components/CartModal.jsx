import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function CartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  currency,
  onProceedToPayment
}) {
  const [step, setStep] = useState('basket'); // 'basket' | 'details'
  const [customer, setCustomer] = useState({
    firstName: '',
    email: '',
    phoneNumber: ''
  });

  if (!isOpen) return null;

  const symbol = currency === 'NGN' ? '₦' : '£';

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatAmount = (num) => `${symbol}${num.toFixed(2)}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlacePickupOrder = (e) => {
    e.preventDefault();
    onProceedToPayment({
      customer,
      cartItems,
      total: subtotal
    });
  };

  return (
    <div className="cart-overlay open" onClick={onClose}>
      <div
        className="cart-modal open"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '440px', padding: '1.5rem', maxHeight: '90vh' }}
      >
        {/* Header matching Screenshot 1 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem'
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#111111'
            }}
          >
            Your Basket
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              color: '#4B5563',
              padding: '0.25rem'
            }}
            aria-label="Close Basket"
          >
            ✕
          </button>
        </div>

        {/* Empty state */}
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#6B7280' }}>
            <p style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Your basket is currently empty.</p>
            <button
              className="btn-red-pill"
              onClick={onClose}
              style={{ padding: '0.55rem 1.5rem' }}
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <>
            {/* Items List matching Screenshot 1 */}
            <div
              style={{
                maxHeight: '38vh',
                overflowY: 'auto',
                paddingRight: '0.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                marginBottom: '1.25rem'
              }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '10px',
                    padding: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  {/* Left: Thumbnail Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80';
                    }}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />

                  {/* Center: Title, price each, quantity controls */}
                  <div style={{ flexGrow: 1 }}>
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#111111',
                        marginBottom: '0.15rem'
                      }}
                    >
                      {item.name}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.45rem' }}>
                      {formatAmount(item.price)} each
                    </p>

                    {/* Stepper control matching Screenshot */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        border: '1px solid #D1D5DB',
                        borderRadius: '6px',
                        padding: '0.1rem 0.4rem',
                        gap: '0.6rem',
                        background: '#FFFFFF'
                      }}
                    >
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#4B5563',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          padding: '0 0.2rem'
                        }}
                      >
                        —
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: '14px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#4B5563',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          padding: '0 0.2rem'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Right: Item Total & Remove in Red */}
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#111111' }}>
                      {formatAmount(item.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#EF4444',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.78rem',
                        fontWeight: 600
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Row matching Screenshot 1 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.85rem',
                borderTop: '1px solid #E5E7EB',
                marginBottom: '1rem'
              }}
            >
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111111' }}>
                Total
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111111' }}>
                {formatAmount(subtotal)}
              </span>
            </div>

            {/* Step 1: Proceed to Checkout Button */}
            {step === 'basket' && (
              <button
                onClick={() => setStep('details')}
                style={{
                  width: '100%',
                  background: '#000000',
                  color: '#FFFFFF',
                  padding: '0.85rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Proceed to Checkout
              </button>
            )}

            {/* Step 2: Expanded inputs matching Screenshot 2 */}
            {step === 'details' && (
              <form onSubmit={handlePlacePickupOrder} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input
                  type="text"
                  name="firstName"
                  value={customer.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '0.9rem'
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '0.9rem'
                  }}
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={customer.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '0.9rem'
                  }}
                />

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#D93829',
                    color: '#FFFFFF',
                    padding: '0.85rem',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '0.25rem'
                  }}
                >
                  Place Pickup Order
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

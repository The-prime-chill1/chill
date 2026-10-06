import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function CheckoutScreen({ orderData, onReturnToSite, currency, onClearCart }) {
  const { customer, cartItems, total } = orderData;
  const symbol = currency === 'NGN' ? '₦' : '£';

  const formatAmount = (num) => `${symbol}${num.toFixed(2)}`;

  const handlePlaceFinalOrder = () => {
    let itemsText = cartItems
      .map((item, idx) => `${idx + 1}. ${item.name} (x${item.quantity}) - ${formatAmount(item.price * item.quantity)}`)
      .join('\n');

    const message = `*NEW CONFIRMED ORDER - MAMANA CAKES & PASTRIES*
• Customer Name: ${customer.firstName || 'Customer'}
• Email: ${customer.email || 'N/A'}
• Phone Number: ${customer.phoneNumber || 'N/A'}

*Order Items:*
${itemsText}

*Subtotal:* ${formatAmount(total)}
*Total Amount:* ${formatAmount(total)}
*Pickup Address:* Whitecross Garden, DE1 3PQ, Derby, UK

Please confirm order receipt and send collection details. Thank you!`;

    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClearCart();
    alert('Thank you! Your order has been placed. We have redirected your order details to WhatsApp.');
    onReturnToSite();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '880px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem'
        }}
      >
        {/* Left Column matching Screenshot 3 */}
        <div>
          <button
            onClick={onReturnToSite}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#4B5563',
              fontSize: '0.88rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginBottom: '2rem'
            }}
          >
            &lt; Return to site
          </button>

          {/* Logo badge matching Screenshot */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                background: '#000000',
                color: '#FFFFFF',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.1rem'
              }}
            >
              C
            </div>
            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111111' }}>
              Chill Cakesnpastries
            </span>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#6B7280', marginBottom: '0.25rem' }}>
            Total
          </p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111111', marginBottom: '2rem' }}>
            {formatAmount(total)}
          </h1>

          {/* Itemized list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.9rem',
                  color: '#374151'
                }}
              >
                <span>{item.name} {item.quantity > 1 ? `(x${item.quantity})` : ''}</span>
                <span style={{ fontWeight: 600 }}>{formatAmount(item.price * item.quantity)}</span>
              </div>
            ))}

            <div
              style={{
                borderTop: '1px solid #E5E7EB',
                paddingTop: '0.85rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.88rem',
                color: '#6B7280'
              }}
            >
              <span>Subtotal</span>
              <span>{formatAmount(total)}</span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#111111'
              }}
            >
              <span>Total</span>
              <span>{formatAmount(total)}</span>
            </div>
          </div>
        </div>

        {/* Right Column matching Screenshot 3 */}
        <div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111111', marginBottom: '1.25rem' }}>
            Payment method
          </h3>

          <div
            style={{
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
              background: '#FFFFFF'
            }}
          >
            <input
              type="radio"
              checked
              readOnly
              style={{ accentColor: '#3B82F6', width: '16px', height: '16px' }}
            />
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111111' }}>
              Phone (WhatsApp & Direct Checkout)
            </span>
          </div>

          <button
            onClick={handlePlaceFinalOrder}
            style={{
              width: '100%',
              background: '#939BF4',
              color: '#FFFFFF',
              padding: '0.85rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              marginBottom: '1rem',
              transition: 'background-color 150ms ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#7C86EB')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#939BF4')}
          >
            Place Order
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#9CA3AF' }}>
            Secure checkout
          </p>
        </div>
      </div>
    </div>
  );
}

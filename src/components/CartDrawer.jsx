import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle, CreditCard, Check } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  currency
}) {
  const [deliveryType, setDeliveryType] = useState('pickup'); // 'pickup' | 'delivery'
  const [orderNotes, setOrderNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(false);

  // Delivery costs
  const deliveryFeeGBP = deliveryType === 'delivery' ? 5.00 : 0;
  const deliveryFeeNGN = deliveryType === 'delivery' ? 5000 : 0;

  // Totals
  const subtotalGBP = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const subtotalNGN = cartItems.reduce((sum, item) => sum + item.priceNgn * item.quantity, 0);

  const totalGBP = subtotalGBP + deliveryFeeGBP;
  const totalNGN = subtotalNGN + deliveryFeeNGN;

  const formatPrice = (gbp, ngn) => {
    return currency === 'GBP' ? `£${gbp.toFixed(2)}` : `₦${ngn.toLocaleString()}`;
  };

  // WhatsApp Checkout generator
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsList = cartItems
      .map(
        (i, idx) =>
          `${idx + 1}. *${i.name}* (x${i.quantity}) - ${formatPrice(i.price * i.quantity, i.priceNgn * i.quantity)}`
      )
      .join('\n');

    const message = `*NEW BAKERY ORDER - ${BAKERY_INFO.name.toUpperCase()}*

*Customer Name:* ${customerName.trim() || 'Valued Customer'}
*Collection / Delivery:* ${deliveryType === 'delivery' ? 'Local Delivery' : 'Studio Pickup at Whitecross Garden (DE1 3PQ)'}

*Order Items:*
${itemsList}

*Subtotal:* ${formatPrice(subtotalGBP, subtotalNGN)}
*Delivery:* ${deliveryType === 'delivery' ? formatPrice(deliveryFeeGBP, deliveryFeeNGN) : 'Free Pickup'}
*Total Amount:* ${formatPrice(totalGBP, totalNGN)}

*Special Notes / Inscriptions:*
${orderNotes.trim() ? orderNotes : 'None'}

Please confirm my order and send payment details. Thank you!`;

    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h3>Your Basket ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</h3>
          <button 
            className="close-drawer-btn" 
            onClick={onClose}
            aria-label="Close Basket"
          >
            <X size={22} />
          </button>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <ShoppingBag size={56} className="empty-cart-icon" />
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                Your basket is empty
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Treat yourself to freshly baked cakes, artisanal pastries, or event small chops.
              </p>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => {
                  onClose();
                  window.location.hash = '#pickup';
                }}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <span className="cart-item-price">
                      {formatPrice(item.price * item.quantity, item.priceNgn * item.quantity)}
                    </span>
                    <div className="cart-qty-ctrl">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              {/* Delivery Toggle */}
              <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                <label className="form-label">Fulfilment Method</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.35rem' }}>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    style={{
                      padding: '0.6rem',
                      border: `1px solid ${deliveryType === 'pickup' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      borderRadius: 'var(--radius-sm)',
                      background: deliveryType === 'pickup' ? 'var(--color-primary-light)' : '#FFFFFF',
                      color: deliveryType === 'pickup' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    Studio Pickup (Free)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    style={{
                      padding: '0.6rem',
                      border: `1px solid ${deliveryType === 'delivery' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      borderRadius: 'var(--radius-sm)',
                      background: deliveryType === 'delivery' ? 'var(--color-primary-light)' : '#FFFFFF',
                      color: deliveryType === 'delivery' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    Local Delivery (+{currency === 'GBP' ? '£5.00' : '₦5,000'})
                  </button>
                </div>
              </div>

              {/* Customer Name */}
              <div style={{ marginBottom: '1rem' }}>
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Goodness Godwin"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="form-control"
                  style={{ marginTop: '0.35rem' }}
                />
              </div>

              {/* Special Instructions */}
              <div style={{ marginBottom: '1rem' }}>
                <label className="form-label">Cake Inscription / Special Notes</label>
                <textarea
                  rows="2"
                  placeholder="e.g. 'Happy 25th Birthday!', or dietary instructions"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  className="form-control"
                  style={{ marginTop: '0.35rem' }}
                />
              </div>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotalGBP, subtotalNGN)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery Fee</span>
              <span>
                {deliveryType === 'delivery' 
                  ? formatPrice(deliveryFeeGBP, deliveryFeeNGN) 
                  : 'Free Pickup'}
              </span>
            </div>
            <div className="cart-total-row">
              <span>Total Amount</span>
              <span>{formatPrice(totalGBP, totalNGN)}</span>
            </div>

            <div className="cart-actions">
              <button 
                className="btn btn-whatsapp" 
                onClick={handleWhatsAppCheckout}
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} />
                <span>Checkout via WhatsApp</span>
              </button>
              
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => setShowTransferModal(true)}
                style={{ width: '100%' }}
              >
                <CreditCard size={16} /> Direct Bank Transfer Details
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bank Transfer Modal */}
      {showTransferModal && (
        <div className="lightbox-modal open" onClick={() => setShowTransferModal(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-secondary)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              Direct Bank Transfer
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              You may also complete payment via bank transfer and send your receipt directly to our WhatsApp or email.
            </p>

            <div style={{ background: 'var(--color-bg-warm)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', fontSize: '0.88rem' }}>
              <p><strong>Account Name:</strong> Mamana Cakes & Pastries</p>
              <p style={{ marginTop: '0.25rem' }}><strong>UK Bank / Sort Code:</strong> Available upon WhatsApp booking</p>
              <p style={{ marginTop: '0.25rem' }}><strong>Total Payable:</strong> {formatPrice(totalGBP, totalNGN)}</p>
              <p style={{ marginTop: '0.25rem' }}><strong>Reference:</strong> Your Name</p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                className="btn btn-whatsapp btn-sm"
                onClick={() => {
                  setShowTransferModal(false);
                  handleWhatsAppCheckout();
                }}
                style={{ flex: 1 }}
              >
                <MessageCircle size={16} /> Send to WhatsApp
              </button>
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => setShowTransferModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

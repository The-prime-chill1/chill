import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import ArchLogo from './ArchLogo';

export default function Header({ cartCount, onOpenCart, currency, onToggleCurrency }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <a href="#top">
          <ArchLogo />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="main-nav">
          <a href="#daily-board" className="main-nav-link">Featured Bakes</a>
          <a href="#gallery" className="main-nav-link">Gallery</a>
          <a href="#pickup" className="main-nav-link">Order Menu</a>
          <a href="#quote" className="main-nav-link">Custom Quote</a>
          <a href="#location" className="main-nav-link">Location</a>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          {/* Currency Toggle */}
          <button
            onClick={onToggleCurrency}
            style={{
              background: '#F3F4F6',
              border: '1px solid #E5E7EB',
              borderRadius: '9999px',
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              color: '#374151'
            }}
            title="Switch currency between GBP (£) and NGN (₦)"
          >
            {currency === 'NGN' ? 'NGN (₦)' : 'GBP (£)'}
          </button>

          {/* Basket Shopping Cart Button matching Screenshot */}
          <button
            className="basket-icon-btn"
            onClick={onOpenCart}
            aria-label="View Basket"
            id="cart-trigger-btn"
          >
            {/* Custom SVG Basket icon matching screenshot */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 11-1 9" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c1 0 1.8-.7 2-1.6l1.6-7.4" />
              <path d="m4.5 15.5 15-4.5" />
              <path d="m5 11 4-7" />
              <path d="m9 11 1 9" />
            </svg>
            {cartCount > 0 && (
              <span className="basket-badge">{cartCount}</span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid #E5E7EB',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <a
            href="#daily-board"
            className="main-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Featured Bakes
          </a>
          <a
            href="#gallery"
            className="main-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#pickup"
            className="main-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Order Menu
          </a>
          <a
            href="#quote"
            className="main-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Custom Quote
          </a>
          <a
            href="#location"
            className="main-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Location
          </a>
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '0.75rem' }}>
            <button
              className="btn-red-pill"
              onClick={() => {
                setMobileOpen(false);
                onOpenCart();
              }}
              style={{ flex: 1, textAlign: 'center' }}
            >
              View Basket ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

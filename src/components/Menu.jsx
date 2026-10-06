import React from 'react';
import { EXPRESS_MENU_ITEMS } from '../data/bakeryData';

export default function Menu({ onAddToCart, onOpenCart, currency }) {
  const formatPrice = (item) => {
    const symbol = currency === 'NGN' ? '₦' : '£';
    return `${symbol}${item.price.toFixed(2)}`;
  };

  return (
    <section className="order-menu-section" id="pickup">
      <div className="container">
        {/* Header Row matching Screenshot 5 */}
        <div className="order-menu-header-row">
          <div>
            <h2 className="section-heading">Express Order Menu</h2>
            <p className="section-subheading">
              Order our signature cupcakes, cakes, and small chops directly online.
            </p>
          </div>
          <div>
            <button className="btn-view-basket" onClick={onOpenCart}>
              <svg
                width="16"
                height="16"
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
              <span>View Basket</span>
            </button>
          </div>
        </div>

        {/* 4-Column Product Cards Grid */}
        <div className="express-menu-grid">
          {EXPRESS_MENU_ITEMS.map((item) => (
            <div key={item.id} className="express-card">
              <img
                src={item.image}
                alt={item.name}
                className="express-card-img"
                loading="lazy"
              />
              <div className="express-card-body">
                <h3 className="express-card-title">{item.name}</h3>
                <p className="express-card-desc">{item.description}</p>
                <div className="express-card-footer">
                  <span className="express-price">{formatPrice(item)}</span>
                  <button
                    className="btn-add-circle"
                    onClick={() => onAddToCart(item)}
                    aria-label={`Add ${item.name} to basket`}
                    title="Add to basket"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

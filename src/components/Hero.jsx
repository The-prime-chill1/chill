import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-inner">
        <span className="hero-tag">PREMIUM CAKES & SNACKS</span>
        
        <h1 className="hero-title">
          Beautiful Bakes & <span className="hero-title-highlight">Delicious Bites</span>
        </h1>

        <p className="hero-desc">
          From celebrations to corporate orders, we deliver custom cakes, cupcakes, and event small chops on time, every time.
        </p>

        <div className="hero-buttons">
          <a href="#pickup" className="btn-red-pill">
            View Order Menu
          </a>
          <a href="#location" className="btn-outline-pill">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

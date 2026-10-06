import React, { useState } from 'react';
import { PAST_WORK_ITEMS } from '../data/bakeryData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Cakes', 'Cupcakes', 'Small Chops'];

  const filteredItems = activeFilter === 'All'
    ? PAST_WORK_ITEMS
    : PAST_WORK_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="past-work-section" id="gallery">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-heading">Our Past Work</h2>
          <p className="section-subheading">
            Browse through our collection of premium custom cakes and event small chops.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`gallery-filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 3-Column Image Cards Grid */}
        <div className="past-work-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="past-work-card">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="past-work-overlay">
                <span className="past-work-tag">{item.category}</span>
                <h3 className="past-work-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

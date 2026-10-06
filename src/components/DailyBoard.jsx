import React from 'react';
import { FEATURED_BOARD_ITEMS } from '../data/bakeryData';

export default function DailyBoard() {
  return (
    <section className="featured-bakes-section" id="daily-board">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-heading">Featured Bakes & Small Chops</h2>
          <p className="section-subheading">Our latest custom creations and popular event bites.</p>
        </div>

        <div className="chalkboard-container">
          {FEATURED_BOARD_ITEMS.map((item) => (
            <div key={item.id} className="chalkboard-row">
              <div className="chalkboard-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
              <div>
                <span
                  className={`status-badge ${
                    item.statusType === 'sold-out'
                      ? 'badge-sold-out'
                      : item.statusType === 'urgent'
                      ? 'badge-urgent'
                      : 'badge-fresh'
                  }`}
                >
                  {item.statusBadge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

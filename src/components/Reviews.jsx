import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/bakeryData';

export default function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge-tag">Client Love</span>
          <h2 className="section-title">Words From Happy Clients</h2>
          <p className="section-desc">
            Nothing brings us more joy than being a cherished part of your birthdays, weddings, anniversaries, and corporate celebrations.
          </p>
        </div>

        <div className="reviews-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="review-card">
              <div className="star-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="review-quote">"{item.comment}"</p>
              <div className="reviewer-profile">
                <div className="reviewer-avatar">{item.avatar}</div>
                <div className="reviewer-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function LocationHours() {
  return (
    <section className="find-us-section" id="location">
      <div className="container">
        <div className="find-us-grid">
          {/* Left Warm Bakery Photo */}
          <div className="find-us-image-card">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
              alt="Warm bakery storefront at dusk"
              loading="lazy"
            />
          </div>

          {/* Right Info Panel matching Screenshot 8 */}
          <div className="find-us-info-panel">
            <h2>Find Us</h2>
            <p className="find-us-subtitle">
              Located in the heart of the community. Follow the scent of fresh bread.
            </p>

            <div className="find-us-details-grid">
              {/* Address */}
              <div className="find-us-item">
                <svg
                  className="find-us-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <h4 className="find-us-label">Address</h4>
                  <p className="find-us-text">
                    {BAKERY_INFO.address.split(',')[0]}<br />
                    {BAKERY_INFO.postcode}, {BAKERY_INFO.city}<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="find-us-item">
                <svg
                  className="find-us-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <div>
                  <h4 className="find-us-label">Opening Hours</h4>
                  <p className="find-us-text">
                    Tue - Fri: 6:30 AM - 3:00 PM<br />
                    Sat - Sun: 7:30 AM - 4:00 PM<br />
                    Monday: Closed (Baking!)
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="find-us-item" style={{ gridColumn: 'span 2' }}>
                <svg
                  className="find-us-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <div>
                  <h4 className="find-us-label">Contact</h4>
                  <p className="find-us-text">
                    <a href={`tel:${BAKERY_INFO.phone}`} style={{ color: 'inherit' }}>
                      {BAKERY_INFO.phone}
                    </a>
                    <br />
                    <a href={`mailto:${BAKERY_INFO.email}`} style={{ color: '#D93829' }}>
                      {BAKERY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

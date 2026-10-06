import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function CustomQuote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventDate: '',
    serviceNeeded: '',
    guestCount: '',
    eventDetails: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*CUSTOM QUOTE INQUIRY - MAMANA CAKES & PASTRIES*
• Full Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phoneNumber}
• Event Date: ${formData.eventDate}
• Service Needed: ${formData.serviceNeeded || 'Not selected'}
• Guest Count: ${formData.guestCount || 'Not specified'}
• Details & Flavors: ${formData.eventDetails || 'None'}
• Attached Image Reference: ${formData.fileName || 'None'}

Please confirm availability and provide a tailored quote. Thank you!`;

    const url = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="custom-quote-section" id="quote">
      <div className="container">
        <div className="quote-box-wrapper">
          {/* Left Dark Panel matching Screenshot */}
          <div className="quote-left-panel">
            {/* Red Cake Vector Icon */}
            <svg
              className="quote-cake-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {/* Candles */}
              <circle cx="7" cy="4" r="1" />
              <circle cx="12" cy="4" r="1" />
              <circle cx="17" cy="4" r="1" />
              <rect x="6.5" y="5.5" width="1" height="3" />
              <rect x="11.5" y="5.5" width="1" height="3" />
              <rect x="16.5" y="5.5" width="1" height="3" />
              {/* Cake body */}
              <rect x="4" y="9" width="16" height="5" rx="1" />
              <rect x="2" y="15" width="20" height="6" rx="1.5" />
            </svg>

            <h2 className="quote-left-title">Request a Custom Quote</h2>

            <p className="quote-left-desc">
              Planning a wedding, corporate event, or special birthday? Let us craft the perfect custom cakes and small chops for your occasion.
            </p>

            <div className="quote-perks-list">
              <div className="quote-perk-item">
                <span className="quote-perk-check">✓</span>
                <span>Quick response within 24 hours</span>
              </div>
              <div className="quote-perk-item">
                <span className="quote-perk-check">✓</span>
                <span>Upload your inspiration photos</span>
              </div>
              <div className="quote-perk-item">
                <span className="quote-perk-check">✓</span>
                <span>Delivery & setup available</span>
              </div>
            </div>
          </div>

          {/* Right Form Panel matching Screenshot */}
          <div className="quote-right-panel">
            <form onSubmit={handleSubmit}>
              <div className="quote-form-grid">
                <div className="form-field">
                  <label className="field-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="field-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="field-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+44 7350 171974"
                    className="field-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="field-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Service Needed</label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="field-select"
                    required
                  >
                    <option value="">Select option...</option>
                    <option value="Wedding Cake">Custom Wedding Cake</option>
                    <option value="Birthday Cake">Bespoke Birthday Cake</option>
                    <option value="Cupcake Tower">Artisan Cupcake Tower</option>
                    <option value="Small Chops Catering">Event Small Chops Catering</option>
                    <option value="Cake & Small Chops Package">Cake & Small Chops Combination</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Guest Count</label>
                  <input
                    type="text"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="E.g., 50"
                    className="field-input"
                  />
                </div>

                <div className="form-field full">
                  <label className="field-label">Event Details & Flavors</label>
                  <textarea
                    rows="3"
                    name="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleChange}
                    placeholder="Tell us about the theme, flavors, and any allergies..."
                    className="field-textarea"
                  />
                </div>

                <div className="form-field full">
                  <label className="field-label">Inspiration Image (Optional)</label>
                  <div className="file-upload-box">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ fontSize: '0.85rem' }}
                    />
                  </div>
                  <p className="upload-caption">
                    Upload a photo of a cake or setup you like.
                  </p>
                </div>
              </div>

              <button type="submit" className="btn-submit-quote">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

export default function CrumbClub() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="crumb-club-section">
      <div className="crumb-club-inner">
        {/* Red Mail Envelope Vector Icon */}
        <svg
          className="crumb-mail-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>

        <h2 className="crumb-title">Join the Crumb Club</h2>

        <p className="crumb-desc">
          Sign up for our newsletter to receive updates on seasonal bakes, exclusive discounts, and secret menu items. We promise not to spam your inbox.
        </p>

        <form onSubmit={handleSubmit} className="crumb-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="crumb-input"
            required
          />
          <button type="submit" className="crumb-btn">
            Sign Up
          </button>
        </form>

        {subscribed && (
          <p style={{ marginTop: '0.85rem', color: '#86EFAC', fontSize: '0.9rem' }}>
            Thank you for joining the Crumb Club!
          </p>
        )}
      </div>
    </section>
  );
}

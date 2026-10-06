import React, { useEffect } from 'react';
import ArchLogo from './ArchLogo';
import { BAKERY_INFO } from '../data/bakeryData';

export default function LegalPage({ pageType, onBackToHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageType]);

  const renderContent = () => {
    switch (pageType) {
      case 'privacy':
        return (
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
              Privacy Policy
            </h1>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
              Last updated: October 2026
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#374151', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  1. Overview & Commitment
                </h3>
                <p>
                  At {BAKERY_INFO.name} ("we", "our", or "us"), operating at {BAKERY_INFO.address}, we are committed to respecting and protecting the privacy of our website visitors and clients. This Privacy Policy outlines how we collect, use, and safeguard personal information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  2. Information We Collect
                </h3>
                <p style={{ marginBottom: '0.5rem' }}>When you interact with our website, place an order, or submit an inquiry, we may collect:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'disc' }}>
                  <li><strong>Contact Details:</strong> Your full name, email address ({BAKERY_INFO.email}), and contact phone number.</li>
                  <li><strong>Order Information:</strong> Delivery address, cake inscriptions, dietary preferences, and event date.</li>
                  <li><strong>Inquiry Attachments:</strong> Design inspiration images you submit through our custom quote configurator.</li>
                  <li><strong>Communication Records:</strong> WhatsApp messages and email correspondence relating to your order.</li>
                </ul>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  3. How We Use Your Data
                </h3>
                <p>We process your personal information strictly for legitimate business purposes:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'disc', marginTop: '0.5rem' }}>
                  <li>Fulfilling, baking, and delivering your custom cake and small chops orders.</li>
                  <li>Responding to quote requests and dietary queries within our 24-hour window.</li>
                  <li>Sending order receipts, collection instructions, and dispatch updates.</li>
                  <li>Newsletter communications (only when voluntarily subscribed via the Crumb Club).</li>
                </ul>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  4. Data Security & Third Parties
                </h3>
                <p>
                  We do not sell, rent, or trade your personal data. Payment details are processed securely via encrypted payment channels or direct bank communications. We do not store sensitive payment card information on our servers.
                </p>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  5. Your Rights & Inquiries
                </h3>
                <p>
                  Under UK data protection laws, you have the right to request access to, rectification of, or erasure of your personal data. For any data inquiries, please email our data officer at <a href={`mailto:${BAKERY_INFO.email}`} style={{ color: '#D93829', fontWeight: 600 }}>{BAKERY_INFO.email}</a> or write to our studio at {BAKERY_INFO.address}.
                </p>
              </section>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
              Terms of Service
            </h1>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
              Last updated: October 2026
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#374151', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  1. Agreement to Terms
                </h3>
                <p>
                  By browsing our website, placing an order via our online basket, or commissioning bespoke orders through WhatsApp or email with {BAKERY_INFO.name}, you agree to be bound by these Terms of Service.
                </p>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  2. Order Placement & Lead Times
                </h3>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'disc' }}>
                  <li><strong>Express Menu & Daily Bakes:</strong> Orders are prepared fresh daily and fulfilled during designated studio operating hours.</li>
                  <li><strong>Custom Celebration Cakes:</strong> We require a minimum of 48 to 72 hours advance notice.</li>
                  <li><strong>Multi-Tier Wedding Cakes & Large Event Catering:</strong> 1 to 2 weeks minimum advance notice is required to guarantee availability.</li>
                </ul>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  3. Allergen Advisory
                </h3>
                <p>
                  All our baked goods and small chops are prepared in a kitchen that handles wheat (gluten), dairy, eggs, nuts, and soy. While stringent hygiene and cross-contamination protocols are practiced, we cannot guarantee an entirely allergen-free environment. Customers must disclose severe allergies before confirming orders.
                </p>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  4. Collection & Delivery
                </h3>
                <p>
                  Studio collection is available at {BAKERY_INFO.address}. Once items are collected in good condition and handed over to the client or customer-arranged courier, responsibility transfers to the client. For local delivery, temperature-controlled transport is arranged to specified East Midlands postcodes.
                </p>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  5. Design Variations & Handcrafted Nature
                </h3>
                <p>
                  Each cake is a unique artisanal creation. While we strive to match inspiration photographs provided by clients, slight variations in color hue, floral arrangement, and artistic detailing are normal and inherent to bespoke confectionery.
                </p>
              </section>
            </div>
          </div>
        );

      case 'refund':
        return (
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
              Refund & Cancellation Policy
            </h1>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
              Last updated: October 2026
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#374151', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  1. Perishable Food Nature
                </h3>
                <p>
                  Due to the fresh, perishable nature of custom baked cakes, viennoiserie, and event small chops, all items are produced to order. Consequently, statutory consumer cooling-off periods for non-perishable goods do not apply once ingredients have been sourced and baking commences.
                </p>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  2. Order Cancellations
                </h3>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'disc' }}>
                  <li>
                    <strong>Celebration Cakes (Single-Tier):</strong> Full refund available if cancelled at least 48 hours before the scheduled collection or delivery date. Cancellations within 24 hours incur a 50% cancellation fee to cover ingredients and prep time.
                  </li>
                  <li>
                    <strong>Wedding Cakes & Large Small Chops Catering:</strong> Deposits for multi-tier wedding cakes and major catering orders are refundable up to 14 days prior to the event. Within 14 days, the booking deposit is non-refundable.
                  </li>
                  <li>
                    <strong>Daily Board & Same-Day Bakes:</strong> Orders placed on the same day cannot be cancelled once baking has begun.
                  </li>
                </ul>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  3. Quality Assurance & Inspection Upon Handover
                </h3>
                <p>
                  We take immense pride in our craftsmanship. Clients (or designated representatives) are invited to inspect their cake or small chops platter upon collection at Whitecross Garden. Once an order is accepted and signed for, physical damages incurred in client transit cannot be reimbursed.
                </p>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                  4. Discrepancy & Dispute Resolution
                </h3>
                <p>
                  In the rare event that an incorrect item or flavor was prepared, please photograph the item and contact us immediately within 2 hours of delivery or pickup at <a href={`tel:${BAKERY_INFO.phone}`} style={{ color: '#D93829', fontWeight: 600 }}>{BAKERY_INFO.phone}</a> or <a href={`mailto:${BAKERY_INFO.email}`} style={{ color: '#D93829', fontWeight: 600 }}>{BAKERY_INFO.email}</a>. We will promptly arrange a replacement or appropriate reimbursement.
                </p>
              </section>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar Navigation */}
      <div
        style={{
          borderBottom: '1px solid #E5E7EB',
          padding: '1rem 1.5rem',
          background: '#FFFFFF',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}
      >
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <button
            onClick={onBackToHome}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#374151',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0'
            }}
          >
            &lt; Return to Home
          </button>

          <a href="#top" onClick={(e) => { e.preventDefault(); onBackToHome(); }}>
            <ArchLogo />
          </a>

          <div style={{ width: '120px' }}></div>
        </div>
      </div>

      {/* Main Legal Content Container */}
      <main style={{ flexGrow: 1, padding: '4rem 1.5rem', maxWidth: '820px', margin: '0 auto', width: '100%' }}>
        {renderContent()}
      </main>

      {/* Simplified Footer */}
      <footer
        style={{
          borderTop: '1px solid #E5E7EB',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#9CA3AF',
          background: '#F9FAFB'
        }}
      >
        <p>© 2026 Mamana Cakesnpastries. All rights reserved.</p>
        <p style={{ marginTop: '0.35rem' }}>Whitecross Garden, DE1 3PQ, Derby, United Kingdom</p>
      </footer>
    </div>
  );
}

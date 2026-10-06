import React from 'react';
import ArchLogo from './ArchLogo';
import { BAKERY_INFO } from '../data/bakeryData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <ArchLogo />
            <p>
              Premium cakes, cupcakes, and event small chops. Delivered beautiful and delicious on time, every time.
            </p>
            
            <div className="footer-contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span>{BAKERY_INFO.phone}</span>
            </div>

            <div className="footer-contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>{BAKERY_INFO.email}</span>
            </div>

            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <div className="footer-links-list">
              <a href="#daily-board" className="footer-link">Featured Bakes</a>
              <a href="#pickup" className="footer-link">Order Menu</a>
              <a href="#location" className="footer-link">Location & Hours</a>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-col">
            <h4>LEGAL</h4>
            <div className="footer-links-list">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="footer-link"
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenLegal('terms')}
                className="footer-link"
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              >
                Terms of Service
              </button>
              <button
                onClick={() => onOpenLegal('refund')}
                className="footer-link"
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © 2026 Mamana Cakesnpastries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

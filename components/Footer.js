// components/Footer.js
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const newsletterMutation = useMutation({
    mutationFn: async (email) => {
      return apiRequest('POST', '/api/newsletter/subscribe', { email });
    },
    onSuccess: () => {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    },
    onError: (error) => {
      alert(error.message || 'Failed to subscribe. Please try again.');
    },
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && isValidEmail(email)) {
      newsletterMutation.mutate(email);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.newsletterSection}>
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>
            <form className={styles.subscribeForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={newsletterMutation.isPending}
              />
              <button type="submit" disabled={newsletterMutation.isPending}>
                {newsletterMutation.isPending ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </form>
          </div>

          <div className={styles.footerColumn}>
            <h3>CONTACT US</h3>
            <p><a href="tel:+442211235380">+44 221 123 5380</a></p>
            <p><a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a></p>
            <h3 style={{ marginTop: '24px' }}>CURRENCY</h3>
            <p>🌐 USD</p>
            <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
          </div>
        </div>

        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>mettā muse</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#artisans">Artisans</a></li>
              <li><a href="#boutiques">Boutiques</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#compliance">EU Compliance Docs</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#shipping">Orders & Shipping</a></li>
              <li><a href="#seller">Join/Login as a Seller</a></li>
              <li><a href="#payment">Payment & Pricing</a></li>
              <li><a href="#returns">Return & Refunds</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

            <div className={styles.footerColumn}>
            <h3>FOLLOW US</h3>
            <div className={styles.socialIcons}>
              <img src="images/social/linkedin.jpeg" alt="LinkedIn" className={styles.socialIcon}/>
              <img src="images/social/instagram.jpeg" alt="Instagram" className={styles.socialIcon}/>
            </div>

            <h3 style={{ marginTop: '24px' }}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentMethods}>
            <img src="/images/payments/gpay.jpeg" alt="Google Pay" className={styles.paymentIcon} />
            <img src="/images/payments/applepay.png" alt="Apple Pay" className={styles.paymentIcon} />
            <img src="/images/payments/visa.png" alt="Visa" className={styles.paymentIcon} />
            <img src="/images/payments/mastercard.png" alt="Mastercard" className={styles.paymentIcon} />
            <img src="/images/payments/amex.png" alt="American Express" className={styles.paymentIcon} />
            <img src="/images/payments/paypal.png" alt="PayPal" className={styles.paymentIcon} />
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

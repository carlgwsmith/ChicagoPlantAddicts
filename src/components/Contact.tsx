import LeafPattern from './LeafPattern';
import { BOOKING_URL } from '../constants';

// TODO: replace with real contact details before launch.
const CONTACT = {
  email: 'hello@chicagoplantaddicts.com',
  phone: '(312) 555-0100',
  instagram: '@chicagoplantaddicts',
};

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <LeafPattern variant="light" opacity={0.14} />
      <div className="contact__content">
        <h2 className="section-title section-title--light">Ready to flourish?</h2>
        <p className="contact__copy">Book a free consultation and let's bring your space to life.</p>
        <a
          className="button button--accent"
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Free Consultation
        </a>
        <ul className="contact__details">
          <li>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
          <li>
            <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, '')}`}>{CONTACT.phone}</a>
          </li>
          <li>{CONTACT.instagram}</li>
        </ul>
      </div>
    </section>
  );
}

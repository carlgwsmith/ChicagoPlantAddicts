import LeafPattern from './LeafPattern';

// TODO: replace with real contact details and booking link before launch.
const CONTACT = {
  email: 'hello@chicagoplantaddicts.com',
  phone: '(312) 555-0100',
  instagram: '@chicagoplantaddicts',
  bookingUrl: '#',
};

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <LeafPattern id="contact-leaves" opacity={0.1} />
      <div className="contact__content">
        <h2 className="section-title section-title--light">Ready to flourish?</h2>
        <p className="contact__copy">Book a free consultation and let's bring your space to life.</p>
        <a className="button button--accent" href={CONTACT.bookingUrl}>
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

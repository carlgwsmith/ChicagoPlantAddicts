import LeafPattern from './LeafPattern';
import { BOOKING_URL } from '../constants';

export default function Hero() {
  return (
    <header className="hero">
      <LeafPattern opacity={0.75} />
      <div className="hero__content">
        <p className="eyebrow">Chicago Plant Stylist</p>
        <h1 className="hero__title">
          Chicago
          <br />
          Plant Addicts
        </h1>
        <p className="hero__tagline">
          Interior plants, curated and cared for &mdash; so your space can flourish.
        </p>
        <a
          className="button button--primary"
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Free Consultation
        </a>
      </div>
    </header>
  );
}

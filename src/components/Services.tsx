const SERVICES = [
  {
    title: 'Consult & Curate',
    copy: 'An in-home or in-office visit to assess light, space, and style, then hand-select the right plants and vessels.',
  },
  {
    title: 'Style & Install',
    copy: 'Full styling and placement across your space, delivered and installed from start to finish.',
  },
  {
    title: 'Maintain & Refresh',
    copy: 'Ongoing care visits to water, trim, and rotate — keeping your space flourishing year-round.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Services</h2>
      <ol className="services__list">
        {SERVICES.map((service, index) => (
          <li className="services__item" key={service.title}>
            <span className="services__index">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__copy">{service.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

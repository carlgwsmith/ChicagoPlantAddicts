const WORDS = ['Curate', 'Transform', 'Revitalize', 'Reimagine', 'Elevate', 'Refresh', 'Flourish'];

export default function BrandWords() {
  return (
    <section className="brand-words" aria-label="What we do">
      <ul className="brand-words__list">
        {WORDS.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} Chicago Plant Addicts &middot; Chicago, IL
      </p>
    </footer>
  );
}

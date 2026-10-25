export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Able Sunny</p>
        <div className="footer-links">
          <a href="mailto:ablesunnyofficial@gmail.com">Email</a>
          <a
            href="https://github.com/ablesunny"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

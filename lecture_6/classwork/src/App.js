import "./sass/styles.scss";
import Faq from "./Faq";

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#learn-more">FAQ</a>
          </li>
          <li>
            <a href="#video">RTG 2021</a>
          </li>
          <li>
            <a href="#socials">Social media</a>
          </li>
          <li>
            <a href="#inspiration">Inspiration</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="hero" className="intro">
          <h1 className="main-heading">Mentorship program</h1>
          <div className="dates">6 Jan – 30 Jun 2023 | Online</div>
          <div className="intro-description">
            Riga TechGirls mentorship program “TechMentor” gathers professionals
            in the field of IT with the goal of providing support to women
            developing their talents, taking their first steps in the IT field
            or advancing their career further in this field.
          </div>
        </section>

        <Faq />

        <section id="video" className="video-container">
          <h2 className="video-heading">
            Watch the closing event of TechMentor 2021
          </h2>
          <iframe
            className="video-frame"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/wRTvdh9AX6Y"
            allowFullScreen
            title="video"
          ></iframe>
        </section>

        <section id="socials" className="social-container">
          <h2 className="social-heading">Social media</h2>
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/RigaTechGirls"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <svg
                className="social-image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <title>icon</title>
                <path d="M26.34 10C22.45 10 20 12.57 20 16.7v3.8h-3.8a.5.5 0 0 0-.5.5v5.08a.5.5 0 0 0 .5.5H20V37.5a.5.5 0 0 0 .5.5h4.95a.5.5 0 0 0 .5-.5V26.57h3.22a.5.5 0 0 0 .5-.44l.59-5.08a.5.5 0 0 0-.5-.56H26v-3.32c0-1.3.14-1.78 1.59-1.78h2.21a.5.5 0 0 0 .5-.5v-4.2c0-.46 0-.69-3.96-.69zm3 4.38h-1.78c-2.39 0-2.59 1.44-2.59 2.78V21a.5.5 0 0 0 .5.5h3.75l-.47 4.08h-3.28a.5.5 0 0 0-.5.5V37H21V26.07a.5.5 0 0 0-.5-.5h-3.8V21.5h3.83A.5.5 0 0 0 21 21v-4.3c0-3.57 2-5.7 5.31-5.7 1.2 0 2.38.06 3 .12v3.27zM24 .52A23.48 23.48 0 1 0 47.5 24 23.52 23.52 0 0 0 24 .52zm0 46A22.48 22.48 0 1 1 46.5 24 22.51 22.51 0 0 1 24 46.48z"></path>
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/rigatechgirls/"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <svg
                className="social-image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <title>icon</title>
                <path d="M24 17.06a6.88 6.88 0 1 0 6.77 6.88A6.83 6.83 0 0 0 24 17.06zm0 12.75a5.88 5.88 0 1 1 5.77-5.88A5.83 5.83 0 0 1 24 29.82zM24 .52A23.48 23.48 0 1 0 47.5 24 23.52 23.52 0 0 0 24 .52zm0 46A22.48 22.48 0 1 1 46.5 24 22.52 22.52 0 0 1 24 46.48zM31.76 14a2.21 2.21 0 1 0 2.19 2.21A2.2 2.2 0 0 0 31.76 14zm0 3.43a1.21 1.21 0 1 1 1.19-1.21 1.2 1.2 0 0 1-1.19 1.17zM30 9.94H18a7.91 7.91 0 0 0-7.84 8V30A7.91 7.91 0 0 0 18 38h12a7.91 7.91 0 0 0 7.84-8V17.9A7.91 7.91 0 0 0 30 9.94zm6.84 20a6.91 6.91 0 0 1-6.84 7H18a6.91 6.91 0 0 1-6.84-7V17.9a6.91 6.91 0 0 1 6.84-7h12a6.91 6.91 0 0 1 6.84 7V30z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/rigatechgirls"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <svg
                className="social-image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <title>icon</title>
                <path d="M24 .52A23.48 23.48 0 1 0 47.5 24 23.52 23.52 0 0 0 24 .52zm0 46A22.48 22.48 0 1 1 46.5 24 22.51 22.51 0 0 1 24 46.48zM37.51 15.8h-.09a2.39 2.39 0 0 0 .28-1.18 1 1 0 0 0-1.57-.74 5.34 5.34 0 0 1-2.73 1 6.45 6.45 0 0 0-10.7 4.72v.32c-5.26-.36-9.46-5.18-9.51-5.23a1 1 0 0 0-.76-.35h-.07a1 1 0 0 0-.77.49 6.06 6.06 0 0 0-.19 6l-.12.05a1 1 0 0 0-.55.87 6.16 6.16 0 0 0 2.08 4.92 1 1 0 0 0-.13.87 6 6 0 0 0 3.56 3.92 9 9 0 0 1-4 .86 10 10 0 0 1-1.52-.1h-.22a1 1 0 0 0-.6 1.8 15.37 15.37 0 0 0 9.1 2.72 18.07 18.07 0 0 0 3.4-.3c12.48-2.86 13.28-13.66 13.29-16.14a12.29 12.29 0 0 0 2.71-3.06 1 1 0 0 0-.89-1.44zm-2.82 4.06a15.23 15.23 0 0 1-12.5 15.61 17.14 17.14 0 0 1-3.19.28 14.35 14.35 0 0 1-8.5-2.48 10.8 10.8 0 0 0 1.69.12A8.58 8.58 0 0 0 18.54 31a5.26 5.26 0 0 1-4.91-3.71 6.17 6.17 0 0 0 1.14.11 2.81 2.81 0 0 0 1.11-.19 5.33 5.33 0 0 1-4.15-5.4 3.86 3.86 0 0 0 1.91.69h.26s-3.81-3.19-1.45-7.16c0 0 4.81 5.6 10.88 5.6h.54a5.27 5.27 0 0 1-.17-1.33 5.39 5.39 0 0 1 5.43-5.34A5.47 5.47 0 0 1 33 15.85h.1a6.31 6.31 0 0 0 3.61-1.16s.09 1.14-2.24 2.91a8 8 0 0 0 3-.81s-.18.75-2.78 3.07z"></path>
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCRLScISANNlZzlRGApth9Yg"
              aria-label="YouTube"
              rel="noreferrer"
            >
              <svg
                className="social-image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <title>icon</title>
                <path d="M18.38 31.11L30.73 24l-12.35-7.11v14.22zm1-12.49L28.72 24l-9.34 5.38V18.62zm17.17-9.5H11.44A7.94 7.94 0 0 0 3.5 17v14a7.94 7.94 0 0 0 7.94 7.92h25.12A7.94 7.94 0 0 0 44.5 31V17a7.94 7.94 0 0 0-7.94-7.88zM43.5 31a6.94 6.94 0 0 1-6.94 6.92H11.44A6.94 6.94 0 0 1 4.5 31V17a6.94 6.94 0 0 1 6.94-6.92h25.12A6.94 6.94 0 0 1 43.5 17v14z"></path>
              </svg>
            </a>
          </div>
        </section>

        <section id="inspiration" className="quote-container">
          <h2 className="sr-only">Inspiration</h2>
          <div className="quote">
            “Though we do need more women to graduate with technical degrees, I
            always like to remind women that you don’t need to have science or
            technology degrees to build a career in tech.”
          </div>
          <div className="author">
            <a
              className="author-link"
              href="https://en.wikipedia.org/wiki/Susan_Wojcicki"
              target="_blank"
              rel="noreferrer"
            >
              Susan Wojcicki, CEO of YouTube
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        Made with ❤️ by
        <a
          href="https://www.instagram.com/alinawhocodes/"
          target="_blank"
          rel="noreferrer"
        >
          Alina Karpelceva
        </a>
      </footer>
    </div>
  );
};

export default App;

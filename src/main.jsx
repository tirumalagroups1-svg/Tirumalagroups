import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const phone = "8971294612";
const whatsapp = "918971294612";

const services = [
  ["01", "PEB Industrial Sheds", "Pre-engineered steel buildings for warehouses, factories and industrial projects."],
  ["02", "Building Construction", "Durable commercial and industrial construction with practical project execution."],
  ["03", "Steel Structures", "Professional structural steel fabrication and erection using quality materials."],
  ["04", "Contracting Services", "End-to-end construction support from planning and fabrication to execution."]
];

function App() {
  return (
    <div>
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">TG</span>
          <span>
            <b>TIRUMALA</b>
            <small>GROUPS</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-cta"
          href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20need%20a%20quotation.`}
        >
          WhatsApp Us ↗
        </a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="eyebrow">● PEB • STEEL • CONSTRUCTION</div>

            <h1>
              We Build <em>Strength</em> That Lasts.
            </h1>

            <p className="hero-text">
              TIRUMALA GROUPS delivers PEB industrial sheds, building
              construction and contracting solutions with a focus on strength,
              quality and dependable execution.
            </p>

            <div className="hero-buttons">
              <a
                className="primary-btn"
                href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20need%20a%20free%20quote.`}
              >
                Get Free Quote ↗
              </a>

              <a className="secondary-btn" href={`tel:+91${phone}`}>
                Call +91 {phone}
              </a>
            </div>

            <div className="trust-row">
              <span>✓ Quality materials</span>
              <span>✓ Professional execution</span>
              <span>✓ Project support</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="steel-frame">
              <div className="roof-line"></div>

              <div className="shed-wall">
                <div className="big-door"></div>

                <div className="window-row">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>

              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div className="floating-stat">
              <b>PEB</b>
              <span>Industrial Solutions</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div>
            <p className="section-label">ABOUT TIRUMALA GROUPS</p>

            <h2>
              Built around <em>quality</em>, trust and results.
            </h2>
          </div>

          <div>
            <p>
              We provide practical PEB industrial shed, steel structure,
              building construction and contracting services for customers who
              value strong materials and professional workmanship.
            </p>

            <div className="mini-stats">
              <div>
                <b>PEB</b>
                <span>Industrial Sheds</span>
              </div>

              <div>
                <b>360°</b>
                <span>Project Support</span>
              </div>

              <div>
                <b>01</b>
                <span>Trusted Team</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <p className="section-label">WHAT WE DO</p>

          <h2>Complete Construction Solutions</h2>

          <div className="service-grid">
            {services.map(([number, title, description]) => (
              <article className="service-card" key={title}>
                <span className="service-number">{number}</span>

                <h3>{title}</h3>

                <p>{description}</p>

                <a href="#contact">Learn more →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="solutions" className="solutions">
          <div className="section solutions-inner">
            <div>
              <p className="section-label">OUR SOLUTIONS</p>

              <h2>Engineered for real-world projects.</h2>

              <p>
                From industrial sheds to commercial structures, we focus on
                practical designs, efficient execution and durable results.
              </p>

              <a
                className="light-btn"
                href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20please%20share%20your%20PEB%20solutions.`}
              >
                Discuss Your Project ↗
              </a>
            </div>

            <div className="solution-list">
              <div>
                <b>01</b>
                <span>Industrial Warehouses</span>
              </div>

              <div>
                <b>02</b>
                <span>PEB Steel Buildings</span>
              </div>

              <div>
                <b>03</b>
                <span>Commercial Construction</span>
              </div>

              <div>
                <b>04</b>
                <span>Structural Steel Work</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">PROJECT FOCUS</p>

          <h2>Made to stand strong.</h2>

          <div className="project-grid">
            <div className="project-card p1">
              <b>01</b>
              <strong>Industrial PEB Shed</strong>
              <small>Warehouse & factory solutions</small>
            </div>

            <div className="project-card p2">
              <b>02</b>
              <strong>Steel Structure</strong>
              <small>Fabrication & erection</small>
            </div>

            <div className="project-card p3">
              <b>03</b>
              <strong>Building Construction</strong>
              <small>Commercial & industrial</small>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-inner">
            <div>
              <p className="section-label">START YOUR PROJECT</p>

              <h2>Let's build something strong.</h2>

              <p>
                Call us or send your requirement on WhatsApp for a free
                discussion and quotation.
              </p>

              <div className="contact-actions">
                <a
                  className="primary-btn"
                  href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20want%20a%20quotation.`}
                >
                  WhatsApp Quote ↗
                </a>

                <a className="outline-btn" href={`tel:+91${phone}`}>
                  Call Now
                </a>
              </div>
            </div>

            <div className="contact-card">
              <b>TIRUMALA GROUPS</b>

              <p>
                PEB Industrial Sheds • Building Construction • Contractors
              </p>

              <a href="tel:+918971294612">+91 89712 94612</a>
              <a href="tel:+919108075232">+91 91080 75232</a>
              <a href="tel:+919686714941">+91 96867 14941</a>

              <a href="mailto:Tirumalagroups1@gmail.com">
                Tirumalagroups1@gmail.com
              </a>

              <p>
                01, Pallarahalli, Nelamangala,
                <br />
                Bangalore – 562123
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <b>TIRUMALA GROUPS</b>

        <span>Building the Future with Strength & Quality.</span>

        <span>© 2026 All Rights Reserved.</span>
      </footer>

      <div className="floating-actions">
        <a href={`tel:+91${phone}`} aria-label="Call">
          ☎
        </a>

        <a
          href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups`}
          aria-label="WhatsApp"
        >
          ✆
        </a>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

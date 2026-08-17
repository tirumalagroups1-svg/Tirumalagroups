import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span>TG</span>
          <div>
            <strong>TIRUMALA</strong>
            <small>GROUPS</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="quote-top" href="#contact">
          Get a Quote →
        </a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">BUILDING STRONG FOUNDATIONS FOR A BETTER TOMORROW</p>

            <h1>
              Strong Steel.
              <br />
              <span>Smart Construction.</span>
            </h1>

            <p className="hero-text">
              PEB Industrial Sheds, Building Construction & Contractors —
              delivering practical, durable and quality-focused construction
              solutions.
            </p>

            <div className="hero-buttons">
              <a className="primary-btn" href="#contact">
                Request a Free Quote →
              </a>
              <a className="secondary-btn" href="#services">
                Explore Services
              </a>
            </div>

            <div className="highlights">
              <span>✓ Quality-focused execution</span>
              <span>✓ Steel & PEB solutions</span>
              <span>✓ Project support</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="building">
              <div className="roof"></div>
              <div className="shed-body">
                <div className="door"></div>
                <div className="window"></div>
              </div>
              <div className="beam beam1"></div>
              <div className="beam beam2"></div>
              <div className="beam beam3"></div>
            </div>

            <div className="strength-card">
              <b>✓ Built for strength</b>
              <small>Industrial & commercial solutions</small>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div>
            <p className="section-label">ABOUT TIRUMALA GROUPS</p>
            <h2>Building with Strength, Quality & Trust.</h2>
          </div>

          <p>
            TIRUMALA GROUPS provides PEB industrial shed solutions, building
            construction and contracting services. Our focus is practical
            construction, strong materials, quality workmanship and dependable
            project execution.
          </p>
        </section>

        <section id="services" className="section">
          <p className="section-label">OUR SERVICES</p>
          <h2>Complete Construction Solutions</h2>

          <div className="grid">
            <div className="card">
              <div className="icon">🏭</div>
              <h3>PEB Industrial Sheds</h3>
              <p>
                Modern pre-engineered building solutions for factories,
                warehouses and industrial projects.
              </p>
            </div>

            <div className="card">
              <div className="icon">🏗️</div>
              <h3>Building Construction</h3>
              <p>
                Strong and durable construction solutions for commercial and
                industrial requirements.
              </p>
            </div>

            <div className="card">
              <div className="icon">🔩</div>
              <h3>Steel Solutions</h3>
              <p>
                Quality steel and structural solutions using trusted materials
                and professional execution.
              </p>
            </div>

            <div className="card">
              <div className="icon">👷</div>
              <h3>Contracting</h3>
              <p>
                Reliable project coordination, fabrication, erection and
                construction support.
              </p>
            </div>
          </div>
        </section>

        <section id="solutions" className="section dark-section">
          <p className="section-label">OUR SOLUTIONS</p>
          <h2>Designed for Real-World Projects</h2>

          <div className="solution-grid">
            <div>
              <h3>Industrial Warehouses</h3>
              <p>Efficient and durable warehouse structures for business growth.</p>
            </div>

            <div>
              <h3>PEB Structures</h3>
              <p>Fast, practical and economical pre-engineered steel buildings.</p>
            </div>

            <div>
              <h3>Commercial Buildings</h3>
              <p>Strong construction solutions designed around project requirements.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">PROJECTS</p>
          <h2>Construction That Stands Strong</h2>

          <div className="project-grid">
            <div className="project project-one">
              <div>
                <span>01</span>
                <h3>Industrial PEB Shed</h3>
              </div>
            </div>

            <div className="project project-two">
              <div>
                <span>02</span>
                <h3>Steel Structure</h3>
              </div>
            </div>

            <div className="project project-three">
              <div>
                <span>03</span>
                <h3>Building Construction</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="section-label">GET IN TOUCH</p>
            <h2>Let's Build Something Strong.</h2>
            <p>
              Contact TIRUMALA GROUPS for PEB industrial sheds, building
              construction and contracting requirements.
            </p>
          </div>

          <div className="contact-box">
            <p><strong>Email</strong></p>
            <a href="mailto:Tirumalagroups1@gmail.com">
              Tirumalagroups1@gmail.com
            </a>
<p><strong>Phone</strong></p>
<p>
  <a href="tel:8971294612">8971294612</a><br />
  <a href="tel:9108075232">9108075232</a><br />
  <a href="tel:9686714941">9686714941</a>
</p>
            <p><strong>Address</strong></p>
           <p>01, Pallarahalli, Nelamangala, Bangalore – 562123</p>

            <a className="primary-btn" href="mailto:Tirumalagroups1@gmail.com">
              Request a Quote →
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>TIRUMALA GROUPS</strong>
          <p>PEB Industrial Sheds • Building Construction • Contractors</p>
        </div>

        <p>© 2026 Tirumala Groups. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("root")).render(<App />);

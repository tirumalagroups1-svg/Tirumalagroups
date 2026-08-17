public/images/
hero-shed.jpg
industrial-shed.jpg
warehouse.jpg
construction.jpg
steel-structure.jpg
peb-project-1.jpg
peb-project-2.jpg
peb-project-3.jpg
peb-project-4.jpgimport React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const phone1 = "8971294612";
const phone2 = "9108075232";
const phone3 = "9686714941";
const whatsapp = "918971294612";
const email = "Tirumalagroups1@gmail.com";

const img = (name) => `/images/${name}`;

const services = [
  {
    no: "01",
    title: "PEB Industrial Sheds",
    text: "Complete pre-engineered building solutions for warehouses, factories, logistics centres and industrial facilities.",
  },
  {
    no: "02",
    title: "Building Construction",
    text: "Strong and practical construction solutions for industrial, commercial and business requirements.",
  },
  {
    no: "03",
    title: "Steel Structures",
    text: "Structural steel fabrication, erection and installation with attention to strength and quality.",
  },
  {
    no: "04",
    title: "Roofing Solutions",
    text: "Industrial roofing systems designed for durability, weather protection and long-term performance.",
  },
  {
    no: "05",
    title: "Fabrication",
    text: "Professional steel fabrication for industrial structures, sheds and construction requirements.",
  },
  {
    no: "06",
    title: "Erection Work",
    text: "Safe and systematic steel erection with experienced project execution and supervision.",
  },
];

const industries = [
  "Industrial Warehouses",
  "Manufacturing Plants",
  "Factory Buildings",
  "Logistics Centres",
  "Commercial Buildings",
  "Storage Facilities",
];

const faqs = [
  {
    q: "What type of PEB buildings do you construct?",
    a: "We provide PEB solutions for warehouses, factories, industrial sheds, storage facilities, logistics buildings and other commercial requirements.",
  },
  {
    q: "Do you handle fabrication and erection?",
    a: "Yes. Our services can include structural fabrication, transportation coordination and site erection.",
  },
  {
    q: "Can I request a project quotation?",
    a: "Yes. Contact us by phone or WhatsApp with your project size and requirements for a discussion and quotation.",
  },
  {
    q: "Where do you provide construction services?",
    a: "We are based in Nelamangala, Bangalore and can discuss industrial and construction requirements in surrounding areas and project locations.",
  },
];

function App() {
  return (
    <div className="site">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="tg-logo">TG</span>

          <span className="brand-text">
            <strong>TIRUMALA</strong>
            <small>GROUPS</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-whatsapp"
          href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20need%20a%20quotation.`}
        >
          WhatsApp ↗
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-image">
          <img
            src={img("hero-shed.jpg")}
            alt="Tirumala Groups PEB industrial shed"
          />

          <div className="hero-image-overlay"></div>

          <div className="hero-image-label">
            <span>PEB</span>
            <small>INDUSTRIAL SOLUTIONS</small>
          </div>
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            PEB INDUSTRIAL SHEDS • BUILDING CONSTRUCTION
          </div>

          <h1>
            Building <em>Strength</em>.
            <br />
            Creating Tomorrow.
          </h1>

          <p>
            TIRUMALA GROUPS provides professional PEB industrial shed,
            building construction, steel structure and contracting solutions
            with a focus on quality, strength and dependable execution.
          </p>

          <div className="hero-buttons">
            <a
              className="btn btn-gold"
              href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20need%20a%20free%20quote.`}
            >
              Get Free Quote ↗
            </a>

            <a
              className="btn btn-outline"
              href={`tel:+91${phone1}`}
            >
              Call +91 {phone1}
            </a>
          </div>

          <div className="hero-trust">
            <span>✓ Quality Materials</span>
            <span>✓ Professional Work</span>
            <span>✓ Reliable Execution</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <div className="section-number">01 / ABOUT US</div>

          <h2>
            Strong foundations.
            <br />
            <em>Better buildings.</em>
          </h2>
        </div>

        <div className="about-content">
          <p className="large-text">
            TIRUMALA GROUPS is focused on PEB industrial sheds, steel
            structures, building construction and contracting services.
          </p>

          <p>
            Our approach combines practical engineering, quality materials,
            skilled workmanship and systematic project execution. We aim to
            deliver structures that are strong, functional and built for
            long-term use.
          </p>

          <div className="stats">
            <div>
              <strong>PEB</strong>
              <span>Industrial Sheds</span>
            </div>

            <div>
              <strong>360°</strong>
              <span>Project Support</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Quality Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE IMAGE */}
      <section className="image-banner">
        <img
          src={img("industrial-shed.jpg")}
          alt="Industrial shed construction"
        />

        <div className="image-banner-overlay"></div>

        <div className="image-banner-content">
          <div className="section-number">OUR EXPERTISE</div>

          <h2>
            Industrial spaces
            <br />
            built to <em>perform.</em>
          </h2>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="section-heading centered">
          <div className="section-number">02 / OUR SERVICES</div>

          <h2>
            Complete Construction
            <br />
            <em>Solutions.</em>
          </h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.no}>
              <div className="service-top">
                <span>{service.no}</span>
                <span>↗</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="service-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* PEB FEATURE */}
      <section className="feature-section">
        <div className="feature-image">
          <img
            src={img("warehouse.jpg")}
            alt="PEB warehouse building"
          />
        </div>

        <div className="feature-content">
          <div className="section-number">03 / PEB INDUSTRIAL SHEDS</div>

          <h2>
            Efficient.
            <br />
            Strong.
            <br />
            <em>Built for industry.</em>
          </h2>

          <p>
            Pre-engineered buildings offer efficient construction,
            practical layouts and strong structural performance for
            industrial requirements.
          </p>

          <ul>
            <li>Warehouse & storage buildings</li>
            <li>Factory & manufacturing sheds</li>
            <li>Industrial facilities</li>
            <li>Logistics & distribution buildings</li>
          </ul>

          <a
            className="text-link"
            href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20need%20a%20PEB%20industrial%20shed.`}
          >
            Discuss PEB Project →
          </a>
        </div>
      </section>

      {/* BUILDING CONSTRUCTION */}
      <section className="feature-section reverse">
        <div className="feature-image">
          <img
            src={img("construction.jpg")}
            alt="Building construction project"
          />
        </div>

        <div className="feature-content">
          <div className="section-number">04 / BUILDING CONSTRUCTION</div>

          <h2>
            From concept
            <br />
            to <em>completion.</em>
          </h2>

          <p>
            We support practical construction requirements with attention
            to quality, coordination and project execution.
          </p>

          <div className="check-list">
            <div>✓ Project planning</div>
            <div>✓ Civil & structural coordination</div>
            <div>✓ Material planning</div>
            <div>✓ Site execution</div>
          </div>
        </div>
      </section>

      {/* STEEL STRUCTURE */}
      <section className="steel-feature">
        <div className="steel-background">
          <img
            src={img("steel-structure.jpg")}
            alt="Structural steel construction"
          />
        </div>

        <div className="steel-overlay"></div>

        <div className="steel-content">
          <div className="section-number">05 / STEEL STRUCTURES</div>

          <h2>
            Precision
            <br />
            in every
            <br />
            <em>structure.</em>
          </h2>

          <p>
            Structural steel fabrication and erection for industrial and
            commercial construction requirements.
          </p>

          <a
            className="btn btn-gold"
            href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20need%20steel%20structure%20work.`}
          >
            Enquire Now ↗
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section">
        <div className="section-heading">
          <div className="section-number">06 / WHY TIRUMALA GROUPS</div>

          <h2>
            Built on
            <br />
            <em>trust.</em>
          </h2>
        </div>

        <div className="why-grid">
          <div>
            <strong>01</strong>
            <h3>Quality Focus</h3>
            <p>
              We focus on dependable materials and professional
              workmanship.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Practical Solutions</h3>
            <p>
              Designs and construction approaches are selected around
              real project requirements.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Project Support</h3>
            <p>
              We support customers through planning, execution and
              project coordination.
            </p>
          </div>

          <div>
            <strong>04</strong>
            <h3>Reliable Execution</h3>
            <p>
              Our goal is to deliver strong structures with systematic
              project execution.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process-section">
        <div className="section-heading centered">
          <div className="section-number">07 / OUR PROCESS</div>

          <h2>
            From idea to
            <br />
            <em>finished structure.</em>
          </h2>
        </div>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Requirement</h3>
            <p>Understand your project size, purpose and requirements.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Planning</h3>
            <p>Develop a practical approach for the proposed project.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Fabrication</h3>
            <p>Prepare structural components according to project needs.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Erection</h3>
            <p>Coordinate site erection and structural installation.</p>
          </div>

          <div>
            <span>05</span>
            <h3>Completion</h3>
            <p>Complete the project with attention to quality and finish.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="projects" className="section gallery-section">
        <div className="section-heading">
          <div className="section-number">08 / PROJECT GALLERY</div>

          <h2>
            Structures that
            <br />
            <em>stand strong.</em>
          </h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img
              src={img("peb-project-1.jpg")}
              alt="PEB industrial project"
            />
            <div>
              <span>PEB PROJECT</span>
              <strong>Industrial Shed</strong>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src={img("peb-project-2.jpg")}
              alt="Warehouse project"
            />
            <div>
              <span>WAREHOUSE</span>
              <strong>Industrial Facility</strong>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src={img("peb-project-3.jpg")}
              alt="Steel structure project"
            />
            <div>
              <span>STEEL STRUCTURE</span>
              <strong>Structural Work</strong>
            </div>
          </div>

          <div className="gallery-item wide">
            <img
              src={img("peb-project-4.jpg")}
              alt="Building construction project"
            />
            <div>
              <span>CONSTRUCTION</span>
              <strong>Building Project</strong>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="materials-section">
        <div className="section-heading centered">
          <div className="section-number">09 / MATERIALS & SOLUTIONS</div>

          <h2>
            Quality materials.
            <br />
            <em>Strong results.</em>
          </h2>
        </div>

        <div className="materials-grid">
          <div>
            <strong>JSW STEEL</strong>
            <span>Steel solutions</span>
          </div>

          <div>
            <strong>TATA STEEL</strong>
            <span>Steel solutions</span>
          </div>

          <div>
            <strong>PEB</strong>
            <span>Pre-engineered buildings</span>
          </div>

          <div>
            <strong>STRUCTURAL</strong>
            <span>Steel structures</span>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section industries-section">
        <div className="section-heading">
          <div className="section-number">10 / INDUSTRIES WE SERVE</div>

          <h2>
            Built for
            <br />
            <em>every requirement.</em>
          </h2>
        </div>

        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div key={industry}>
              <span>0{index + 1}</span>
              <strong>{industry}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="section-heading centered">
          <div className="section-number">11 / FAQ</div>

          <h2>
            Frequently Asked
            <br />
            <em>Questions.</em>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <span>+</span>
              </summary>

              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <div className="section-number">12 / START YOUR PROJECT</div>

          <h2>
            Let's build
            <br />
            something <em>strong.</em>
          </h2>

          <p>
            Tell us about your industrial shed, construction or steel
            structure requirement.
          </p>

          <div className="cta-buttons">
            <a
              className="btn btn-dark"
              href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups,%20I%20want%20a%20project%20quotation.`}
            >
              WhatsApp Us ↗
            </a>

            <a
              className="btn btn-light-outline"
              href={`tel:+91${phone1}`}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-main">
          <div>
            <div className="section-number">13 / CONTACT</div>

            <h2>
              TIRUMALA
              <br />
              <em>GROUPS.</em>
            </h2>

            <p>
              PEB Industrial Sheds • Building Construction • Contractors
            </p>
          </div>

          <div className="contact-details">
            <div>
              <span>CALL</span>
              <a href={`tel:+91${phone1}`}>+91 {phone1}</a>
              <a href={`tel:+91${phone2}`}>+91 {phone2}</a>
              <a href={`tel:+91${phone3}`}>+91 {phone3}</a>
            </div>

            <div>
              <span>EMAIL</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>

            <div>
              <span>ADDRESS</span>
              <p>
                01, Pallarahalli,
                <br />
                Nelamangala, Bangalore – 562123
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <span className="tg-logo">TG</span>

          <span>
            <strong>TIRUMALA GROUPS</strong>
            <small>PEB • STEEL • CONSTRUCTION</small>
          </span>
        </div>

        <p>
          Building the Future with Strength & Quality.
        </p>

        <p>© 2026 TIRUMALA GROUPS. All Rights Reserved.</p>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="floating-actions">
        <a
          className="call"
          href={`tel:+91${phone1}`}
          aria-label="Call Tirumala Groups"
        >
          ☎
        </a>

        <a
          className="whatsapp"
          href={`https://wa.me/${whatsapp}?text=Hello%20Tirumala%20Groups`}
          aria-label="WhatsApp Tirumala Groups"
        >
          ✆
        </a>
      </div>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

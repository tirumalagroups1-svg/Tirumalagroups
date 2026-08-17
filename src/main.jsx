import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <>
      <div className="hero">
        <nav>
          <div className="logo">
            TIRUMALA <span>GROUPS</span>
          </div>

          <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroContent" id="home">
          <div className="tag">
            # BUILDING STRONG FOUNDATIONS FOR A BETTER TOMORROW
          </div>

          <h1>
            Strong Steel.
            <br />
            <span>Smart Construction.</span>
          </h1>

          <p className="lead">
            PEB Industrial Sheds, Building Construction & Contractors —
            delivering practical, durable and quality-focused construction
            solutions.
          </p>

          <div className="buttons">
            <a className="btn primary" href="#contact">
              Request a Free Quote →
            </a>

            <a className="btn" href="#services">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <section id="about" className="about">
        <h2>About Tirumala Groups</h2>
        <p className="about">
          Tirumala Groups provides reliable PEB industrial shed,
          building construction and contractor services. We focus on
          strong engineering, quality materials and practical project
          execution.
        </p>
      </section>

      <section id="services">
        <h2>Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>PEB Industrial Sheds</h3>
            <p>
              Complete pre-engineered building solutions for warehouses,
              factories and industrial facilities.
            </p>
          </div>

          <div className="card">
            <h3>Building Construction</h3>
            <p>
              Quality construction solutions designed for strength,
              durability and long-term performance.
            </p>
          </div>

          <div className="card">
            <h3>Steel Structures</h3>
            <p>
              Structural steel fabrication and erection using quality
              materials and professional execution.
            </p>
          </div>

          <div className="card">
            <h3>Construction Contractor</h3>
            <p>
              End-to-end project support from planning and civil work
              through completion.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions">
        <h2>Steel & PEB Solutions</h2>
        <p className="about">
          We provide practical steel and PEB solutions for industrial,
          commercial and construction requirements.
        </p>

        <div className="grid">
          <div className="card">
            <h3>JSW Steel</h3>
            <p>Quality steel solutions for demanding construction projects.</p>
          </div>

          <div className="card">
            <h3>Tata Steel</h3>
            <p>Reliable structural steel solutions for modern construction.</p>
          </div>

          <div className="card">
            <h3>PEB Solutions</h3>
            <p>Efficient pre-engineered building systems from design to erection.</p>
          </div>

          <div className="card">
            <h3>Project Support</h3>
            <p>Professional coordination and execution for complete projects.</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Industrial Projects</h3>
            <p>PEB sheds and industrial construction solutions.</p>
          </div>

          <div className="card">
            <h3>Commercial Buildings</h3>
            <p>Strong and practical commercial construction solutions.</p>
          </div>

          <div className="card">
            <h3>Steel Structures</h3>
            <p>Fabrication and erection of durable steel structures.</p>
          </div>

          <div className="card">
            <h3>Custom Construction</h3>
            <p>Solutions planned around your project requirements.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get a Free Quote</h2>

        <p className="contact">
          Contact Tirumala Groups for PEB industrial sheds, building
          construction and contractor requirements.
        </p>

        <p className="contact">
          <strong>Email:</strong>{" "}
          <a href="mailto:Tirumalagroups1@gmail.com">
            Tirumalagroups1@gmail.com
          </a>
        </p>

        <p className="contact">
          <strong>Address:</strong> 24, Pallarahalli, Nelamangala,
          Bangalore – 562123
        </p>
      </section>

      <footer>
        © {new Date().getFullYear()} TIRUMALA GROUPS — PEB Industrial Sheds,
        Building Construction & Contractors
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

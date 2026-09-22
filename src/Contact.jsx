function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>Let's Connect</h2>

          <p className="contact-description">
            I am currently open to internship opportunities and
            interested in learning, contributing, and working on
            meaningful projects.
          </p>

          <a
            href="mailto:wilson.825240097@stu.untar.ac.id"
            className="contact-button"
          >
            Send Me a Message →
          </a>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:wilson.825240097@stu.untar.ac.id">
              wilson.825240097@stu.untar.ac.id
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/wilson-tanjaya/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <a
              href="https://github.com/Wilsn12"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Wilsn12
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
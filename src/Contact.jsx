import {
  Mail,
  BriefcaseBusiness,
  Code2,
  Send,
  Copy,
  Check,
} from "lucide-react";

import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState("");

  const copyText = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-text">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p className="contact-description">
            I am currently open to internship opportunities and interested in
            learning, contributing, and working on meaningful projects.
          </p>

          <a
            href="mailto:wilson.825240097@stu.untar.ac.id"
            className="contact-button"
          >

            <span>Send Me a Message</span>

            <Send size={19} />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-info">

          {/* EMAIL */}
          <div className="contact-item">

            <div className="contact-icon">
              <Mail size={24} />
            </div>

            <div className="contact-details">
              <span>Email</span>

              <a href="mailto:wilson.825240097@stu.untar.ac.id">
                wilson.825240097@stu.untar.ac.id
              </a>
            </div>

            <button
              type="button"
              className="copy-button"
              onClick={() =>
                copyText(
                  "wilson.825240097@stu.untar.ac.id",
                  "email"
                )
              }
              aria-label="Copy email"
            >
              {copied === "email" ? (
                <Check size={20} />
              ) : (
                <Copy size={20} />
              )}
            </button>

          </div>

          {/* LINKEDIN */}
          <div className="contact-item">

            <div className="contact-icon">
              <BriefcaseBusiness size={24} />
            </div>

            <div className="contact-details">
              <span>LinkedIn</span>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <button
              type="button"
              className="copy-button"
              onClick={() =>
                copyText(
                  "www.linkedin.com/in/wilson-tanjaya",
                  "linkedin"
                )
              }
              aria-label="Copy LinkedIn"
            >
              {copied === "linkedin" ? (
                <Check size={20} />
              ) : (
                <Copy size={20} />
              )}
            </button>

          </div>

          {/* GITHUB */}
          <div className="contact-item">

            <div className="contact-icon">
              <Code2 size={24} />
            </div>

            <div className="contact-details">
              <span>GitHub</span>

              <a
                href="https://github.com/Wilsn12"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Wilsn12
              </a>
            </div>

            <button
              type="button"
              className="copy-button"
              onClick={() =>
                copyText(
                  "https://github.com/Wilsn12",
                  "github"
                )
              }
              aria-label="Copy GitHub"
            >
              {copied === "github" ? (
                <Check size={20} />
              ) : (
                <Copy size={20} />
              )}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
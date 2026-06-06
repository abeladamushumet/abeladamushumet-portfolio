import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SOCIAL_LINKS } from '../../utils/constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1odj8l8', // Use env var with fallback
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_HERE',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE'
      );
      
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email via EmailJS:', error);
      alert('Failed to send message. Please try again or email directly.');
    } finally {
      setSending(false);
      setTimeout(() => setSent(false), 5000);
    }
  };

  const contactLinks = [
    {
      icon: '✉️',
      label: 'Email',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/abeladamushumet',
      href: SOCIAL_LINKS.linkedin,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/abeladamushumet',
      href: SOCIAL_LINKS.github,
    },

  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">📬 Contact</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Build Together</span>
          </h2>
          <p className="section-subtitle">
            Open to AI engineering roles, collaborations, and research opportunities. Let&apos;s connect.
          </p>
        </div>

        <div className="contact-inner">
          {/* Left - Info */}
          <div className="contact-info">
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                Get In Touch
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Whether you&apos;re looking for an AI engineer, want to discuss a project, or just want to say hello - I&apos;d love to hear from you.
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-link-item"
                    id={`contact-${item.label.toLowerCase()}-link`}
                  >
                    <div className="contact-link-icon">{item.icon}</div>
                    <div className="contact-link-text">
                      <span className="contact-link-label">{item.label}</span>
                      <span className="contact-link-value">{item.value}</span>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className="contact-link-item" style={{ cursor: 'default' }}>
                    <div className="contact-link-icon">{item.icon}</div>
                    <div className="contact-link-text">
                      <span className="contact-link-label">{item.label}</span>
                      <span className="contact-link-value">{item.value}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Resume Download */}
            <a
              href="/assets/Abel Adamu Shumet_CV.pdf"
              download
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
              id="download-cv-btn"
            >
              📄 Download Resume / CV
            </a>
          </div>

          {/* Right - Form */}
          <form className="contact-form" onSubmit={handleSubmit} id="contact-form" ref={formRef}>
            <div style={{ marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Send a Message
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {sent && (
              <div className="form-success">
                ✅ Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={sending}
              id="contact-submit-btn"
            >
              {sending ? (
                <>
                  <span
                    style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#fff',
                      borderRadius: '50%',
                      animation: 'spin 0.7s linear infinite',
                      display: 'inline-block',
                    }}
                  />
                  Sending…
                </>
              ) : (
                <>🚀 Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

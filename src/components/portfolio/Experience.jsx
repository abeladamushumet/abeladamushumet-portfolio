import { useState } from 'react';
import experienceData from '../../data/experience.json';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(1); // First one open by default

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">💼 Experience</span>
          <h2 className="section-title">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            5 internships across AI engineering, data science, and research - each building deeper expertise in applied AI.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline dot */}
              <div className={`timeline-dot${exp.current ? ' current' : ''}`}>
                {!exp.current && <div className="timeline-dot-inner" />}
              </div>

              {/* Card */}
              <div
                className={`timeline-card${expandedId === exp.id ? ' expanded' : ''}`}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                <div className="timeline-card-header">
                  <div className="timeline-card-left">
                    <div className="timeline-role">{exp.role}</div>
                    <div className="timeline-company">{exp.companyFull || exp.company}</div>
                    <div className="timeline-meta">
                      <span className="timeline-duration">{exp.duration}</span>
                      <span className="timeline-location">📍 {exp.location}</span>
                      {exp.current && (
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            color: 'var(--accent-green)',
                            background: 'rgba(16,185,129,0.08)',
                            border: '1px solid rgba(16,185,129,0.2)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '100px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="timeline-expand-icon">
                    {expandedId === exp.id ? '▲' : '▼'}
                  </span>
                </div>

                {/* Expanded Body */}
                <div className="timeline-card-body">
                  <p className="timeline-desc">{exp.description}</p>

                  <div className="timeline-responsibilities">
                    {exp.responsibilities.map((r, i) => (
                      <div key={i} className="timeline-responsibility">{r}</div>
                    ))}
                  </div>

                  <div className="timeline-tech-label">Tech Stack</div>
                  <div className="timeline-tech-chips">
                    {exp.technologies.map((t) => (
                      <span key={t} className="timeline-tech-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership / Volunteering callout */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.75rem 2rem',
            background: 'var(--gradient-primary)',
            borderRadius: '20px',
            color: '#fff',
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            🌟 Leadership & Community Impact
          </h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.88, lineHeight: 1.65, marginBottom: '1.25rem' }}>
            Beyond technical work, Abel leads AI/ML initiatives and mentors the next generation of engineers.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { role: 'President', org: 'BNMIL (Blue Nile ML Lab)' },
              { role: 'AI Domain Leader', org: 'Aspire Institute' },
              { role: 'Event Lead', org: 'Meta Codz BiT' },
              { role: 'Campus Ambassador', org: 'Gebeya / Dala Studio' },
            ].map((item) => (
              <div key={item.org} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ fontSize: '0.6875rem', opacity: 0.7, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {item.role}
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{item.org}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

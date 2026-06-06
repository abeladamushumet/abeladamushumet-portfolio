import { FOCUS_AREAS } from '../../utils/constants';

const colorMap = {
  '#4F46E5': { bg: 'rgba(79,70,229,0.08)', border: 'rgba(79,70,229,0.15)' },
  '#06B6D4': { bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.15)' },
  '#8B5CF6': { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.15)' },
  '#10B981': { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.15)' },
  '#F59E0B': { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.15)' },
  '#EF4444': { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.15)' },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">⚡ What I Build</span>
          <h2 className="section-title">
            Focus Areas &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Specializing in building production-ready AI systems across six core domains of applied machine learning.
          </p>
        </div>

        <div className="about-grid">
          {FOCUS_AREAS.map((area) => {
            const palette = colorMap[area.color] || colorMap['#4F46E5'];
            return (
              <div
                key={area.id}
                className="about-card"
                style={{
                  '--card-accent': `linear-gradient(90deg, ${area.color}, ${area.color}88)`,
                  '--card-icon-bg': palette.bg,
                }}
              >
                <div
                  className="about-card-icon"
                  style={{ border: `1px solid ${palette.border}` }}
                >
                  {area.icon}
                </div>
                <h3 className="about-card-title">{area.title}</h3>
                <p className="about-card-desc">{area.description}</p>
              </div>
            );
          })}
        </div>

        {/* Education Banner */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.75rem 2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontSize: '2.5rem' }}>🎓</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>
                BSc in Data Science
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Bahir Dar University · 2022 – 2026 (Expected)
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Leadership', value: 'BNMIL President' },
              { label: 'Program', value: 'Aspire Institute' },
              { label: 'Status', value: 'Actively Building' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero({ onOpenChat }) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="hero-content">

        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Available for opportunities
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Abel Adamu
          <span className="hero-title-line2">
            <span className="gradient-text">Shumet</span>
          </span>
        </h1>

        {/* Role subtitle */}
        <div style={{ marginBottom: '1rem' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)',
              color: 'var(--accent-secondary)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            AI Engineer &amp; Machine Learning Systems Builder
          </span>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle">
          I build intelligent systems using <strong>NLP</strong>, <strong>Speech AI</strong>, and{' '}
          <strong>Computer Vision</strong> - turning cutting-edge research into production-ready AI products.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button
            className="btn btn-primary btn-lg"
            onClick={scrollToProjects}
            id="hero-explore-btn"
          >
            🚀 Explore Work
          </button>
          <button
            className="btn btn-secondary btn-lg"
            onClick={onOpenChat}
            id="hero-ask-abel-btn"
          >
            💬 Talk to Ask Abel AI
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {[
            { value: '5+', label: 'AI Projects Built' },
            { value: '5', label: 'Companies' },
            { value: '3+', label: 'AI Domains' },
            { value: '2026', label: 'Graduating' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value gradient-text">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

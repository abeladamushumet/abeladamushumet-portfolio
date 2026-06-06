import certificationsData from '../../data/certifications.json';

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🎓 Certifications</span>
          <h2 className="section-title">
            Learning &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning through world-class programs from Udacity, IBM, DeepLearning.AI, and more.
          </p>
        </div>

        <div className="cert-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card-header">
                <span className="cert-badge">{cert.badge}</span>
                <div style={{ flex: 1 }}>
                  <div className="cert-card-category">{cert.category}</div>
                  <h3 className="cert-card-title">{cert.name}</h3>
                  <div className="cert-card-issuer">{cert.issuer}</div>
                </div>
              </div>
              <p className="cert-card-desc">{cert.description}</p>
              <div className="cert-skills">
                {cert.skills.map((s) => (
                  <span key={s} className="cert-skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

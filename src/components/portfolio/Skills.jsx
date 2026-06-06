import { SKILLS_DATA } from '../../utils/constants';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🛠️ Technical Skills</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Hover over any skill chip to see proficiency level. Built through real projects and hands-on internships.
          </p>
        </div>

        <div className="skills-categories">
          {SKILLS_DATA.map((cat) => (
            <div key={cat.category} className="skills-category">
              <div className="skills-category-header">
                <span className="skills-category-icon">{cat.icon}</span>
                <h3 className="skills-category-name">{cat.category}</h3>
              </div>
              <div className="skills-chips">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-chip ${skill.level.toLowerCase()}`}
                    title={`${skill.name} - ${skill.level}`}
                  >
                    <span className="skill-chip-level">{skill.level}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { level: 'Advanced', color: 'var(--accent-green)', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)' },
            { level: 'Intermediate', color: 'var(--accent-primary)', bg: 'rgba(79,70,229,0.06)', border: 'rgba(79,70,229,0.2)' },
            { level: 'Beginner', color: 'var(--accent-amber)', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
          ].map((item) => (
            <div
              key={item.level}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                borderRadius: '100px',
                background: item.bg,
                border: `1px solid ${item.border}`,
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: item.color,
                }}
              />
              <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: item.color }}>
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

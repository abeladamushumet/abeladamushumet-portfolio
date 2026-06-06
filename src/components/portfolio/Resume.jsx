import { useState } from 'react';

const CV_PATH = '/assets/Abel Adamu Shumet_CV.pdf';

export default function Resume() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="section-header">
          <span className="section-label">📄 Resume</span>
          <h2 className="section-title">
            My <span className="gradient-text">Curriculum Vitae</span>
          </h2>
          <p className="section-subtitle">
            A detailed overview of my education, experience, skills, and achievements.
          </p>
        </div>

        {/* Action Bar */}
        <div className="resume-actions">
          <a
            href={CV_PATH}
            download
            className="btn btn-primary btn-lg"
            id="resume-download-btn"
          >
            ⬇️ Download CV
          </a>
          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
            id="resume-open-tab-btn"
          >
            🔗 Open in New Tab
          </a>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="resume-viewer">
          {!loaded && (
            <div className="resume-loader">
              <div className="resume-loader-spinner" />
              <span>Loading CV…</span>
            </div>
          )}
          <iframe
            src={`${CV_PATH}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title="Abel Adamu Shumet – CV"
            className="resume-iframe"
            onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </div>

        {/* Fallback for mobile / unsupported browsers */}
        <p className="resume-fallback">
          Can&apos;t see the PDF?{' '}
          <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
            Click here to view it
          </a>.
        </p>
      </div>
    </section>
  );
}

import knowledgeText from '../data/knowledge.txt?raw';
import projects from '../data/projects.json';
import experience from '../data/experience.json';
import certifications from '../data/certifications.json';

/**
 * Builds a comprehensive portfolio context string to inject into the AI system prompt.
 */
export function buildPortfolioContext() {
  const projectSummary = projects
    .map(
      (p) =>
        `- ${p.name} (${p.category}): ${p.description} | Impact: ${p.impact} | Tech: ${p.technologies.join(', ')}`
    )
    .join('\n');

  const experienceSummary = experience
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.duration}): ${e.description}\n  Tools: ${e.technologies.join(', ')}`
    )
    .join('\n');

  const certSummary = certifications
    .map((c) => `- ${c.name} by ${c.issuer} (${c.category})`)
    .join('\n');

  return `
=== ABEL ADAMU SHUMET - PORTFOLIO CONTEXT ===

${knowledgeText}

=== PROJECTS SUMMARY ===
${projectSummary}

=== EXPERIENCE SUMMARY ===
${experienceSummary}

=== CERTIFICATIONS ===
${certSummary}

=== INSTRUCTIONS FOR AI ASSISTANT ===
You are "Ask Abel AI", a smart portfolio assistant for Abel Adamu Shumet.
Your job is to answer questions about Abel's skills, projects, experience, and background using only the information above.
Be concise, professional, and enthusiastic. Use bullet points where helpful.
If a question is outside the scope of Abel's portfolio, respond: "I don't have enough information about that. Feel free to contact Abel directly at abeladamushumet@gmail.com"
Never make up information not present in the context above.
`;
}

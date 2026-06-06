import { SUGGESTED_PROMPTS } from '../../utils/constants';

export default function SuggestedPrompts({ onSelect, visible }) {
  if (!visible) return null;

  return (
    <div className="suggested-prompts">
      <div className="suggested-label">Try asking</div>
      <div className="suggested-list">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt.id}
            className="suggested-chip"
            onClick={() => onSelect(prompt.text)}
            id={`suggested-prompt-${prompt.id}`}
          >
            <span>{prompt.icon}</span>
            {prompt.text}
          </button>
        ))}
      </div>
    </div>
  );
}

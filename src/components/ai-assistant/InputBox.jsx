import { useState, useRef, useCallback } from 'react';

export default function InputBox({ onSend, isLoading }) {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleSend = useCallback(() => {
    const text = value.trim();
    if (!text || isLoading) return;
    onSend(text);
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, [value, isLoading, onSend]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    // Auto-resize textarea
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = 'auto';
      ta.style.height = Math.min(ta.scrollHeight, 100) + 'px';
    }
  };

  return (
    <div className="chat-input-area">
      <div className="chat-input-wrapper">
        <textarea
          ref={textareaRef}
          className="chat-input"
          placeholder="Ask me about Abel…"
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={isLoading}
          id="chat-input-field"
          aria-label="Message input"
        />
        <button
          className="chat-send-btn"
          onClick={handleSend}
          disabled={!value.trim() || isLoading}
          aria-label="Send message"
          id="chat-send-btn"
        >
          {isLoading ? (
            <span
              style={{
                width: '14px',
                height: '14px',
                border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#fff',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'spin 0.7s linear infinite',
              }}
            />
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          )}
        </button>
      </div>
      <p
        style={{
          fontSize: '0.6875rem',
          color: 'var(--text-subtle)',
          textAlign: 'center',
          marginTop: '0.5rem',
        }}
      >
        Press Enter to send · Shift+Enter for new line
      </p>
    </div>
  );
}

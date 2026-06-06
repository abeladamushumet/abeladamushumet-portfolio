import { useEffect } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';
import SuggestedPrompts from './SuggestedPrompts';
import '../../styles/chatbot.css';

export default function ChatWindow({
  messages,
  isLoading,
  isOpen,
  onClose,
  onSend,
  onClear,
}) {
  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (window.innerWidth <= 480 && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <div
        className={`chat-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`chat-window ${isOpen ? 'visible' : 'hidden'}`}
        role="dialog"
        aria-label="Ask Abel AI Assistant"
      >
        <div className="chat-header">
          <div className="chat-header-avatar">
            🤖
            <div className="chat-header-online" />
          </div>
          <div className="chat-header-info">
            <div className="chat-header-name">Ask Abel AI</div>
            <div className="chat-header-status">Online</div>
          </div>
          <div className="chat-header-actions">
            <button
              className="chat-header-btn"
              onClick={onClear}
              title="Clear Chat"
              aria-label="Clear chat history"
              id="chat-clear-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
            <button
              className="chat-header-btn"
              onClick={onClose}
              title="Close"
              aria-label="Close chat"
              id="chat-close-btn"
            >
              ✕
            </button>
          </div>
        </div>

        <MessageList messages={messages} isLoading={isLoading} />
        
        <SuggestedPrompts
          visible={messages.length === 1}
          onSelect={onSend}
        />

        <InputBox onSend={onSend} isLoading={isLoading} />
      </div>
    </>
  );
}

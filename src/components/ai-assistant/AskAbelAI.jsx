import { useChat } from '../../hooks/useChat';
import ChatWindow from './ChatWindow';

export default function AskAbelAI({ forceOpen, onOpenStateChange }) {
  const {
    messages,
    isLoading,
    isOpen,
    openChat,
    closeChat,
    toggleChat,
    sendMessage,
    clearChat,
  } = useChat();

  // Handle external open trigger
  if (forceOpen && !isOpen) {
    openChat();
    if (onOpenStateChange) onOpenStateChange(true);
  }

  const handleClose = () => {
    closeChat();
    if (onOpenStateChange) onOpenStateChange(false);
  };

  const handleToggle = () => {
    toggleChat();
    if (onOpenStateChange) onOpenStateChange(!isOpen);
  };

  return (
    <>
      <button
        className={`ask-abel-trigger ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
        aria-label={isOpen ? 'Close AI Assistant' : 'Open Ask Abel AI Assistant'}
        aria-expanded={isOpen}
        id="ask-abel-floating-btn"
      >
        <div className="ask-abel-pulse" />
        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>
          {isOpen ? '✕' : '💬'}
        </span>
        <span className="ask-abel-trigger-label">Ask Abel AI</span>
      </button>

      <ChatWindow
        messages={messages}
        isLoading={isLoading}
        isOpen={isOpen}
        onClose={handleClose}
        onSend={sendMessage}
        onClear={clearChat}
      />
    </>
  );
}
